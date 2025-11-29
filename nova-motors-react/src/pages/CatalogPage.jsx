import React, { useState, useEffect, useMemo } from 'react';
import Header from '@components/Header';
import Filters from '@components/Filters';
import ProductCard from '@components/ProductCard';
import Modal from '@components/common/Modal'; 
import { getProducts } from '@api/products';
import { formatPrice } from '@utils/formatters'; 
import '@styles/_layout.scss';
import '@styles/_pages.scss';

/**
 * Componente de página que muestra el catálogo completo de productos.
 * Permite filtrar, ordenar y ver detalles de los productos en un modal.
 */
const CatalogPage = () => {
  // Estado para almacenar la lista *maestra* y completa de productos de la API
  const [products, setProducts] = useState([]); 
  // Estado para controlar la UI de carga mientras se fetchean los productos
  const [isLoading, setIsLoading] = useState(true);
  
  /**
   * Estado unificado para todos los filtros aplicados.
   * Contiene valores de texto, checkboxes, selects, etc.
   */
  const [filters, setFilters] = useState({
    search: '', minPrice: '', maxPrice: '',
    deportivos: false, suv: false, electricos: false,
    superdeportivos: false, hiperdeportivos: false,
    order: '', marca: 'Todas'
  });

  /**
   * Estado para controlar el modal de detalles.
   * `null` = Modal cerrado.
   * `{...producto}` = Modal abierto mostrando ese producto.
   */
  const [selectedProduct, setSelectedProduct] = useState(null); 

  /**
   * Hook de efecto (useEffect) para cargar los productos desde la API
   * solo una vez, cuando el componente se monta por primera vez.
   */
  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      const data = await getProducts();
      setProducts(data); // Guarda la lista maestra
      setIsLoading(false);
    };
    loadProducts();
  }, []); // El array vacío [] asegura que se ejecute solo al montar.

  /**
   * Manejador genérico para actualizar el estado de los filtros.
   * Detecta si el cambio proviene de un checkbox o de otro tipo de input.
   * @param {React.ChangeEvent<HTMLInputElement | HTMLSelectElement>} e - El evento del input.
   */
  const handleFilterChange = (e) => {
    const { id, value, type, checked } = e.target;
    
    setFilters(prevFilters => ({
      ...prevFilters,
      // Si es un checkbox, usa 'checked'. Si no, usa 'value'.
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  /**
   * Hook de memo (useMemo) para recalcular la lista de productos filtrados.
   * Esta lógica se ejecuta solo si la lista maestra `products` o los `filters` cambian,
   * optimizando el rendimiento y evitando recálculos en cada render.
   */
  const filteredProducts = useMemo(() => {
    // Inicia con la lista completa de productos
    let tempProducts = [...products];

    // 1. Filtrar por Búsqueda (search)
    if (filters.search) {
      const searchWord = filters.search.toLowerCase();
      tempProducts = tempProducts.filter(
        prod =>
          prod.nombre.toLowerCase().includes(searchWord) ||
          prod.description.toLowerCase().includes(searchWord)
      );
    }

    // 2. Filtrar por Rango de Precios
    const min = parseFloat(filters.minPrice) || 0;
    const max = parseFloat(filters.maxPrice) || Infinity;
    tempProducts = tempProducts.filter(
      prod => prod.precio >= min && prod.precio <= max
    );

    // 3. Filtrar por Categorías (checkboxes)
    const categoryFilters = [];
    if (filters.deportivos) categoryFilters.push("Deportivos");
    if (filters.suv) categoryFilters.push("SUV");
    if (filters.electricos) categoryFilters.push("Eléctricos");
    if (filters.superdeportivos) categoryFilters.push("Superdeportivos");
    if (filters.hiperdeportivos) categoryFilters.push("Hiperdeportivos");

    if (categoryFilters.length > 0) {
      tempProducts = tempProducts.filter(prod =>
        categoryFilters.includes(prod.categoria)
      );
    }

    // 4. Filtrar por Marca (select)
    if (filters.marca !== 'Todas') {
      tempProducts = tempProducts.filter(prod => prod.marca === filters.marca);
    }

    // 5. Aplicar Ordenamiento (sort)
    // Nota: .sort() muta el array, por eso trabajamos sobre una copia (tempProducts).
    switch (filters.order) {
      case 'menor': tempProducts.sort((a, b) => a.precio - b.precio); break;
      case 'mayor': tempProducts.sort((a, b) => b.precio - a.precio); break;
      case 'a-z': tempProducts.sort((a, b) => a.nombre.localeCompare(b.nombre)); break;
      case 'z-a': tempProducts.sort((a, b) => b.nombre.localeCompare(a.nombre)); break;
      default: break;
    }

    return tempProducts;
  }, [products, filters]); // Dependencias: se recalcula si cambian

  /**
   * Abre el modal de detalles guardando el producto en el estado.
   * @param {object} product - El producto en el que se hizo clic.
   */
  const handleViewDetails = (product) => {
    setSelectedProduct(product); 
  };

  /**
   * Cierra el modal de detalles reseteando el estado a `null`.
   */
  const handleCloseModal = () => {
    setSelectedProduct(null); 
  };
  
  return (
    <>
      <Header
        title="CATÁLOGO DE AUTOS"
        subtitle="Experimenta la excelencia en cada curva"
      />
      <div className="container">
        {/* Componente de filtros. Le pasamos el estado y el manejador */}
        <Filters 
          filters={filters} 
          onFilterChange={handleFilterChange} 
        />
        
        <main className="catalog" id="catalog">
          {/* Renderizado condicional: estado de carga */}
          {isLoading ? (
            <p>Cargando productos...</p>
          ) : (
            // Mapea la lista *filtrada y ordenada* para crear las tarjetas
            filteredProducts.map(product => (
              <ProductCard 
                key={product.id}
                product={product}
                onViewDetails={handleViewDetails} // Pasa el manejador al botón
              />
            ))
          )}

          {/* Mensaje si no hay productos después de filtrar */}
          {!isLoading && filteredProducts.length === 0 && (
            <p>No se encontraron productos que coincidan con su búsqueda.</p>
          )}
        </main>
      </div>
      
      {/* El Modal. Es visible o no basado en `selectedProduct`.
        `!!selectedProduct` convierte el objeto (truthy) a `true` 
        y `null` (falsy) a `false`.
      */}
      <Modal
        show={!!selectedProduct} 
        onClose={handleCloseModal}
        title={selectedProduct?.nombre} // Usa optional chaining por si es null
      >
        {/* Renderiza el contenido del modal solo si hay un producto seleccionado */}
        {selectedProduct && (
          <>
            <p>{selectedProduct.description}</p>
            <p>{formatPrice(selectedProduct.precio)}</p>
          </>
        )}
      </Modal>
    </>
  );
};

export default CatalogPage;