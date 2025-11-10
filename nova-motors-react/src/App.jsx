import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';


/**
 * Componente principal de la aplicación, también conocido como "Layout Route".
 * * Este componente define la estructura visual persistente (común)
 * para todas las páginas del sitio, como la barra de navegación y el pie de página.
 */
const App = () => {
  return (
    // Se usa un fragmento (<>) para agrupar los elementos
    // sin añadir un nodo extra al DOM.
    <>
      {/* El Navbar se mostrará en la parte superior de todas las páginas */}
      <Navbar />
      
      {/* Contenedor principal para el contenido de la página */}
      <main>
        {/*
          'Outlet' es un componente de React Router.
          Actúa como un marcador de posición (placeholder) donde
          se renderizará el componente de la ruta hija
          (ej. HomePage, CatalogPage, ContactPage).
        */}
        <Outlet />
      </main>
      
      {/* El Footer se mostrará en la parte inferior de todas las páginas */}
      <Footer />
    </>
  );
};

export default App;