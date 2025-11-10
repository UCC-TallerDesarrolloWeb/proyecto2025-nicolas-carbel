import React from 'react';
import ReactDOM from 'react-dom/client';
// Importa los componentes necesarios de React Router para el enrutamiento
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importa el Proveedor de Contexto para el carrito
import { CartProvider } from '@context/CartContext'; 

// Importa el componente de Layout principal
import App from './App.jsx';

// Importa las diferentes páginas de la aplicación
import CatalogPage from '@pages/CatalogPage';
import FinancingPage from '@pages/FinancingPage';
import ContactPage from '@pages/ContactPage';
import CartPage from '@pages/CartPage';

// Importa la hoja de estilos global principal
import '@styles/main.scss';

// Punto de entrada de la aplicación React 18
ReactDOM.createRoot(document.getElementById('root')).render(
  // Activa el Modo Estricto de React para detectar problemas potenciales
  <React.StrictMode>
    
    {/*
      Envuelve toda la aplicación con el Proveedor del Carrito.
      Esto asegura que cualquier componente, sin importar la ruta,
      pueda acceder al estado global del carrito (ej. useCart()).
    */}
    <CartProvider>
      
      {/* Habilita el enrutamiento de React Router en la aplicación */}
      <BrowserRouter>
        
        {/* Contenedor principal para definir la estructura de rutas */}
        <Routes>
          
          {/*
            Define la "Ruta de Layout" (App.jsx).
            El componente 'App' (con Navbar/Footer) se renderiza siempre.
            Las rutas anidadas (hijas) se renderizarán en el <Outlet> de App.
          */}
          <Route path="/" element={<App />}>
            
            {/* Ruta 'index': es la página por defecto que se muestra en "/" */}
            <Route index element={<CatalogPage />} />
            
            {/* Rutas para las otras páginas */}
            <Route path="financiacion" element={<FinancingPage />} />
            <Route path="contacto" element={<ContactPage />} />
            <Route path="carrito" element={<CartPage />} />
            
            {/* Ruta 'catch-all' (comodín) para manejar páginas no encontradas (404) */}
            <Route path="*" element={<h1>404: Página no encontrada</h1>} />
          
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
);