// Define la URL base del endpoint de la API de productos
const API_URL = 'http://localhost:3001/productos';

/**
 * Obtiene la lista completa de productos desde el servidor.
 * Utiliza fetch y async/await para manejar la solicitud.
 * @returns {Promise<Array>} Una promesa que resuelve a un array de productos.
 * Retorna un array vacío si la solicitud falla.
 */
export const getProducts = async () => {
  try {
    // Realiza la solicitud GET a la API
    const response = await fetch(API_URL);
    
    // Verifica si la respuesta de la red fue exitosa (ej: status 200)
    if (!response.ok) {
      // Lanza un error si la respuesta no es OK (ej: 404, 500)
      throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
    }
    
    // Parsea la respuesta JSON
    const data = await response.json();
    return data;

  } catch (error) {
    // Captura cualquier error (de red o de parsing)
    console.error("Error al obtener los productos:", error);
    // Retorna un array vacío para evitar que la aplicación se rompa
    return []; 
  }
};