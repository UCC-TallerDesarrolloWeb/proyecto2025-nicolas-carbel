// ========================
// Lista de productos
// ========================
// Cada objeto representa un auto de lujo con su nombre, descripción, categoría, marca, precio e imagen.

const productos = [
  {
    nombre: "Porsche 911 Turbo",
    description: "Deportivo de lujo con motor biturbo 3.8L, 650 CV.",
    categoria: "Deportivos",
    marca: "Porsche",
    precio: 250000,
    imagen: "porsche911tsh.jpg",
  },
  {
    nombre: "BMW X5",
    description: "SUV premium con alto confort y tecnología avanzada.",
    categoria: "SUV",
    marca: "BMW",
    precio: 120000,
    imagen: "bmw-x5.jpg",
  },
  {
    nombre: "Lamborghini Aventador",
    description: "Superdeportivo con motor V12 y diseño icónico.",
    categoria: "Deportivos",
    marca: "Lamborghini",
    precio: 350000,
    imagen: "lamborghini-aventador.jpg",
  },
  {
    nombre: "BMW i8",
    description: "Híbrido enchufable con diseño futurista y eficiencia.",
    categoria: "Eléctricos",
    marca: "BMW",
    precio: 180000,
    imagen: "bmw-i8.jpg",
  },
  {
    nombre: "Ferrari 488 Pista",
    description: "Potente V8 con diseño aerodinámico y rendimiento de pista.",
    categoria: "Superdeportivos",
    marca: "Ferrari",
    precio: 350000,
    imagen: "ferrari-488-pista.jpg",
  },
  {
    nombre: "Lamborghini Huracán Evo",
    description: "Motor V10 con diseño agresivo y tecnología avanzada.",
    categoria: "Superdeportivos",
    marca: "Lamborghini",
    precio: 280000,
    imagen: "lamborghini-huracan-evo.jpg",
  },
  {
    nombre: "Tesla Model S Plaid",
    description: "Eléctrico de alta potencia con aceleración récord.",
    categoria: "Eléctricos",
    marca: "Tesla",
    precio: 140000,
    imagen: "tesla-model-s-plaid.jpg",
  },
  {
    nombre: "McLaren 720S",
    description: "Superdeportivo ligero con motor V8 y diseño futurista.",
    categoria: "Superdeportivos",
    marca: "McLaren",
    precio: 310000,
    imagen: "mclaren-720s.jpg",
  },
  {
    nombre: "Audi R8 V10",
    description: "Motor V10 atmosférico con un diseño elegante y dinámico.",
    categoria: "Deportivos",
    marca: "Audi",
    precio: 200000,
    imagen: "audi-r8-v10.jpg",
  },
  {
    nombre: "Chevrolet Corvette Z06",
    description: "Motor V8 con rendimiento excepcional y diseño americano.",
    categoria: "Deportivos",
    marca: "Chevrolet",
    precio: 120000,
    imagen: "corvette-z06.jpg",
  },
  {
    nombre: "Aston Martin DB11 AMR",
    description: "Elegancia británica con motor V12 y dinámica refinada.",
    categoria: "Deportivos",
    marca: "Aston Martin",
    precio: 250000,
    imagen: "aston-martin-db11-amr.jpg",
  },
  {
    nombre: "Mercedes-AMG GT R",
    description: "Motor V8 biturbo con enfoque en rendimiento y agilidad.",
    categoria: "Deportivos",
    marca: "Mercedes-Benz",
    precio: 190000,
    imagen: "mercedes-amg-gt-r.jpg",
  },
  {
    nombre: "Nissan GT-R Nismo",
    description: "Leyenda japonesa con motor V6 y tracción integral.",
    categoria: "Deportivos",
    marca: "Nissan",
    precio: 210000,
    imagen: "nissan-gt-r-nismo.jpg",
  },
  {
    nombre: "Porsche Taycan Turbo S",
    description: "Eléctrico de alto rendimiento con aceleración instantánea.",
    categoria: "Eléctricos",
    marca: "Porsche",
    precio: 190000,
    imagen: "porsche-taycan-turbo-s.jpg",
  },
  {
    nombre: "Ferrari SF90 Stradale",
    description: "Híbrido con motor V8 y tecnología de punta.",
    categoria: "Superdeportivos",
    marca: "Ferrari",
    precio: 500000,
    imagen: "ferrari-sf90-stradale.jpg",
  },
  {
    nombre: "Lamborghini Aventador SVJ",
    description: "Motor V12 con diseño extremo y aerodinámica activa.",
    categoria: "Superdeportivos",
    marca: "Lamborghini",
    precio: 520000,
    imagen: "lamborghini-aventador-svj.jpg",
  },
  {
    nombre: "Bugatti Chiron",
    description: "Hiperdeportivo con motor W16 y velocidad récord.",
    categoria: "Hiperdeportivos",
    marca: "Bugatti",
    precio: 3000000,
    imagen: "bugatti-chiron.jpg",
  },
  {
    nombre: "Koenigsegg Jesko",
    description: "Hiperdeportivo con motor V8 y diseño aerodinámico extremo.",
    categoria: "Hiperdeportivos",
    marca: "Koenigsegg",
    precio: 2800000,
    imagen: "koenigsegg-jesko.jpg",
  },
  {
    nombre: "McLaren Senna",
    description: "Superdeportivo optimizado para pista con motor V8.",
    categoria: "Superdeportivos",
    marca: "McLaren",
    precio: 1000000,
    imagen: "mclaren-senna.jpg",
  },
  {
    nombre: "Ford Mustang Shelby GT500",
    description: "Muscle car con motor V8 sobrealimentado y diseño agresivo.",
    categoria: "Deportivos",
    marca: "Ford",
    precio: 80000,
    imagen: "ford-mustang-shelby-gt500.jpg",
  },
  {
    nombre: "Jaguar F-Type SVR",
    description: "Motor V8 con diseño elegante y rendimiento dinámico.",
    categoria: "Deportivos",
    marca: "Jaguar",
    precio: 130000,
    imagen: "jaguar-f-type-svr.jpg",
  },
  {
    nombre: "Rimac C_Two",
    description:
      "Hiperdeportivo eléctrico con potencia extrema y tecnología avanzada.",
    categoria: "Eléctricos",
    marca: "Rimac",
    precio: 2000000,
    imagen: "rimac-c-two.jpg",
  },
  {
    nombre: "Dodge Viper ACR",
    description: "Motor V10 con enfoque en rendimiento en pista.",
    categoria: "Deportivos",
    marca: "Dodge",
    precio: 150000,
    imagen: "dodge-viper-acr.jpg",
  },
  {
    nombre: "BMW M4 Competition",
    description:
      "Motor seis cilindros con diseño deportivo y tecnología moderna.",
    categoria: "Deportivos",
    marca: "BMW",
    precio: 90000,
    imagen: "bmw-m4-competition.jpg",
  },
  {
    nombre: "Alfa Romeo Giulia Quadrifoglio",
    description: "Sedán deportivo con motor V6 y diseño italiano.",
    categoria: "Deportivos",
    marca: "Alfa Romeo",
    precio: 85000,
    imagen: "alfa-romeo-giulia-quadrifoglio.jpg",
  },
  {
    nombre: "Lotus Evora GT",
    description: "Deportivo ligero con motor V6 y manejo excepcional.",
    categoria: "Deportivos",
    marca: "Lotus",
    precio: 100000,
    imagen: "lotus-evora-gt.jpg",
  },
  {
    nombre: "Pininfarina Battista",
    description:
      "Hiperdeportivo eléctrico con potencia récord y diseño italiano.",
    categoria: "Eléctricos",
    marca: "Pininfarina",
    precio: 2500000,
    imagen: "pininfarina-battista.jpg",
  },
  {
    nombre: "Maserati MC20",
    description: "Motor V6 con diseño elegante y rendimiento dinámico.",
    categoria: "Superdeportivos",
    marca: "Maserati",
    precio: 220000,
    imagen: "maserati-mc20.jpg",
  },
  {
    nombre: "Toyota GR Supra",
    description: "Deportivo japonés con motor seis cilindros y diseño moderno.",
    categoria: "Deportivos",
    marca: "Toyota",
    precio: 60000,
    imagen: "toyota-gr-supra.jpg",
  },
  {
    nombre: "Lexus LC 500",
    description: "Motor V8 con diseño futurista y confort de lujo.",
    categoria: "Deportivos",
    marca: "Lexus",
    precio: 110000,
    imagen: "lexus-lc-500.jpg",
  },
];
// ========================
// Función para mostrar detalle de un producto
// ========================
/*
 * Muestra el detalle de un producto en un modal o contenedor.
 * @method mostrarDetalle
 * @param {number} id - Índice del producto dentro del arreglo `productos`.
 * @return {void} No retorna ningún valor.
 */
let mostrarDetalle = (id) => {
  document.getElementById("detalle").style.display = "block"; // Muestra el modal o contenedor de detalles
  document.getElementById("titulo-prod").innerText = productos[id].nombre; // Asigna nombre del producto
  document.getElementById("descr-prod").innerText = productos[id].description; // Asigna descripción
  document.getElementById("precio-prod").innerText = formatPrice(
    productos[id].precio
  ); // Asigna precio formateado
};
// ========================
// Función para cerrar el modal de detalle
// ========================
/*
 * Cierra el modal de detalle del producto.
 * @method cerrarModal
 * @return {void} No retorna ningún valor.
 */
let cerrarModal = () => {
  document.getElementById("detalle").style.display = "none"; // Oculta el modal
};
// ========================
// Función para mostrar todos los productos en el catálogo
// ========================
/*
 * Muestra en pantalla el catálogo de productos.
 * @method mostrarCatalogo
 * @param {Array<Object>} prod - Lista de productos a mostrar. Si no se pasa, muestra todos.
 * @return {void} No retorna ningún valor.
 */
let mostrarCatalogo = (prod) => {
  if (!prod) {
    prod = productos;
  }

  let contenido = "";
// Crea dinámicamente el HTML de cada producto
  prod.forEach((prod, id) => {
    contenido += `<div>
            <img src="imagenes/${prod.imagen}" alt="${prod.nombre}" />
            <h3>${prod.nombre}</h3>
            <p>${formatPrice(prod.precio)}</p>
            <button type="button" onclick="mostrarDetalle(${id})">Ver Detalle</button>
            <br>
            <button type="button" onclick="agregarAlcarrito(${id})">Agregar al carrito</button>
        </div>`;
  });
// Inserta todo en el contenedor del catálogo
  document.getElementById("catalog").innerHTML = contenido;
};
// ========================
// Agregar producto al carrito (localStorage)
// ========================
/*
 * Agrega un producto al carrito de compras (almacenado en localStorage).
 * @method agregarAlcarrito
 * @param {number} id - Índice del producto en el arreglo `productos`.
 * @return {void} No retorna ningún valor.
 */
let agregarAlcarrito = (id) => {
  const listaInicial = JSON.parse(localStorage.getItem("carrito")) || []; // Recupera el carrito existente
  listaInicial.push(id); // Agrega el id del producto
  localStorage.setItem("carrito", JSON.stringify(listaInicial)); // Guarda el carrito actualizado
  contarProductos(); // Actualiza contador en pantalla
};
// ========================
// Mostrar el carrito con productos seleccionados
// ========================
/*
 * Muestra los productos actualmente en el carrito.
 * @method mostrarCarrito
 * @return {void} No retorna ningún valor.
 */
let mostrarCarrito = () => {
  let contenido = "";
  let total = 0;

  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];// Carga carrito

  if (carrito.length > 0) {
    const listProd = []; // Lista de productos únicos
    const listCant = []; // Cantidades de cada producto
// Recorre el carrito y cuenta repeticiones
    carrito.forEach((num) => {
      if (!listProd.includes(num)) {
        listProd.push(num);
        listCant.push(1);
      } else {
        const inx = listProd.indexOf(num);
        listCant[inx] += 1;
      }
    });
 // Genera contenido HTML del carrito
    listProd.forEach((num, id) => {
      const element = productos[num];
      contenido += `<div>
                <h3>${element.nombre}</h3>
                <p>${formatPrice(element.precio)}</p>
                <p>Cantidad: ${listCant[id]}</p>
                <button type="button" onclick="eliminarProducto(${id})">Eliminar producto</button>
            </div>`;
      total += element.precio * listCant[id]; // Calcula total acumulado
    });
  }
  contenido += `<p>Total: ${formatPrice(total)}</p>`;
  if (carrito.length > 0) {
    contenido += `<button type="button" onclick="vaciarCarrito()">Vaciar carrito</button>`;
  }
  document.getElementById("carrito-content").innerHTML = contenido; // Muestra todo
};
// ========================
// Vaciar el carrito completamente
// ========================
/*
 * Vacía completamente el carrito de compras.
 * @method vaciarCarrito
 * @return {void} No retorna ningún valor.
 */
let vaciarCarrito = () => {
  localStorage.removeItem("carrito"); // Elimina el carrito
  contarProductos(); // Reinicia contador
  window.location.reload(); // Recarga la página
};
// ========================
// Eliminar solo un producto del carrito
// ========================
/*
 * Elimina una sola unidad de un producto del carrito.
 * @method eliminarProducto
 * @param {number} indexEnLista - Índice del producto dentro de la lista del carrito mostrado.
 * @return {void} No retorna ningún valor.
 */
let eliminarProducto = (indexEnLista) => {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  if (carrito.length === 0) return;

  // Reconstruye la lista de productos únicos
  const listProd = [];
  carrito.forEach((num) => {
    if (!listProd.includes(num)) listProd.push(num);
  });

  const prodId = listProd[indexEnLista];
  if (prodId === undefined) return;

  // Elimina una sola ocurrencia del producto
  const index = carrito.indexOf(prodId);
  if (index !== -1) {
    carrito.splice(index, 1);
  }

  if (carrito.length > 0) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  } else {
    localStorage.removeItem("carrito");
  }

  contarProductos();
  mostrarCarrito(); // refresca la vista
};
// ========================
// Filtro de productos por nombre, precio, categoría y marca
// ========================
/*
 * Filtra productos por nombre, precio, categoría o marca.
 * @method filtrarProducto
 * @return {void} No retorna ningún valor.
 */
let filtrarProducto = () => {
  let searchWord = document.getElementById("search").value.toLowerCase();
  let min = document.getElementById("price-min").value || 0;
  let max = document.getElementById("price-max").value || Infinity;
  let dep = document.getElementById("deportivos").checked;
  let suv = document.getElementById("suv").checked;
  let elec = document.getElementById("electricos").checked;
  let supdep = document.getElementById("superdeportivos").checked;
  let hipdep = document.getElementById("hiperdeportivos").checked;
  let marca = document.getElementById("marca").value;

  let newLista = productos;
// Filtro por palabra clave
  if (searchWord) {
    newLista = newLista.filter(
      (prod) =>
        prod.nombre.toLowerCase().includes(searchWord) ||
        prod.description.toLowerCase().includes(searchWord)
    );
  }
// Filtro por rango de precios
  newLista = newLista.filter(
    (prod) => prod.precio >= min && prod.precio <= max
  );
// Filtro por categoría seleccionada
  let category = [];
  if (dep) category.push("Deportivos");
  if (suv) category.push("SUV");
  if (elec) category.push("Eléctricos");
  if (supdep) category.push("Superdeportivos");
  if (hipdep) category.push("Hiperdeportivos");

  if (category.length > 0) {
    newLista = newLista.filter((prod) => category.includes(prod.categoria));
  }
// Filtro por marca
  if (marca !== "Todas") {
    newLista = newLista.filter((prod) => prod.marca === marca);
  }
// Muestra la lista filtrada
  mostrarCatalogo(newLista);
};
// ========================
// Formatear precio a moneda local (USD en formato argentino)
// ========================
/*
 * Formatea un número como precio en formato USD (localizado en español de Argentina).
 * @method formatPrice
 * @param {number} price - Valor numérico del precio.
 * @return {string} Precio formateado como moneda.
 */
let formatPrice = (price) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "USD",
  }).format(price);
};
// ========================
// Contar cantidad de productos en carrito
// ========================
/*
 * Muestra la cantidad total de productos en el carrito.
 * @method contarProductos
 * @return {void} No retorna ningún valor.
 */
let contarProductos = () => {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  document.getElementById("cant-prod").innerText = carrito.length; // Muestra cantidad
};
// ========================
// Ordenar catálogo según opción seleccionada
// ========================
/*
 * Ordena el catálogo según la opción seleccionada (precio o nombre).
 * @method orderCatalog
 * @return {void} No retorna ningún valor.
 */
let orderCatalog = () => {
  const opt = document.getElementById("order").value;
  let newProductos = [...productos]; // Copia del array original

  switch (opt) {
    case "menor":
      newProductos.sort((a, b) => a.precio - b.precio);
      break;
    case "mayor":
      newProductos.sort((a, b) => b.precio - a.precio);
      break;
    case "a-z":
      newProductos.sort((a, b) => a.nombre.localeCompare(b.nombre));
      break;
    case "z-a":
      newProductos.sort((a, b) => b.nombre.localeCompare(a.nombre));
      break;
    default:
      newProductos.sort((a, b) => a.precio - b.precio);
  }
  mostrarCatalogo(newProductos);
};
// ========================
// Validar formulario de contacto
// ========================
/*
 * Valida los campos del formulario de contacto.
 * @method validarFormulario
 * @return {void} No retorna ningún valor.
 */
let validarFormulario = () => {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar emails
  // Validación de campos vacíos
  if (!nombre || !email || !mensaje) {
    document.getElementById("form-resultado").innerText =
      "Por favor, completa todos los campos requeridos.";
    return;
  }
  // Validación de formato de email
  if (!emailRegex.test(email)) {
    document.getElementById("form-resultado").innerText =
      "Por favor, ingresa un email válido.";
    return;
  }
  // Si todo está correcto, muestra mensaje de éxito
  document.getElementById("form-resultado2").innerText =
    "Mensaje enviado con éxito.";
  document.getElementById("form-resultado").innerText = "";
  document.getElementById("contact-form").reset();
}
// ========================
// Calcular cuota mensual de financiación
// ========================
/*
 * Calcula la cuota mensual de financiación según monto y plazo.
 * @method calcularCuota
 * @return {void} No retorna ningún valor.
 */
let calcularCuota = () => {
  const monto = parseFloat(document.getElementById("monto").value) || 0;
  const meses = parseInt(document.getElementById("meses").value) || 12;
  let tasa = 0;
  // tasas según plazo
  const resultadoP = document.getElementById("resultado");

  //Limpiamos el atributo de error y el texto anterior
    resultadoP.removeAttribute('data-error'); // <-- Quitamos el atributo de error
    resultadoP.innerText = "";

    //VALIDACIÓN PARA MONTO NEGATIVO/CERO
    if (isNaN(monto) || monto <= 0) {
        resultadoP.innerText = "Error: El monto del vehículo debe ser un número positivo.";
        resultadoP.setAttribute('data-error', 'true'); // <-- Establecemos el atributo de error
        return; // Detiene la ejecución
    }

  if (meses === 24) tasa = 0.05;
  if (meses === 36) tasa = 0.07;
  const cuota = (monto * (1 + tasa)) / meses;
  document.getElementById(
    "resultado"
  ).innerText = `Cuota mensual: ${formatPrice(cuota)}`; // Muestra resultado
}
