import React, { useState, useEffect, useMemo } from 'react';
import Header from '@components/Header';
import { useCart } from '@context/CartContext'; // Importamos el hook del carrito
import { getProducts } from '@api/products'; // Importamos la API de productos
import { formatPrice } from '@utils/formatters';
import '@styles/_layout.scss';
import '@styles/_pages.scss';

const CartPage = () => {
  // 1. Obtenemos el estado y funciones del Contexto
  const { cartItems, clearCart, removeFromCart } = useCart();
  
  // 2. Estado para guardar la lista maestra de productos
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 3. Cargamos TODOS los productos de la API
  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      const data = await getProducts();
      setAllProducts(data);
      setIsLoading(false);
    };
    loadProducts();
  }, []);

  // 4. Lógica para procesar el carrito (usando useMemo)
  const { cartDetails, total } = useMemo(() => {
    if (isLoading || allProducts.length === 0) {
      return { cartDetails: [], total: 0 };
    }

    let total = 0;
    const cartDetails = []; // Lista de productos únicos
    const cartCounts = {}; // Objeto para contar

    // Contamos las ocurrencias de cada ID
    cartItems.forEach(id => {
      cartCounts[id] = (cartCounts[id] || 0) + 1;
    });

    // Buscamos los detalles de cada producto en 'allProducts'
    Object.keys(cartCounts).forEach(id => {
      const productId = parseInt(id);
      const product = allProducts.find(p => p.id === productId);
      const cantidad = cartCounts[id];
      
      if (product) {
        cartDetails.push({
          ...product,
          cantidad: cantidad
        });
        total += product.precio * cantidad;
      }
    });

    return { cartDetails, total };
  }, [cartItems, allProducts, isLoading]); // Recalcula si el carrito o los productos cambian

  // 5. Manejador para eliminar producto
  const handleRemoveItem = (idToRemove) => {
    const indexToRemove = cartItems.findIndex(id => id === idToRemove);
    if (indexToRemove !== -1) {
      removeFromCart(indexToRemove); // Llamamos a la función del context
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
          
          {isLoading && <p>Cargando carrito...</p>}
          
          {!isLoading && cartItems.length === 0 && (
            <p>Tu carrito está vacío.</p>
          )}

          {!isLoading && cartDetails.map((item) => (
            // Replicamos la estructura de tu 'mostrarCarrito'
            <div key={item.id}>
              <h3>{item.nombre}</h3>
              <p>{formatPrice(item.precio)}</p>
              <p>Cantidad: {item.cantidad}</p>
              
              <button type="button" onClick={() => handleRemoveItem(item.id)}>
                Eliminar un producto
              </button>
            </div>
          ))}

          {/* Total y botón de vaciar */}
          <p>Total: {formatPrice(total)}</p>
          
          {cartItems.length > 0 && (
            <button type="button" onClick={clearCart}>
              Vaciar carrito
            </button>
          )}

        </main>
      </div>
    </>
  );
};

export default CartPage;