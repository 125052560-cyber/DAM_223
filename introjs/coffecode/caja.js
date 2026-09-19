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
}

function mostrarMenu() {
  console.log("Menú de Café:");

  console.log(menu);

  agregarPedido(menu[0].producto, menu[0].precio);
  agregarPedido(menu[3].producto, menu[3].precio);

  console.log("Listado de productos registrados:");
  console.log(listadepedidos);

  console.log(`Total acumulado: $${totalacumulado.toFixed(2)}`);
  console.log("¡Gracias por su compra!");
}

mostrarMenu();
