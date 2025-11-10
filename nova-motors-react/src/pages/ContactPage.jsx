import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '@components/Header';
import '@styles/_layout.scss'; 
import '@styles/_pages.scss'; 

// 1. Definimos el emailRegex aquí arriba para que AMBAS funciones lo vean
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '', email: '', telefono: '', mensaje: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    // 2. Error de 'E' corregido
    const { id, value } = e.target; 
    
    setFormData(prevData => ({ ...prevData, [id]: value }));
    validateField(id, value);
  };

  const validateField = (id, value) => {
    let newErrors = { ...errors };

    switch (id) {
      case 'nombre':
        if (!value) newErrors.nombre = 'El nombre es requerido.';
        else if (/\d/.test(value)) newErrors.nombre = 'El nombre no puede contener números.';
        else delete newErrors.nombre;
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
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    // Validar todos los campos antes de enviar
    validateField('nombre', formData.nombre);
    validateField('email', formData.email);
    validateField('mensaje', formData.mensaje);

    // Re-chequear errores
    // (Usamos '...errors' para mantener los errores existentes)
    const currentErrors = { ...errors };
    if (!formData.nombre) currentErrors.nombre = 'El nombre es requerido.';
    if (!formData.email) currentErrors.email = 'El email es requerido.';
    if (!formData.mensaje) currentErrors.mensaje = 'El mensaje es requerido.';

    // 3. Error de 'emailRegex' corregido (ahora es visible aquí)
    if (formData.nombre && !/\d/.test(formData.nombre)) delete currentErrors.nombre;
    if (formData.email && emailRegex.test(formData.email)) delete currentErrors.email;
    if (formData.mensaje) delete currentErrors.mensaje;

    setErrors(currentErrors); // Actualiza con los errores finales

    if (Object.keys(currentErrors).length === 0) {
      console.log("Formulario enviado:", formData);
      setSuccessMessage('¡Mensaje enviado con éxito! Te redirigiremos al inicio.');
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
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
            <form id="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text" id="nombre" placeholder="Tu nombre"
                maxLength="50" required
                value={formData.nombre}
                onChange={handleChange}
                aria-invalid={!!errors.nombre}
                aria-describedby="nombre-error"
              />
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
            {successMessage && <p id="form-resultado">{successMessage}</p>}
          </section>
        </main>
      </div>
    </>
  );
};

export default ContactPage;