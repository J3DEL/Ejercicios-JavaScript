let num;
let numLet;
let largo;
let digitoj;
let nuevoNumero;
let j;

alert("Ejercicio 22 - Numero palindromo de n cifras");


num =prompt("Ingrese un numero");
numLet =String(num);
largo = numLet.length;
largo = j;



for(let i=1; i<= largo; i++){

    j=j-1;
    digitoj=numLet.substring(j, numLet.length);
    varnuevoNumero=nuevoNumero + digitoj;


}

document.getElementById("numLetras").innerHTML="Numero normal:  " + numLet;
document.getElementById("numAlreves").innerHTML="Numero al reves:  " + nuevoNumero;

if(numLet = nuevoNumero){

    document.getElementById("palindromo").innerHTML="Si es palindromo";

}else{

    document.getElementById("noPalindromo").innerHTML="No es palindromo";

}