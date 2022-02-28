let radio;
let areaCirculo;
let perimetroCirculo;

alert("Ejercicio 13 - Area y perímetro de un circulo");

radio = Number(prompt("Ingrese el radio del círculo"));
areaCirculo = Number;
perimetroCirculo = Number;

areaCirculo = (Math.PI * Math.pow(radio,2));
perimetroCirculo = (2 * Math.PI * radio);

document.getElementById("area").innerHTML="El ares es: " + areaCirculo;
document.getElementById("perimetro").innerHTML="El perimetro  es: " + perimetroCirculo;

