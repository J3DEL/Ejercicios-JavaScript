var  largo;
var  ancho;
var area;

alert ("Ejercicio 2- Area de un rectangulo")

largo =Number(prompt("Ingrese el largo en CM", ) );
ancho=Number(prompt ("Ingrese el ancho en CM", ));

area = largo * ancho;

document.getElementById ("largoRectangulo").innerHTML = "El largo es = " + largo;
document.getElementById ("anchoRectangulo").innerHTML = "El ancho es = " + ancho;
document.getElementById ("areaRectangulo").innerHTML = "El área es= " + area;