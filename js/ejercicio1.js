let numero1;
let numero2;
let suma;

alert("Ejercicio 1 - Suma de números");

numero1= Number(prompt ("Ingrese el primer número"));
numero2=Number(prompt("Ingrese el segundo número"));

suma= numero1 + numero2;

document.getElementById("num1").innerHTML = "El primer numero es: " + numero1;
document.getElementById("num2").innerHTML = "El segundo numero es: " + numero2;
document.getElementById("resultado").innerHTML = "El resultado es: " + suma;
