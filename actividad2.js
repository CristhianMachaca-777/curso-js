//Crear un objeto que almacena datos de una mascota
//desestructurar utilizando un minimo de 4 variables
//mostrar en consola.

// 1. Crear un objeto que almacena datos de una mascota
const mascota = {
  nombre: "Firulais",
  especie: "Perro",
  edad: 3,
  raza: "Labrador",
  color: "Dorado",
  vacunado: true
};

// 2. Desestructurar utilizando un mínimo de 4 variables
const { nombre, especie, edad, raza } = mascota;

// 3. Mostrar en consola
console.log(`Nombre: ${nombre}`);
console.log(`Especie: ${especie}`);
console.log(`Edad: ${edad} años`);
console.log(`Raza: ${raza}`);