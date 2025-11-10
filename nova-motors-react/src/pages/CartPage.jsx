import React, { useState, useEffect, useMemo } from 'react';
import Header from '@components/Header';
import { useCart } from '@context/CartContext';
import { getProducts } from '@api/products';
import { formatPrice } from '@utils/formatters';
import '@styles/_layout.scss';
import '@styles/_pages.scss';

const CartPage = () => {
  const { cartItems, clearCart, removeFromCart } = useCart();
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      const data = await getProducts();
      setAllProducts(data);
      setIsLoading(false);
    };
    loadProducts();
  }, []);

  // 4. Lógica para procesar el carrito (CON LA CORRECCIÓN)
  const { cartDetails, total } = useMemo(() => {
    if (isLoading || allProducts.length === 0) {
      return { cartDetails: [], total: 0 };
    }

    let totalCalculado = 0;
    const cartDetailsList = [];
    const cartCounts = {};

    cartItems.forEach(id => {
      cartCounts[id] = (cartCounts[id] || 0) + 1;
    });

    Object.keys(cartCounts).forEach(id => {
      const productId = parseInt(id);
      
      // VVV CORRECCIÓN CLAVE VVV
      // Usamos '==' (comparación flexible) en lugar de '==='
      // Esto soluciona el error si 'p.id' es string ("1") y 'productId' es number (1).
      const product = allProducts.find(p => p.id == productId);
      // ^^^ CORRECCIÓN CLAVE ^^^

      const cantidad = cartCounts[id];
      
      if (product) {
        cartDetailsList.push({
          ...product,
          cantidad: cantidad
        });
        totalCalculado += product.precio * cantidad;
      }
    });

    return { cartDetails: cartDetailsList, total: totalCalculado };
  }, [cartItems, allProducts, isLoading]);

  // 5. Manejador para eliminar (Esta lógica elimina UN item a la vez)
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

          {/* ESTRUCTURA NUEVA: Lista de productos */}
          <div className="cart-list">
            {!isLoading && cartDetails.map((item) => (
              // Replicamos la estructura de tu foto para CADA item
              <div className="cart-item" key={item.id}>
                <h3 className="cart-item-title">{item.nombre}</h3>
                <p className="cart-item-price">{formatPrice(item.precio)}</p>
                <p className="cart-item-quantity">Cantidad: {item.cantidad}</p>
                
                {/* Usamos el texto de tu foto ("Eliminar producto").
                  Tu lógica 'handleRemoveItem' actual elimina *uno* a la vez.
                  Si quisieras eliminar *toda la línea*, necesitarías
                  modificar tu CartContext.
                */}
                <button 
                  type="button" 
                  className="cart-item-remove" // Clase para el botón/link
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Eliminar producto
                </button>
                <hr /> {/* Separador como en la foto */}
              </div>
            ))}
          </div>

          {/* ESTRUCTURA NUEVA: Resumen final */}
          {!isLoading && cartItems.length > 0 && (
            <div className="cart-summary">
              {/* Aseguramos que el total se muestre al final */}
              <p className="cart-total">Total: {formatPrice(total)}</p>
              
              <button 
                type="button" 
                className="cart-clear" // Clase para el botón
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