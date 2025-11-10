import React from 'react';
import '@styles/_layout.scss'; // Importa estilos con alias

/**
 * REQUISITO: Imagen en /public
 * (Asegúrate de poner "Logo de Nova Motors.png" en la carpeta /public)
 * (Función flecha)
 */
const Header = ({ title, subtitle }) => {
  return (
    <header className="hero">
      <div className="header-content">
        <img
          src="/Logo de Nova Motors.png" // Accede a la imagen en /public
          alt="Logo de Nova Motors"
          className="logo"
        />
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </header>
  );
};

export default Header;