// La URL de tu mock server (Paso 5)
const API_URL = 'http://localhost:3001/productos';

/**
 * REQUISITO: fetch y async/await
 * Obtiene todos los productos de la API.
 * (Función flecha)
 */
export const getProducts = async () => {
  try {
    const response = await fetch(API_URL);
    
    // Manejo de errores de HTTP (ej: 404, 500)
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;

  } catch (error) {
    // En una app real, mostraríamos un error al usuario.
    console.error("Error al obtener los productos:", error);
    return []; // Devuelve un array vacío para que la app no se rompa.
  }
};