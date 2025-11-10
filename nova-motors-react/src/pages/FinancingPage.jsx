import React, { useState } from 'react';
import Header from '@components/Header';
import { formatPrice } from '@utils/formatters'; // Importamos nuestro formateador
import '@styles/_layout.scss'; 
import '@styles/_pages.scss';

// (Función flecha)
const FinancingPage = () => {
  // 1. Estado para los inputs
  const [monto, setMonto] = useState('');
  const [meses, setMeses] = useState('12'); // Valor inicial de 12 meses
  
  // 2. Estado para el resultado y el error
  const [resultado, setResultado] = useState('');
  const [error, setError] = useState('');

  // 3. Manejador del cálculo (migrado de tu JS)
  const handleCalcular = () => {
    const montoNum = parseFloat(monto);
    const mesesNum = parseInt(meses);
    let tasa = 0;

    // VALIDACIÓN (migrada de tu JS)
    if (isNaN(montoNum) || montoNum <= 0) {
      setError("Error: El monto del vehículo debe ser un número positivo.");
      setResultado(''); // Limpiamos el resultado anterior
      return;
    }

    // Lógica de cálculo
    if (mesesNum === 24) tasa = 0.05;
    if (mesesNum === 36) tasa = 0.07;
    
    const cuota = (montoNum * (1 + tasa)) / mesesNum;
    
    // Mostramos resultado y limpiamos error
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
          
          <section>
            <h2>Simulador de Cuotas</h2>
            
            {/* REQUISITO: Labels para todos los inputs */}
            <label htmlFor="monto">Monto del vehículo (USD):</label> 
            <input 
              type="number" 
              id="monto" 
              placeholder="Ej: 100000" 
              min="0" 
              max="999999999"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
            />
            
            <label htmlFor="meses">Plazo (meses):</label>
            <select 
              id="meses" 
              value={meses}
              onChange={(e) => setMeses(e.target.value)}
            >
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
              <option value="36">36 meses</option>
            </select>
            
            <button type="button" onClick={handleCalcular}>Calcular</button>
            
            {/* Mostramos el resultado o el error */}
            {error && <p id="resultado" data-error="true">{error}</p>}
            {resultado && <p id="resultado">{resultado}</p>}
            
          </section>
        </main>
      </div>
    </>
  );
};

export default FinancingPage;