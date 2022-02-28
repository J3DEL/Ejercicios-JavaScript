let n;
let cont;
let suma;

alert("Ejercicio 10-Conteo hasta n numeros")

n = prompt("Ingrese un número");

cont=0;
suma=0;

while (cont < n){

    cont ++;
    suma += cont
}

document.getElementById("resultado").innerHTML="La suma es: " + suma;