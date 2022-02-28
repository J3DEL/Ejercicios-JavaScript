let cont;
let num;
let mayor;

alert("Ejercicio 19 - Mayor de 10 Números");

mayor=0; cont=0;

for (let i = 1; i <=10 ; i++){

    cont ++;

    num = Number(prompt("Ingrese el numero: " + cont));

    if (mayor < num){

        mayor= num;

    }
}

document.getElementById("numMayor").innerHTML="El numero mayor es " + mayor;