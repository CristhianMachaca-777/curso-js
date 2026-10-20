//Almacenar un texto en una variable y luego mostrarlo en orden inverso en la consola
//Ejemplo: "senati" -> "itanes"

const texto = "senati";

const textoInverso = texto.split("").reverse().join("");

console.log(textoInverso);

//Crear una variable donde almacene una dirección de correo electrónico
//verificar si el correo es valido cuando tiene un solo @
//Ejemplo:
// jhon@gmail.com [correcto]
// luis@gmail@.com [incorrecto]
// mariagmail.com [incorrecto]

const correo = "jhon@gmail.com";

const partes = correo.split("@");
const esValido = partes.length === 2 && partes[0] !== "" && partes[1] !== "";

if (esValido) {
  console.log(`${correo} [correcto]`);
} else {
  console.log(`${correo} [incorrecto]`);
}