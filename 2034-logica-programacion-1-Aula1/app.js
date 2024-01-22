let numeroMaximo= (Math.floor(Math.random()*1000))
let numeroSecreto = (Math.floor(Math.random()*(numeroMaximo)+1));; //Se usa let para definir una variable
//console.log(numeroSecreto); // console.log, hace que se guarde en la consola del navegador el valor de la variable
let numeroUsuario = parseInt(prompt(`Me indicas un n�mero entre 1 y ${numeroMaximo}:`)); // prompt=input en python
let contador = 1
//let palabraIntento = "intento"

while (true) {

    

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el número es: ${numeroUsuario}. Realizaste ${contador} ${contador == 1 ? "intento" : "intentos"}`); //Alt+96 `` comillas invertidas para hacer un str con
    // concatenación de variables
    //Recursión, "if" --> (condición ? (si se cumple) : (si no se cumple))
        break;
    }

    else {
        if (numeroUsuario<numeroSecreto) {
            alert ("El número es mayor");
            numeroUsuario= prompt("Ingresa nuevamente el número");
        } else {
            alert ("El número es menor");
            numeroUsuario= prompt("Ingresa nuevamente el número");
        }
            if (contador>10){
                alert("Llegaste al máximo de intentos");
                break;
            }
    };
    contador++; //Incrementador
    //palabraIntento = "intentos"
}
/*

*/

/*
alert ("¡Bienvenida y bievenido a nuestro sitio web!");
let nombre= "Luna";
let edad= 25;
let numeroDeVentas=50;
let saldoDisponible=1000;
*/

/*
let mensajeDeError = "Error, completa todos los campos";
alert (mensajeDeError);
let nombre = (prompt ("Ingresa tu nombre"));
let edad = (prompt ("Ingresa tu edad"));
if (edad=>18){
    alert ("¡Puedes obtener tu licencia de conducir!")
}
*/

