
let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del Desafío";

function intentoDeUsuario() {
    alert ("El botón fue clicado");
}

function preguntaCiudad() {
    let preg = prompt ("Escribe una ciudad de Brasil");
    alert (`Estuve en ${preg} y me acordé de ti`);
}

function hacerSuma() {
    let num1 = parseInt(prompt ("Escribe el numero 1"));
    let num2 = parseInt(prompt ("Escribe el numero 2"));
    let resultadoSuma = num1 + num2;
    alert (`El resultado de la suma es ${resultadoSuma}`);
}