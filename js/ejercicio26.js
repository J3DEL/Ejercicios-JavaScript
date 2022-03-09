let num1, num2, num3;

alert("Ejercicio 26 - Numero intermedio");

num1=prompt("Ingrese el primer numero");
num2=prompt("Ingrese el segundo numero");
num3=prompt("Ingrese el tercer numero");

if(num1>num2 && num1< num3 ||  num1>num3 && num1 < num2 ){

    document.getElementById("intermedio1").innerHTML="El numero intermedio: " + num1;

}else{

    if (num2>num1 && num2< num3 ||  num2>num3 && num2 < num1){

        document.getElementById("intermedio2").innerHTML="El numero intermedio: " + num2;

    }else{

        document.getElementById("intermedio3").innerHTML="El numero intermedio: " + num3;

    }

}