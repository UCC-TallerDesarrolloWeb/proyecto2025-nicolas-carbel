import React from 'react';
import '@styles/_components.scss'; 

const Modal = ({ show, onClose, title, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose} style={{ display: 'block' }}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        {children}
        <button type="button" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;