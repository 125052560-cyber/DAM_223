const menu = [
  { producto: "Café Americano", precio: 2.50 },
  { producto: "Café con Leche", precio: 3.00 },
  { producto: "Café Espresso", precio: 2.00 },
  { producto: "Café Capuchino", precio: 3.50 },
  { producto: "Café Mocha", precio: 4.00 }
];

let pedidos = [];

function destructuring(indice, callback) {
  const { producto, precio } = menu[indice];

  pedidos.push({ producto, precio, cantidad });

  alert(`Elegiste: ${producto}\nPrecio: $${precio.toFixed(2)}`);

  callback();
}

function mostrarMenu(callback) {
  const opciones = menu
    .map(({ producto, precio }, i) => `${i + 1}. ${producto} - $${precio.toFixed(2)}`)
    .join("\n");

  alert(`Menú de Café:\n${opciones}`);

  callback();
}

function caja() {
  const subtotal = pedidos.reduce((total, { precio, cantidad }) => total + (precio * cantidad), 0);

  const iva = subtotal * 0.16;
  const total = subtotal + iva;

  const productos = pedidos
    .map(({ producto, precio, cantidad }) => `- ${producto}: $${precio.toFixed(2)} (Cantidad: ${cantidad})`)
    .join("\n");

  alert(`Ticket de compra:\n\n${productos}\n\nSubtotal: $${subtotal.toFixed(2)}\nIVA (16%): $${iva.toFixed(2)}\nTotal a pagar: $${total.toFixed(2)}\nGracias por su compra\nNotificación: Pedido listo`);
}

mostrarMenu(() => {
  const opcion = parseInt(prompt("Ingrese el número del café que desea:"), 10) - 1;
  const cantidad = parseInt(prompt("Ingrese la cantidad que desea:"), 10);

  if (opcion >= 0 && opcion < menu.length) {
    destructuring(opcion, () => caja());
  } else {
    alert("Opción inválida\nNotificación: Pedido cancelado");
  }
});
