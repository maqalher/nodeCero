// function suma(a, b) {
//     return a + b;
// }

// let suma = (a, b) => {
//     return a + b;
// }

// si el resultado o el retorno es de una sola linea

let suma = (a, b) => a + b;

console.log(suma(10, 20));

// function saludar() {
//     return 'Hola';
// }

let saludar = () => 'Hola';

console.log(saludar());

let saludoDos = nombre => `Hola ${nombre}`;
console.log(saludoDos('Alan'));