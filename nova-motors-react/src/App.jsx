import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';


const App = () => {
  return (
    <>
      <Navbar />
      
      <main>
        {/* 'Outlet' renderizará la página hija aquí */}
        <Outlet />
      </main>
      
      <Footer />
    </>
  );
};

export default App;