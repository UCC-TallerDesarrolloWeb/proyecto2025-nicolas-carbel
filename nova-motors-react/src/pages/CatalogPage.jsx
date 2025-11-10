import React, { useState, useEffect, useMemo } from 'react';

// Componentes
import Header from '@components/Header';
import Filters from '@components/Filters';
import ProductCard from '@components/ProductCard';
import Modal from '@components/common/Modal'; // <-- 1. IMPORTA EL MODAL

// Lógica
import { getProducts } from '@api/products';
import { formatPrice } from '@utils/formatters'; // <-- Importa el formateador

// Estilos
import '@styles/_layout.scss';
import '@styles/_pages.scss';

// (Función flecha)
const CatalogPage = () => {
  // Estado de la API
  const [products, setProducts] = useState([]); // Master list
  const [isLoading, setIsLoading] = useState(true);
  
  // Estado de los Filtros
  const [filters, setFilters] = useState({
    search: '',
    minPrice: '', 
    maxPrice: '',
    deportivos: false,
    suv: false,
    electricos: false,
    superdeportivos: false,
    hiperdeportivos: false,
    order: '',
    marca: 'Todas'
  });

  // 2. ESTADO PARA EL MODAL
  const [selectedProduct, setSelectedProduct] = useState(null); // null = modal cerrado

  // Carga inicial de productos (API)
  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      const data = await getProducts();
      setProducts(data);
      setIsLoading(false);
    };
    loadProducts();
  }, []);

  // Manejador de cambios de filtros
  const handleFilterChange = (e) => {
    const { id, value, type, checked } = e.target;
    
    setFilters(prevFilters => ({
      ...prevFilters,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  // Lógica de filtrado (Memoizada para performance)
  const filteredProducts = useMemo(() => {
    let tempProducts = [...products];

    // ... (toda la lógica de filtros) ...
    if (filters.search) {
      const searchWord = filters.search.toLowerCase();
      tempProducts = tempProducts.filter(
        prod =>
          prod.nombre.toLowerCase().includes(searchWord) ||
          prod.description.toLowerCase().includes(searchWord)
      );
    }
    const min = parseFloat(filters.minPrice) || 0;
    const max = parseFloat(filters.maxPrice) || Infinity;
    tempProducts = tempProducts.filter(
      prod => prod.precio >= min && prod.precio <= max
    );
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
    if (filters.marca !== 'Todas') {
      tempProducts = tempProducts.filter(prod => prod.marca === filters.marca);
    }
    switch (filters.order) {
      case 'menor':
        tempProducts.sort((a, b) => a.precio - b.precio); break;
      case 'mayor':
        tempProducts.sort((a, b) => b.precio - b.precio); break;
      case 'a-z':
        tempProducts.sort((a, b) => a.nombre.localeCompare(b.nombre)); break;
      case 'z-a':
        tempProducts.sort((a, b) => b.nombre.localeCompare(a.nombre)); break;
      default: break;
    }
    
    return tempProducts;
  }, [products, filters]);

  // 3. MANEJADORES DEL MODAL
  const handleViewDetails = (product) => {
    setSelectedProduct(product); // Abre el modal con este producto
  };

  const handleCloseModal = () => {
    setSelectedProduct(null); // Cierra el modal
  };
  
  return (
    <>
      <Header
        title="CATÁLOGO DE AUTOS"
        subtitle="Experimenta la excelencia en cada curva"
      />
      
      <div className="container">
        <Filters 
          filters={filters} 
          onFilterChange={handleFilterChange} 
        />

        <main className="catalog" id="catalog">
          {isLoading ? (
            <p>Cargando productos...</p>
          ) : (
            filteredProducts.map(product => (
              <ProductCard 
                key={product.id}
                product={product}
                // 4. PASAMOS EL MANEJADOR AL ProductCard
                onViewDetails={handleViewDetails}
              />
            ))
          )}
          
          {!isLoading && filteredProducts.length === 0 && (
            <p>No se encontraron productos que coincidan con su búsqueda.</p>
          )}
        </main>
      </div>
      
      {/* 5. RENDERIZAMOS EL MODAL (fuera del .container) */}
      <Modal
        show={!!selectedProduct} // Muestra si 'selectedProduct' no es null
        onClose={handleCloseModal}
        title={selectedProduct?.nombre} // El '?' evita errores si es null
      >
        {/* Esto es el 'children' del modal */}
        {selectedProduct && (
          <>
            <p>{selectedProduct.description}</p>
            <p>{formatPrice(selectedProduct.precio)}</p>
            {/* LÍNEA BORRADA: Ya no se muestra la imagen del producto 
              dentro del modal.
            */}
          </>
        )}
      </Modal>
    </>
  );
};

export default CatalogPage;