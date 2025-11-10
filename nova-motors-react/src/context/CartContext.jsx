import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Creamos el Contexto
const CartContext = createContext();

// 2. Creamos un "Hook" personalizado (sigue siendo exportación nombrada)
// Este 'export' está bien y es el que causa el warning
export const useCart = () => useContext(CartContext);

// 3. Creamos el "Proveedor" del contexto
// (Función flecha)
//
// ¡CAMBIO AQUÍ! Quitamos el "export" de esta línea
//
const CartProvider = ({ children }) => {
  // 4. REQUISITO: useState - Este estado contendrá nuestro carrito
  const [cartItems, setCartItems] = useState(() => {
    try {
      // REQUISITO: Guardar en localStorage
      const localCart = localStorage.getItem('carrito');
      return localCart ? JSON.parse(localCart) : [];
    } catch (error) {
      console.error("Error al leer el carrito de localStorage", error);
      return [];
    }
  });

  // 5. REQUISITO: useEffect - Sincronizamos con localStorage
  useEffect(() => {
    try {
      localStorage.setItem('carrito', JSON.stringify(cartItems));
    } catch (error) {
      console.error("Error al guardar el carrito en localStorage", error);
    }
  }, [cartItems]);

  // 6. Función para agregar al carrito
  const addToCart = (productId) => {
    setCartItems(prevItems => [...prevItems, productId]);
  };

  // 7. Funciones para la página del carrito
  const clearCart = () => {
    setCartItems([]);
  };
  
  const removeFromCart = (indexToRemove) => {
    setCartItems(prevItems => prevItems.filter((_, index) => index !== indexToRemove));
  };

  // 8. Exponemos el estado y las funciones
  const value = {
    cartItems,
    addToCart,
    clearCart,
    removeFromCart,
    cartCount: cartItems.length 
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

//
// ¡CAMBIO AQUÍ! Exportamos el Provider como "default" al final
//
export default CartProvider;