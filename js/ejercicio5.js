var nombre;
var nota1;
var nota2;
var nota3;
var promedio;

alert("Ejercicio 5- Promedio de 3 notas");

nombre= prompt("Escriba el nombre del estudiante");
nota1=Number( prompt("Ingrese la nota 1"));
nota2=Number( prompt("Ingrese la nota 2"));
nota3=Number( prompt("Ingrese la nota 3"));

promedio = (nota1 + nota2 + nota3)/3;

if(promedio >= 6.95){
    document.getElementById("notaPromedio").innerHTML="Su nota promedio es: " + promedio;
    document.getElementById("aprobo").innerHTML="El estudiante: " + nombre + " Aprobó";
}else{

    document.getElementById("notaPromedio").innerHTML="Su nota promedio es: " + promedio;
    document.getElementById("reprobo").innerHTML="El estudiante: " + nombre + " Reprobó";
}

