/*   Variables  */ 

var palabras = [["computadora","sexto","mause"]];

var palabra = " ";
// Aleatorio
var rand;
// Ocultar palabra
var palOculta = [];
//HTML de la palabra
var espacio = document.getElementById("palabra");
//intentos
var cont = 6;
// letras
var buttons = document.getElementsByName('letra');
//boton reiniciar
var btnInicio = document.getElementById("reiniciar");

/*    FUNCIONES     */ 

function generaPalabra() {
  rand = (Math.random() * 19).toFixed(0);
  palabra = palabras[rand][0].toUpperCase();
  console.log(palabra);
}



