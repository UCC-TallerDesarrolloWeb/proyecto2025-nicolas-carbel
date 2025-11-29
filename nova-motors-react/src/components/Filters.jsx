import React from 'react';
import '@styles/_pages.scss'; // Importa los estilos de la página

/**
 * Renderiza el panel lateral de filtros del catálogo.
 * Este es un "componente controlado", lo que significa que
 * no maneja su propio estado. Recibe los valores actuales
 * y la función para cambiarlos (onFilterChange) desde su componente padre (CatalogPage).
 *
 * @param {object} props - Las propiedades del componente.
 * @param {object} props.filters - Un objeto que contiene los valores actuales de todos los filtros.
 * @param {function} props.onFilterChange - La función manejadora (del padre) que se llama cada vez que un filtro cambia.
 */
const Filters = ({ filters, onFilterChange }) => {
  return (
    <aside className="filters" aria-label="Filtros de catálogo de autos">
      <h2>Filtros</h2>
      
      {/* Sección de Búsqueda por Texto */}
      <div className="filter-section">
        <h3>Búsqueda</h3>
        <label htmlFor="search">Buscar:</label>
        <input
          type="text"
          id="search"
          placeholder="Nombre o descripción"
          maxLength="50"
          value={filters.search} // El valor es controlado por el estado del padre
          onChange={onFilterChange} // Llama a la función del padre al cambiar
        />
      </div>

      {/* Sección de Filtros por Precio */}
      <div className="filter-section">
        <h3>Precios</h3>
        <label htmlFor="price-min">Mínimo:</label>
        <input
          type="number"
          id="price-min" // El ID coincide con la clave en el objeto 'filters' del padre
          placeholder="USD"
          min="0"
          value={filters.minPrice}
          onChange={onFilterChange}
        />
        <label htmlFor="price-max">Máximo:</label>
        <input
          type="number"
          id="price-max" // El ID coincide con la clave en el objeto 'filters' del padre
          placeholder="USD"
          min="0"
          value={filters.maxPrice}
          onChange={onFilterChange}
        />
      </div>

      {/* Sección de Filtros por Tipo (Checkboxes) */}
      <div className="filter-section">
        <h3>Tipos de autos</h3>
        <label htmlFor="deportivos">
          <input 
            type="checkbox" 
            id="deportivos"
            checked={filters.deportivos} // 'checked' es controlado por el estado del padre
            onChange={onFilterChange}
          />
          Deportivos
        </label>
        <label htmlFor="suv">
          <input 
            type="checkbox" 
            id="suv"
            checked={filters.suv}
            onChange={onFilterChange}
          />
           SUV
        </label>
         <label htmlFor="electricos">
          <input 
            type="checkbox" 
            id="electricos"
            checked={filters.electricos}
            onChange={onFilterChange}
          />
           Eléctricos
        </label>
        <label htmlFor="superdeportivos">
          <input 
            type="checkbox" 
            id="superdeportivos"
            checked={filters.superdeportivos}
            onChange={onFilterChange}
          />
           Superdeportivos
        </label>
         <label htmlFor="hiperdeportivos">
          <input 
            type="checkbox" 
            id="hiperdeportivos"
            checked={filters.hiperdeportivos}
            onChange={onFilterChange}
          />
           Hiperdeportivos
        </label>
      </div>

      {/* Sección de Ordenamiento (Select) */}
      <div className="filter-section">
        <label htmlFor="order"><h3>Ordenar por:</h3></label>
        <select 
          id="order" 
          value={filters.order} // El valor es controlado por el estado del padre
          onChange={onFilterChange}
        >
          <option value="">Seleccione un orden</option>
          <option value="menor">Precio: menor a mayor</option>
          <option value="mayor">Precio: mayor a menor</option>
          <option value="a-z">Nombre: A-Z</option>
          <option value="z-a">Nombre: Z-A</option>
        </select>
      </div>

      {/* Sección de Filtro por Marca (Select) */}
      <div className="filter-section">
        <label htmlFor="marca"><h3>Marca</h3></label>
        <select 
          id="marca" 
          value={filters.marca} // El valor es controlado por el estado del padre
          onChange={onFilterChange}
        >
          <option value="Todas">Todas</option>
          <option value="Porsche">Porsche</option>
          <option value="BMW">BMW</option>
          <option value="Lamborghini">Lamborghini</option>
          <option value="Ferrari">Ferrari</option>
          <option value="Tesla">Tesla</option>
          <option value="McLaren">McLaren</option>
          <option value="Audi">Audi</option>
          <option value="Chevrolet">Chevrolet</option>
          <option value="Aston Martin">Aston Martin</option>
          <option value="Mercedes-Benz">Mercedes-Benz</option>
          <option value="Nissan">Nissan</option>
          <option value="Bugatti">Bugatti</option>
          <option value="Koenigsegg">Koenigsegg</option>
          <option value="Ford">Ford</option>
          <option value="Jaguar">Jaguar</option>
          <option value="Rimac">Rimac</option>
          <option value="Dodge">Dodge</option>
          <option value="Alfa Romeo">Alfa Romeo</option>
          <option value="Lotus">Lotus</option>
          <option value="Pininfarina">Pininfarina</option>
          <option value="Maserati">Maserati</option>
          <option value="Toyota">Toyota</option>
          <option value="Lexus">Lexus</option>
        </select>
      </div>
    </aside>
  );
};

export default Filters;