import React from 'react';
import { formatPrice } from '@utils/formatters'; // Importa la utilidad para formatear precios
import { useCart } from '@context/CartContext'; // Importa el hook del carrito
import '@styles/_pages.scss'; // Importa los estilos de la página

/**
 * Renderiza la tarjeta de un producto individual en el catálogo.
 *
 * @param {object} props - Las propiedades del componente.
 * @param {object} props.product - El objeto completo del producto a mostrar.
 * @param {function} props.onViewDetails - Función (pasada desde el padre) 
 * que se ejecuta al hacer clic en "Ver Detalle".
 */
const ProductCard = ({ product, onViewDetails }) => {
  // Desestructura las propiedades del producto para un acceso más fácil
  const { nombre, imagen, precio, id } = product;

  // Obtiene la función 'addToCart' del contexto global del carrito
  const { addToCart } = useCart();

  /**
   * Manejador para el botón "Agregar al carrito".
   * Llama a la función 'addToCart' del contexto, pasando el ID de este producto.
   */
  const handleAddToCart = () => {
    addToCart(id); 
  };
  
  /**
   * Manejador para el botón "Ver Detalle".
   * Llama a la función 'onViewDetails' (recibida como prop)
   * y le pasa el objeto completo de este producto.
   */
  const handleViewDetails = () => {
    onViewDetails(product); 
  };

  return (
    // Contenedor principal de la tarjeta del producto
    <div> 
      {/* La imagen se carga desde la carpeta /public/imagenes/ */}
      <img src={`/imagenes/${imagen}`} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{formatPrice(precio)}</p>
      
      {/* Botones de acción con sus respectivos manejadores onClick */}
      <button type="button" onClick={handleViewDetails}>Ver Detalle</button>
      <br />
      <button type="button" onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;