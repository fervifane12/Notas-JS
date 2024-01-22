//DOM= Document Object Model
let titulo = document.querySelector('h1');
//document, es una libreria que permite dar funciones al sitio web conectando js con el código HTML.
//querySelector, trae la variable, en este caso h1 corresponde a un objeto
titulo.innerHTML = "Juego del numero secreto";
//Al llamar al método innerHTML, podemos modificar el texto, también se puede poner una función que brinde algún valor
let subtitulo = document.querySelector('p');
subtitulo.innerHTML = "Copia un número del 1 al 10";


//Para definir una función llamamos a function
function intentoDeUsuario(){
    alert("Se hizo click")
}