import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//
// ¡CAMBIO AQUÍ! Importamos CartProvider SIN llaves {}
//
import CartProvider from '@context/CartContext'; 

import App from './App.jsx';
import CatalogPage from '@pages/CatalogPage';
import FinancingPage from '@pages/FinancingPage';
import ContactPage from '@pages/ContactPage';
import CartPage from '@pages/CartPage';

import '@styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Envolvemos <BrowserRouter> con <CartProvider> */}
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<CatalogPage />} />
            <Route path="financiacion" element={<FinancingPage />} />
            <Route path="contacto" element={<ContactPage />} />
            <Route path="carrito" element={<CartPage />} />
            <Route path="*" element={<h1>404: Página no encontrada</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
);