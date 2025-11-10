import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '@components/Header';
import '@styles/_layout.scss'; 
import '@styles/_pages.scss'; 

/** Expresión regular para validar el formato de email. */
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Componente de página que renderiza el formulario de contacto
 * y maneja la validación y el envío de datos.
 */
const ContactPage = () => {
  // Hook de React Router para controlar la navegación (ej. redirigir)
  const navigate = useNavigate();
  
  // Estado para almacenar los valores de todos los campos del formulario
  const [formData, setFormData] = useState({
    nombre: '', email: '', telefono: '', mensaje: '',
  });
  
  // Estado para almacenar los mensajes de error de validación por campo
  const [errors, setErrors] = useState({});
  
  // Estado para mostrar un mensaje de éxito temporal tras el envío
  const [successMessage, setSuccessMessage] = useState('');

  /**
   * Maneja los cambios en cualquier campo (input/textarea).
   * Actualiza el estado 'formData' y dispara la validación en tiempo real.
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - El evento de cambio.
   */
  const handleChange = (e) => {
    const { id, value } = e.target; 
    
    // Actualiza el valor del campo correspondiente en el estado
    setFormData(prevData => ({ ...prevData, [id]: value }));
    // Valida el campo inmediatamente después del cambio
    validateField(id, value);
  };

  /**
   * Valida un campo individual según reglas predefinidas
   * y actualiza el estado 'errors'.
   * @param {string} id - El 'id' del campo (ej. 'nombre', 'email').
   * @param {string} value - El valor actual del campo.
   */
  const validateField = (id, value) => {
    let newErrors = { ...errors };

    // Valida el campo específico
    switch (id) {
      case 'nombre':
        if (!value) newErrors.nombre = 'El nombre es requerido.';
        else if (/\d/.test(value)) newErrors.nombre = 'El nombre no puede contener números.';
        else delete newErrors.nombre; // Limpia el error si es válido
        break;
      case 'email':
        if (!value) newErrors.email = 'El email es requerido.';
        else if (!emailRegex.test(value)) newErrors.email = 'El formato del email no es válido.';
        else delete newErrors.email;
        break;
      case 'mensaje':
        if (!value) newErrors.mensaje = 'El mensaje es requerido.';
        else delete newErrors.mensaje;
        break;
      default: break;
    }
    // Actualiza el estado de errores
    setErrors(newErrors);
  };

  /**
   * Maneja el envío (submit) del formulario.
   * Previene la recarga, ejecuta una validación final de todos los campos,
   * y si es válido, simula el envío y redirige al inicio.
   * @param {React.FormEvent<HTMLFormElement>} e - El evento de envío.
   */
  const handleSubmit = (e) => {
    // Evita que la página se recargue (comportamiento HTML por defecto)
    e.preventDefault(); 
    
    // Ejecuta una validación final de todos los campos requeridos
    validateField('nombre', formData.nombre);
    validateField('email', formData.email);
    validateField('mensaje', formData.mensaje);

    // Copia los errores actuales para una verificación final
    const currentErrors = { ...errors };
    if (!formData.nombre) currentErrors.nombre = 'El nombre es requerido.';
    if (!formData.email) currentErrors.email = 'El email es requerido.';
    if (!formData.mensaje) currentErrors.mensaje = 'El mensaje es requerido.';

    // Limpia errores si los campos se corrigieron pero 'validateField' no se ejecutó
    if (formData.nombre && !/\d/.test(formData.nombre)) delete currentErrors.nombre;
    if (formData.email && emailRegex.test(formData.email)) delete currentErrors.email;
    if (formData.mensaje) delete currentErrors.mensaje;

    // Actualiza el estado de errores con la validación final
    setErrors(currentErrors);

    // Comprueba si el objeto de errores está vacío (formulario válido)
    if (Object.keys(currentErrors).length === 0) {
      console.log("Formulario enviado:", formData);
      
      // Muestra mensaje de éxito y resetea el formulario
      setSuccessMessage('¡Mensaje enviado con éxito! Te redirigiremos al inicio.');
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
      
      // Espera 2 segundos antes de redirigir al usuario a la página de inicio
      setTimeout(() => { navigate('/'); }, 2000);
    } else {
      console.log("El formulario contiene errores.");
    }
  };

  return (
    <>
      <Header
        title="CONTACTO"
        subtitle="Estamos aquí para ayudarte a encontrar tu vehículo ideal"
      />
      <div className="container">
        <main className="contact-content">
          <section>
            <h2>Contáctanos</h2>
            {/* El 'onSubmit' se vincula a nuestro manejador 'handleSubmit' */}
            <form id="contact-form" onSubmit={handleSubmit}>
              
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text" id="nombre" placeholder="Tu nombre"
                maxLength="50" required
                value={formData.nombre}
                onChange={handleChange}
                // Atributos de accesibilidad para errores
                aria-invalid={!!errors.nombre}
                aria-describedby="nombre-error"
              />
              {/* Muestra el mensaje de error si existe para este campo */}
              {errors.nombre && <p id="nombre-error" data-error="true">{errors.nombre}</p>}

              <label htmlFor="email">Email:</label>
              <input
                type="email" id="email" placeholder="tu@email.com"
                maxLength="50" required
                value={formData.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
              />
              {errors.email && <p id="email-error" data-error="true">{errors.email}</p>}

              {/* Campo de teléfono (opcional, sin validación estricta) */}
              <label htmlFor="telefono">Teléfono:</label>
              <input
                type="tel" id="telefono" placeholder="+54 123 456 789"
                maxLength="15"
                value={formData.telefono}
                onChange={handleChange}
              />

              <label htmlFor="mensaje">Mensaje:</label>
              <textarea
                id="mensaje" placeholder="Tu mensaje"
                maxLength="500" required
                value={formData.mensaje}
                onChange={handleChange}
                aria-invalid={!!errors.mensaje}
                aria-describedby="mensaje-error"
              ></textarea>
              {errors.mensaje && <p id="mensaje-error" data-error="true">{errors.mensaje}</p>}

              <button type="submit">Enviar</button>
            </form>
            
            {/* Muestra el mensaje de éxito si existe */}
            {successMessage && <p id="form-resultado">{successMessage}</p>}
          </section>
        </main>
      </div>
    </>
  );
};

export default ContactPage;