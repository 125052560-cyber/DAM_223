const menu = [
  { producto: "Café Americano", precio: 2.50 },
  { producto: "Café con Leche", precio: 3.00 },
  { producto: "Café Espresso", precio: 2.00 },
  { producto: "Café Capuchino", precio: 3.50 },
  { producto: "Café Mocha", precio: 4.00 }
];

let listadepedidos = [];
let totalacumulado = 0;

function agregarPedido(producto, precio) {
  listadepedidos.push({ producto, precio });
  totalacumulado += precio;
  console.log(`Agregado: ${producto} - $${precio.toFixed(2)}`);
}

function mostrarMenu() {
  console.log("Menú de Café:");
  console.log("Listado de productos registrados:");
  console.log(listadepedidos);
  console.log(`Total acumulado: $${totalacumulado.toFixed(2)}`);
  console.log("¡Gracias por su compra!");
}

mostrarMenu();