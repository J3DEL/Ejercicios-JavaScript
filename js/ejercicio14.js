let num1, num2, num3;

alert("Ejercicio 14 - Mayor de tres numeros")

num1= Number(prompt("Ingrese el primer numero"));
num2= Number(prompt("Ingrese el segundo numero"));
num3= Number(prompt("Ingrese el tercer numero"));

if(num1>num2 && num1>num3){

    document.getElementById("numMayor").innerHTML="El numero mayor es: " + num1;

}else if(num2>num1 && num2>num3){

    document.getElementById("numMayor").innerHTML="El numero mayor es: " + num2;

}else{

    document.getElementById("numMayor").innerHTML="El numero mayor es: " + num3;
}
