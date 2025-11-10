import React from 'react';
import { formatPrice } from '@utils/formatters';
import { useCart } from '@context/CartContext';
import '@styles/_pages.scss';

// 1. AÑADE 'onViewDetails' a las props
const ProductCard = ({ product, onViewDetails }) => {
  const { nombre, imagen, precio, id } = product;
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(id); 
  };
  
  // 2. EL 'handleViewDetails' AHORA LLAMA A LA PROP
  const handleViewDetails = () => {
    // Llama a la función del padre ('CatalogPage')
    // pasándole el producto de esta tarjeta
    onViewDetails(product); 
  };

  return (
    <div> 
      <img src={`/imagenes/${imagen}`} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{formatPrice(precio)}</p>
      
      {/* 3. Conectamos el onClick correcto */}
      <button type="button" onClick={handleViewDetails}>Ver Detalle</button>
      <br />
      <button type="button" onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;