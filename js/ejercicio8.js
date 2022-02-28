var nota;
var nombre;

alert("Ejercicio 8-Clasificacion de notas y estudiante")

nombre=prompt("Ingrese el nombre del estudiante");
nota=prompt("Ingrese la nota del estudiante");

if(nota >=0 && nota <=2){

    document.getElementById("refuerzo").innerHTML="El estudiante " + nombre + " necesita refuerzo.";

}else if(nota >=3 && nota <= 4){

    document.getElementById("desaprobado").innerHTML="El estudiante " + nombre + " esta desaprobado.";

}else if(nota >=5 && nota <= 7){

    document.getElementById("aprobado").innerHTML="El estudiante " + nombre + " esta aprobado.";
}else if(nota >=8 && nota <= 9){

    document.getElementById("excelente").innerHTML="El estudiante " + nombre + " tiene un promedio excelente";
}else if(nota ==10){

    document.getElementById("becado").innerHTML="El estudiante " + nombre + " esta becado";
}else{

    document.getElementById("error").innerHTML="Nota no valida volver a ingresar";
    
}
