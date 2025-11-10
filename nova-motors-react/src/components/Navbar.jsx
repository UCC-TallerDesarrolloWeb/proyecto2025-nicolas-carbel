import React from 'react';
import { NavLink } from 'react-router-dom';
import '@styles/_layout.scss';

// Importa el hook personalizado para acceder al estado del carrito
import { useCart } from '@context/CartContext'; 

/**
 * Renderiza la barra de navegación principal del sitio.
 * Utiliza NavLink para la navegación SPA (Single Page Application) y 
 * muestra la cantidad de productos en el carrito desde el CartContext.
 */
const Navbar = () => {
  // Obtiene la cantidad de items (un número) del contexto global del carrito
  const { cartCount } = useCart(); 

  return (
    <nav className="main-nav">
      {/* NavLink se usa en lugar de <a> para la navegación de React.
        Automáticamente añade una clase 'active' al enlace de la 
        página actual.
      */}
      <NavLink to="/" className="nav-link">
        CATÁLOGO DE AUTOS
      </NavLink>
      <NavLink to="/financiacion" className="nav-link">
        FINANCIACIÓN
      </NavLink>
      <NavLink to="/contacto" className="nav-link">
        CONTACTO
      </NavLink>
      <NavLink to="/carrito" className="nav-link">
        CARRITO DE COMPRAS 
        {/* El contador se actualiza dinámicamente desde el contexto */}
        <span id="cant-prod">{cartCount}</span>
      </NavLink>
    </nav>
  );
};

export default Navbar;