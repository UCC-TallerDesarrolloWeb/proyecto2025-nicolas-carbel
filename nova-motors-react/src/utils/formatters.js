/**
 * Formatea un número como precio en USD (localizado en es-AR).
 * (Función flecha)
 */
export const formatPrice = (price) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "USD",
  }).format(price);
};