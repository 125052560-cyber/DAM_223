console.log("HOLA MUNDO NODE");
let edad1 = 20;
let edad2 = 8;
console.log("edad promedio: ");
console.log((edad1 + edad2) / 2);

console.log("Medidor de Procesos");
console.time("MiProceso");
for (let i = 0; i < 1000000000; i++) {}
console.timeEnd("MiProceso");
