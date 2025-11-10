import React, { useState, useEffect, useMemo } from 'react';
import Header from '@components/Header';
// Importa el hook personalizado para acceder al contexto del carrito
import { useCart } from '@context/CartContext';
import { getProducts } from '@api/products';
import { formatPrice } from '@utils/formatters';
import '@styles/_layout.scss';
import '@styles/_pages.scss';

/**
 * Componente que renderiza la página del carrito de compras.
 * Muestra los productos agregados, sus cantidades, el total
 * y permite modificar el carrito.
 */
const CartPage = () => {
  // 1. Obtenemos el estado y funciones del Contexto
  const { cartItems, clearCart, removeFromCart } = useCart();
  
  // 2. Estado para guardar la lista maestra de productos
  const [allProducts, setAllProducts] = useState([]);
  // Estado para manejar la carga de datos de la API
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Hook de efecto (useEffect) para cargar la lista completa
   * de productos desde la API cuando el componente se monta.
   */
  useEffect(() => {
    // Función asíncrona interna para cargar los productos
    const loadProducts = async () => {
      setIsLoading(true);
      const data = await getProducts();
      setAllProducts(data);
      setIsLoading(false);
    };
    loadProducts();
  }, []); // El array vacío [] asegura que esto se ejecute solo una vez

  /**
   * Hook de memo (useMemo) para procesar y calcular los detalles del carrito.
   * Esto se recalcula solo si el carrito (`cartItems`), la lista de productos (`allProducts`),
   * o el estado de carga (`isLoading`) cambian.
   * Devuelve un objeto con la lista detallada y el total.
   */
  const { cartDetails, total } = useMemo(() => {
    // Si los productos aún no se han cargado, devuelve un estado vacío.
    if (isLoading || allProducts.length === 0) {
      return { cartDetails: [], total: 0 };
    }

    let totalCalculado = 0;
    const cartDetailsList = []; // Array para productos únicos y su cantidad
    const cartCounts = {}; // Objeto para contar ocurrencias de cada ID

    // Primero, contamos cuántas veces aparece cada ID en `cartItems`
    cartItems.forEach(id => {
      cartCounts[id] = (cartCounts[id] || 0) + 1;
    });

    // Luego, procesamos la lista de IDs únicos
    Object.keys(cartCounts).forEach(id => {
      const productId = parseInt(id);
      const cantidad = cartCounts[id];
      
      // Buscamos el producto en la lista maestra 'allProducts'
      // Se usa '==' (comparación flexible) para asegurar la coincidencia
      // aunque el ID del producto (p.id) sea string y el ID del carrito (productId) sea number.
      const product = allProducts.find(p => p.id == productId);
      
      // Si el producto se encuentra, agregamos sus detalles y cantidad
      if (product) {
        cartDetailsList.push({
          ...product,
          cantidad: cantidad
        });
        // Sumamos al total general
        totalCalculado += product.precio * cantidad;
      }
    });

    return { cartDetails: cartDetailsList, total: totalCalculado };
  }, [cartItems, allProducts, isLoading]); // Dependencias del useMemo

  /**
   * Manejador para eliminar *un* item del carrito.
   * Busca el primer índice del ID y lo pasa a la función del contexto.
   * @param {number} idToRemove - El ID del producto a eliminar.
   */
  const handleRemoveItem = (idToRemove) => {
    // Encuentra el *índice* del primer item que coincida con el ID
    const indexToRemove = cartItems.findIndex(id => id === idToRemove);
    
    // Si se encuentra (index no es -1), llama a la función del contexto
    if (indexToRemove !== -1) {
      removeFromCart(indexToRemove);
    }
  };

  return (
    <>
      <Header
        title="CARRITO DE COMPRAS"
        subtitle="Revisa tus selecciones de lujo"
      />
      
      <div className="container">
        <main className="cart-content" id="carrito-content">
          
          {/* Muestra un mensaje de carga mientras se obtienen los productos */}
          {isLoading && <p>Cargando carrito...</p>}
          
          {/* Muestra un mensaje si no está cargando y el carrito está vacío */}
          {!isLoading && cartItems.length === 0 && (
            <p>Tu carrito está vacío.</p>
          )}

          {/* Contenedor de la lista de productos en el carrito */}
          <div className="cart-list">
            {/* Mapea y renderiza cada item único del carrito */}
            {!isLoading && cartDetails.map((item) => (
              <div className="cart-item" key={item.id}>
                <h3 className="cart-item-title">{item.nombre}</h3>
                <p className="cart-item-price">{formatPrice(item.precio)}</p>
                <p className="cart-item-quantity">Cantidad: {item.cantidad}</p>
                
                {/* Botón para eliminar una unidad del producto */}
                <button 
                  type="button" 
                  className="cart-item-remove"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Eliminar producto
                </button>
                <hr />
              </div>
            ))}
          </div>

          {/* Muestra el resumen (total y botón de vaciar) solo si hay items */}
          {!isLoading && cartItems.length > 0 && (
            <div className="cart-summary">
              {/* Muestra el total formateado */}
              <p className="cart-total">Total: {formatPrice(total)}</p>
              
              {/* Botón para vaciar todo el carrito */}
              <button 
                type="button" 
                className="cart-clear"
                onClick={clearCart}
              >
                Vaciar carrito
              </button>
            </div>
          )}

        </main>
      </div>
    </>
  );
};

export default CartPage;