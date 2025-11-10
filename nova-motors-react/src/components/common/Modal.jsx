import React from 'react';
import '@styles/_components.scss'; // Importamos los estilos del Modal

/**
 * REQUISITO: Componente Genérico (Modal)
 * (Función flecha)
 *
 * @param {boolean} show - Si el modal debe mostrarse o no
 * @param {function} onClose - La función que debe ejecutarse al hacer clic en "Cerrar"
 * @param {string} title - El título a mostrar en el modal
 * @param {React.ReactNode} children - El contenido (ej: <p>...</p>) a mostrar
 */
const Modal = ({ show, onClose, title, children }) => {
  // Si 'show' es falso, no renderizamos nada
  if (!show) {
    return null;
  }

  // Usamos e.stopPropagation() para evitar que el clic en el contenido
  // cierre el modal.
  return (
    // El fondo oscuro (hace clic aquí para cerrar)
    <div className="modal" onClick={onClose} style={{ display: 'block' }}>
      {/* El 'display: block' es necesario porque tu CSS original lo usa para ocultar */}
      
      {/* El contenido del modal */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        
        {/* Aquí se renderiza el contenido (ej: la descripción) */}
        {children}
        
        <button type="button" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;