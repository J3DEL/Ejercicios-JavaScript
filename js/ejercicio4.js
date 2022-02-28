var nombreProducto;
var costoUnitario;
var unidades;
var subtotal;
var descuento;
var total;

alert("Ejercicio 4 -Descuento de un producto");

nombreProducto = prompt("Escriba el nombre del producto");
costoUnitario =Number( prompt("Escriba el costo unitario"));
unidades = Number(prompt("Escriba las unidades pedidas"));

subtotal = costoUnitario * unidades;
descuento = subtotal * 0.1;
total= subtotal - descuento;

document.getElementById("name").innerHTML="Su producto: " + nombreProducto;
document.getElementById("subT").innerHTML= "El subtotal es de: " + subtotal + "$";
document.getElementById("desc").innerHTML="Su descuento es de: " + descuento + "$";
document.getElementById("totalFactura").innerHTML="El total de su factura es de: " + total + "$";