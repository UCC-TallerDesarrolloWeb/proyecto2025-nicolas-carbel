import React from 'react';
import '@styles/_components.scss'; // Importa los estilos CSS/SCSS del modal

/**
 * Un componente de Modal genérico y reutilizable.
 * Muestra una ventana emergente con un título, contenido y botón de cierre.
 *
 * @param {object} props - Las propiedades del componente.
 * @param {boolean} props.show - Si es 'true', el modal se muestra. Si es 'false', no se renderiza.
 * @param {function} props.onClose - La función que se debe ejecutar al hacer clic en el fondo o en el botón "Cerrar".
 * @param {string} props.title - El título que se mostrará en el encabezado (h2) del modal.
 * @param {React.ReactNode} props.children - El contenido interno del modal (ej: <p>, <img>, etc.).
 */
const Modal = ({ show, onClose, title, children }) => {
  // Si la prop 'show' es falsa, no renderizamos nada (el modal está oculto)
  if (!show) {
    return null;
  }

  return (
    // Contenedor principal del modal (el fondo oscuro)
    // Asigna el evento 'onClose' al fondo para cerrar el modal al hacer clic fuera.
    <div className="modal" onClick={onClose}>
      
      {/* Contenido visible del modal (la caja blanca) */}
      {/* Usamos e.stopPropagation() para evitar que un clic DENTRO del modal
          se propague al fondo y cierre el modal accidentalmente. */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        
        {/* Renderiza el contenido que se pasó al componente */}
        {children}
        
        {/* Botón de cierre que también dispara la función 'onClose' */}
        <button type="button" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;