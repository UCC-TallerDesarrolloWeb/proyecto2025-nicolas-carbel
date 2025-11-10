import React from 'react';
import { formatPrice } from '@utils/formatters';
import { useCart } from '@context/CartContext';
import '@styles/_pages.scss';

const ProductCard = ({ product, onViewDetails }) => {
  const { nombre, imagen, precio, id } = product;
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(id); 
  };
  
  const handleViewDetails = () => {
    onViewDetails(product); 
  };

  return (
    <div> 
      <img src={`/imagenes/${imagen}`} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{formatPrice(precio)}</p>
      
      <button type="button" onClick={handleViewDetails}>Ver Detalle</button>
      <br />
      <button type="button" onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;