let numAlumnos;
let alumnosAprobados;
let alumnosReprobados;
let porcentajeAprobados;
let porcentajeReprobados;

alert("Ejercicio 12- Porcentaje de alumnos aprobados y reprobados")

numAlumnos = Number(prompt("Escriba la cantidad de alumnos"));
alumnosAprobados = Number(prompt("Escriba la cantidad de alumnos aprobados"));
alumnosReprobados = Number(prompt("Escriba la cantidad de alumnos reprobados"));

porcentajeAprobados = (alumnosAprobados * 100)/numAlumnos;
porcentajeReprobados = (alumnosReprobados * 100)/numAlumnos;

document.getElementById("aAprobados").innerHTML="El porcentaje de alumnos aprobados es: " + porcentajeAprobados + " %";

document.getElementById("aReprobados").innerHTML="El porcentaje de alumnos reprobados es: " + porcentajeReprobados + " %" ;
