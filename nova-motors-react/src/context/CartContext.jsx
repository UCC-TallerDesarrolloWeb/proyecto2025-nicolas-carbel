import React, { createContext, useState, useContext, useEffect } from 'react';

/**
 * @typedef {object} CartContextValue
 * @property {number[]} cartItems - Array de IDs de productos en el carrito.
 * @property {(id: number) => void} addToCart - Función para añadir un ID de producto al carrito.
 * @property {() => void} clearCart - Función para vaciar el carrito.
 * @property {(index: number) => void} removeFromCart - Función para eliminar un item por su índice.
 * @property {number} cartCount - El número total de items en el carrito.
 */

/*
 * Crea el contexto para el carrito de compras.
 * @type {React.Context<CartContextValue>}
 */
const CartContext = createContext();

/*
 * Hook personalizado (custom hook) para acceder fácilmente al contexto del carrito.
 * Proporciona una forma corta de usar `useContext(CartContext)`.
 * @returns {CartContextValue} El valor del contexto del carrito.
 */
export const useCart = () => useContext(CartContext);

/*
 * Componente Proveedor (Provider) que envuelve la aplicación
 * y gestiona el estado global del carrito.
 * @param {object} props
 * @param {React.ReactNode} props.children - Los componentes hijos que tendrán acceso al contexto.
 */
export const CartProvider = ({ children }) => {
  
  /*
   * Estado para almacenar los items del carrito (un array de IDs).
   * Utiliza una "inicialización perezosa" (lazy initialization) con una función
   * para leer el localStorage *solo una vez* cuando el componente se monta.
   */
  const [cartItems, setCartItems] = useState(() => {
    try {
      // Intenta obtener el carrito guardado de localStorage.
      const localCart = localStorage.getItem('carrito');
      // Si existe, lo parsea (convierte de JSON string a array).
      // Si no, devuelve un array vacío.
      return localCart ? JSON.parse(localCart) : [];
    } catch (error) {
      console.error("Error al leer el carrito de localStorage", error);
      return [];
    }
  });

  /**
   * Hook de efecto (useEffect) para sincronizar el estado del carrito
   * con el localStorage cada vez que `cartItems` cambia.
   */
  useEffect(() => {
    try {
      // Guarda el estado actual del carrito en localStorage como un string JSON.
      localStorage.setItem('carrito', JSON.stringify(cartItems));
    } catch (error) {
      console.error("Error al guardar el carrito en localStorage", error);
    }
  }, [cartItems]); // <- Dependencia: se ejecuta solo si 'cartItems' cambia.

  /**
   * Añade un ID de producto al array del carrito.
   * @param {number} productId - El ID del producto a añadir.
   */
  const addToCart = (productId) => {
    // Actualiza el estado basado en el estado anterior (prevItems).
    setCartItems(prevItems => [...prevItems, productId]);
  };

  /**
   * Vacía el carrito estableciendo el estado a un array vacío.
   */
  const clearCart = () => {
    setCartItems([]);
  };
  
  /**
   * Elimina un item del carrito usando su *índice* en el array.
   * Nota: Esto elimina solo la primera ocurrencia si hay duplicados.
   * @param {number} indexToRemove - El índice del item a eliminar.
   */
  const removeFromCart = (indexToRemove) => {
    setCartItems(prevItems => 
      // Crea un nuevo array filtrando el item cuyo índice coincide.
      prevItems.filter((_, index) => index !== indexToRemove)
    );
  };

  /**
   * Objeto 'value' que contiene el estado y las funciones
   * que serán expuestos a los componentes consumidores del contexto.
   */
  const value = {
    cartItems,
    addToCart,
    clearCart,
    removeFromCart,
    // Expone la cantidad total de items para uso fácil (ej. en el Header).
    cartCount: cartItems.length 
  };

  /**
   * Retorna el componente Provider del contexto, pasando el 'value'
   * a todos los componentes 'children' anidados.
   */
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};