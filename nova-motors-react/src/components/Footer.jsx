import React from 'react';
import '@styles/_layout.scss'; // Importa los estilos de layout

/**
 * Renderiza el pie de página principal del sitio.
 * Es un componente estático que muestra la información de contacto.
 */
const Footer = () => {
  return (
    <footer className="main-footer">
      <p>
        Contacto: <a href="mailto:info@novamotors.com">info@novamotors.com</a> |
        Tel: +54 351 123456
      </p>
    </footer>
  );
};

export default Footer;