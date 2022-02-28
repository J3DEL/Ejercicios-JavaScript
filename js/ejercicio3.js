var nombre;
var horasTrabajadas;
var valorHora;
var sueldo;

alert ("Ejercicio 3- Sueldo en base a horas trabajadas");

nombre =prompt("Ingrese el nombre del trabajador") ;
horasTrabajadas=Number(prompt ("Ingrese el número de horas trabajadas"));
valorHora=Number(prompt ("Ingrese cuanto gana por hora"));

sueldo = horasTrabajadas * valorHora;

document.getElementById ("nombreTrabajador").innerHTML = "Nombre =" + nombre;
document.getElementById ("horasTrabajo").innerHTML = "Las horas trabajadas son =  " + horasTrabajadas;
document.getElementById ("cobroHoras").innerHTML = "El cobro por hora es = " + valorHora;
document.getElementById ("pago").innerHTML = "El pago es = " +   sueldo +    " $";
