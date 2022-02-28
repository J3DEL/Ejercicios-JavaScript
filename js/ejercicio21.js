let num;
let  u1;
let c1;

alert("Ejercicio 21 - Numero palindromo de 3 cifras");

num =Number( prompt("Ingrese un numero de 3 cifras"));
u1 =Number;
c1=Number;

 c1=(num -(num % 100))/100;
 u1= num % 10; 

document.getElementById("unidad").innerHTML="la unidad es: " + u1;
document.getElementById("centena").innerHTML="la centena es: " + c1;


if(u1== c1){

    document.getElementById("esPalindromo").innerHTML="El numero es palindromo";

}else{

    document.getElementById("noEsPalindromo").innerHTML="El numero no es palindromo";
}