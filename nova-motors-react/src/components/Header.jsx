import React from 'react';
import '@styles/_layout.scss'; // Importa los estilos de layout

/**
 * Renderiza el encabezado principal (sección "hero") de una página.
 * Es un componente reutilizable que acepta un título y subtítulo dinámicos.
 *
 * @param {object} props - Las propiedades del componente.
 * @param {string} props.title - El título principal (H1) a mostrar.
 * @param {string} props.subtitle - El texto secundario (p) a mostrar debajo del título.
 */
const Header = ({ title, subtitle }) => {
  return (
    <header className="hero">
      <div className="header-content">
        {/* El logo se carga desde la carpeta /public.
            La barra '/' al inicio de src apunta a la raíz de /public. */}
        <img
          src="/Logo de Nova Motors.png"
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