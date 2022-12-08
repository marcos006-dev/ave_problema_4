const arregloNumeros = [1, 2, 3, 4, 5, 6];
// Cantidad de elementos del arreglo.

console.log(`Numero de elementos: ${arregloNumeros.length}`);

// Porcentaje de números pares e impares.

const numerosPares = [];
const numerosImpares = [];

arregloNumeros.forEach((numero) => {
  if (numero % 2) {
    numerosImpares.push(numero);
  } else {
    numerosPares.push(numero);
  }
});

const porcentajeNumerosPares =
  (numerosPares.length / arregloNumeros.length) * 100;
const porcentajeNumerosImpares =
  (numerosImpares.length / arregloNumeros.length) * 100;

console.log(`Porcentaje de numeros pares: ${porcentajeNumerosPares}%`);
console.log(`Porcentaje de numeros impares: ${porcentajeNumerosImpares}%`);

// Porcentaje de números mayores a 1000.

const numerosMayoresMil = [];

arregloNumeros.forEach((numero) => {
  if (numero > 1000) {
    numerosMayoresMil.push(numero);
  }
});

const porcentajeNumerosMayorMil =
  (numerosMayoresMil.length / arregloNumeros.length) * 100;

console.log(
  `Porcentaje de numeros mayores a mil: ${porcentajeNumerosMayorMil}%`
);

// Cuál es el mayor y menor valor.

const numeroMayor = Math.max.apply(Math, arregloNumeros);
const numeroMenor = Math.min.apply(Math, arregloNumeros);

console.log(`Numero mayor: ${numeroMayor}`);
console.log(`Numero menor: ${numeroMenor}`);

// Asuma los siguientes indicadores: Tome en cuenta que el mayor número
// representa el 100%, indique cual es el porcentaje del número mínimo y el
// porcentaje del promedio de todos los números.

const porcentajeNumeroMinimo = numeroMenor * 0.01;

console.log(
  `Porcentaje del numero minimo ${numeroMenor}: ${porcentajeNumeroMinimo}%`
);

const sumaTotalNumeros = arregloNumeros.reduce(
  (acumulador, valorActual) => acumulador + valorActual,
  0
);

const porcentajePromedioNumeros =
  (sumaTotalNumeros / arregloNumeros.length) * 100;

console.log(
  `Porcentaje del promedio de todos los números: ${porcentajePromedioNumeros}%`
);
