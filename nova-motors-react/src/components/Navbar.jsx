import React from 'react';
import { NavLink } from 'react-router-dom';
import '@styles/_layout.scss';

// 1. Importamos nuestro hook 'useCart'
import { useCart } from '@context/CartContext'; // <-- ¡NUEVO!

const Navbar = () => {
  // 2. Usamos el hook para obtener la cantidad del carrito
  const { cartCount } = useCart(); // <-- ¡NUEVO!

  return (
    <nav className="main-nav">
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
        {/* 3. Usamos el 'cartCount' del contexto */}
        CARRITO DE COMPRAS <span id="cant-prod">{cartCount}</span>
      </NavLink>
    </nav>
  );
};

export default Navbar;