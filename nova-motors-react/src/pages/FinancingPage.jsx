import React, { useState } from 'react';
import Header from '@components/Header';
import { formatPrice } from '@utils/formatters'; // Importamos nuestro formateador
import '@styles/_layout.scss'; 
import '@styles/_pages.scss';

/**
 * Componente de página que muestra información de financiación
 * y una calculadora simple de cuotas.
 */
const FinancingPage = () => {
  // Estado para el valor del input del monto del vehículo
  const [monto, setMonto] = useState('');
  // Estado para el valor del select de los meses (plazo)
  const [meses, setMeses] = useState('12'); // Valor inicial de 12 meses
  
  // Estado para almacenar el mensaje de resultado del cálculo
  const [resultado, setResultado] = useState('');
  // Estado para almacenar el mensaje de error si la validación falla
  const [error, setError] = useState('');

  /**
   * Maneja el evento de clic del botón "Calcular".
   * Valida los inputs y calcula la cuota mensual.
   */
  const handleCalcular = () => {
    // Convierte los valores de string a numéricos
    const montoNum = parseFloat(monto);
    const mesesNum = parseInt(meses);
    let tasa = 0; // Tasa de interés inicial (0% para 12 meses)

    // Validación de entrada
    if (isNaN(montoNum) || montoNum <= 0) {
      setError("Error: El monto del vehículo debe ser un número positivo.");
      setResultado(''); // Limpiamos el resultado anterior si hay error
      return; // Detiene la ejecución de la función
    }

    // Lógica de negocio para asignar la tasa según el plazo
    if (mesesNum === 24) tasa = 0.05; // 5% para 24 meses
    if (mesesNum === 36) tasa = 0.07; // 7% para 36 meses
    
    // Cálculo de la cuota (interés simple total dividido por meses)
    const cuota = (montoNum * (1 + tasa)) / mesesNum;
    
    // Muestra el resultado formateado y limpia cualquier error previo
    setResultado(`Cuota mensual: ${formatPrice(cuota)}`);
    setError('');
  };

  return (
    <>
      <Header
        title="FINANCIACIÓN"
        subtitle="Planes flexibles para conducir tu sueño"
      />
      
      <div className="container">
        <main className="financing-content">
          {/* Sección 1: Información estática de los planes */}
          <section>
            <h2>Nuestros Planes de Financiación</h2>
            <p>
              Ofrecemos planes personalizados con tasas competitivas para que
              puedas adquirir tu vehículo de lujo sin complicaciones.
            </p>
            <ul>
              <li><strong>Plan 12 meses:</strong> 0% interés, cuotas fijas.</li>
              <li>
                <strong>Plan 24 meses:</strong> Tasa preferencial del 5% anual.
              </li>
              <li>
                <strong>Plan 36 meses:</strong> Flexibilidad con tasa del 7% anual.
              </li>
            </ul>
          </section>
          
          {/* Sección 2: Simulador interactivo */}
          <section>
            <h2>Simulador de Cuotas</h2>
            
            <label htmlFor="monto">Monto del vehículo (USD):</label> 
            <input 
              type="number" 
              id="monto" 
              placeholder="Ej: 100000" 
              min="0" 
              max="999999999"
              value={monto}
              // Actualiza el estado 'monto' en cada cambio
              onChange={(e) => setMonto(e.target.value)}
            />
            
            <label htmlFor="meses">Plazo (meses):</label>
            <select 
              id="meses" 
              value={meses}
              // Actualiza el estado 'meses' en cada cambio
              onChange={(e) => setMeses(e.target.value)}
            >
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
              <option value="36">36 meses</option>
            </select>
            
            {/* El botón dispara la función de cálculo */}
            <button type="button" onClick={handleCalcular}>Calcular</button>
            
            {/* Renderizado condicional del mensaje de error */}
            {error && <p id="resultado" data-error="true">{error}</p>}
            {/* Renderizado condicional del mensaje de resultado */}
            {resultado && <p id="resultado">{resultado}</p>}
            
          </section>
        </main>
      </div>
    </>
  );
};

export default FinancingPage;