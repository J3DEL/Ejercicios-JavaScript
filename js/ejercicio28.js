let numNotas;
let cont;
let nota;
let suma;
let promedio;

alert("Ejercicio 28 - Promedio de n notas")

numNotas =Number(prompt("Ingrese el numero de notas a promediar"));
cont =Number;
nota =Number;
suma =Number;
promedio =Number;

cont=0; nota=0; suma=0

while(cont < numNotas){

    cont = cont+1;

    nota =Number(prompt("Ingrese la nota" + cont));

    suma= suma+ nota;

}


promedio = suma / numNotas;

document.getElementById("prom").innerHTML="El promedio es: " + promedio;