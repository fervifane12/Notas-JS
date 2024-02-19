/*
let contador= 0; 



while (contador<10) {
    contador+=1;
    console.log(contador)
    alert (`Número: ${contador}`);
}

//OPERADORES LÓGICOS 
//&& = AND, || = OR 

let nombre = prompt("Copia tu nombre");
alert (`Hola, ${nombre}`);
console.log(`Hola, ${nombre}`);

contador = 0;
while (contador<10){//Se usa < ya que al ser contador=9, el código se lee una vez más.
    contador++;
    console.log(contador);
};


console.log(numeroMaximo)
let contador=0 
while (contador<10){
    let numeroSecreto = (Math.floor(Math.random()*(numeroMaximo)+1));
    console.log(numeroSecreto);
    contador++;
}





function mensaje() {
    return console.log("Hola mundo");
}
mensaje();

function saludo(nombre) {
    return console.log((`Hola, ${nombre}`));
}
saludo("Fernando");

function dobleNumero(numero) {
    return console.log(numero*2);
}
dobleNumero(9);

function promedio(num1, num2, num3) {
    return console.log((num1+num2+num3)/3);
}
promedio(5,89,6);

function mayor(num1, num2) {
    if (num1>num2){
        return console.log("El mayor es " + num1);
    } else {
        return console.log("El mayor es " + num2);
    };
}
mayor(59,89);
mayor(109,89);

function cuadrado(numero) {
    return console.log(numero*numero);
}
cuadrado(9);

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1); //Una función que se llama a si misma
    }
  }

let numero = 4;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);
*/

//ARREGLOS

let lista = [1, 2, 3, 4];
console.log(lista.length);//Muestra la cantidad de elementos que hay en el arreglo
lista.push(5);//Agrega un elemento a la lista en el último puesto
console.log(lista.length);
console.log(lista);
console.log(lista[0]); //Se obtiene el objeto de la posición solicitada
