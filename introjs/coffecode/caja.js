const menu = [
  { producto: "Café Americano", precio: 2.50 },
  { producto: "Café con Leche", precio: 3.00 },
  { producto: "Café Espresso", precio: 2.00 },
  { producto: "Café Capuchino", precio: 3.50 },
  { producto: "Café Mocha", precio: 4.00 }
];

let pedidos = [];

function destructuring(indice) {
  const { producto, precio } = menu[indice];

  pedidos.push({ producto, precio });

  console.log(`Elegiste: ${producto}`);
  console.log(`Precio: $${precio.toFixed(2)}`);
}

function mostrarMenu() {
  console.log("Menú de Café:");

  menu.forEach(({ producto, precio }, i) => {
    console.log(`${i + 1}. ${producto} - $${precio.toFixed(2)}`);
  });
}

function caja() {
  let subtotal = 0;

  pedidos.forEach(({ precio }) => {
    subtotal += precio;
  });

  const iva = subtotal * 0.16;
  const total = subtotal + iva;

  console.log("\nTicket de compra:");

  pedidos.forEach(({ producto, precio }) => {
    console.log(`- ${producto}: $${precio.toFixed(2)}`);
  });

  console.log(`\nSubtotal: $${subtotal.toFixed(2)}`);
  console.log(`IVA (16%): $${iva.toFixed(2)}`);
  console.log(`Total a pagar: $${total.toFixed(2)}`);
  console.log("Gracias por su compra");
}

mostrarMenu();

let opcion = parseInt(prompt("Ingrese el número del café que desea:")) - 1;

if (opcion >= 0 && opcion < menu.length) {
  destructuring(opcion);
  caja();
} else {
  console.log("Opción inválida");
}
