import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Creamos el Contexto
const CartContext = createContext();

// 2. Creamos un "Hook" personalizado
// (Ignoraremos el 'warning' de ESLint, ya que esto funciona)
export const useCart = () => useContext(CartContext);

// 3. Creamos el "Proveedor" del contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const localCart = localStorage.getItem('carrito');
      return localCart ? JSON.parse(localCart) : [];
    } catch (error) {
      console.error("Error al leer el carrito de localStorage", error);
      return [];
    }
  });

  // Sincronizamos con localStorage
  useEffect(() => {
    try {
      localStorage.setItem('carrito', JSON.stringify(cartItems));
    } catch (error) {
      console.error("Error al guardar el carrito en localStorage", error);
    }
  }, [cartItems]); 

  const addToCart = (productId) => {
    setCartItems(prevItems => [...prevItems, productId]);
  };

  const clearCart = () => {
    setCartItems([]);
  };
  
  const removeFromCart = (indexToRemove) => {
    setCartItems(prevItems => prevItems.filter((_, index) => index !== indexToRemove));
  };

  const value = {
    cartItems,
    addToCart,
    clearCart,
    removeFromCart,
    cartCount: cartItems.length 
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};