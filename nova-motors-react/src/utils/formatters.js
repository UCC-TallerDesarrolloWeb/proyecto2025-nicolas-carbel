/**
 * Formatea un número como un string de moneda en USD,
 * utilizando la localización argentina (es-AR) para el formato.
 * * @param {number} price - El número (precio) a formatear.
 * @returns {string} El precio formateado como string (ej. "USD 100.000,00").
 */
export const formatPrice = (price) => {
  // Crea un objeto de formato de número internacional
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "USD",
  }).format(price); // Formatea el precio
};