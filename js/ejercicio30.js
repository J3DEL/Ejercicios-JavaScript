let r, p;
let serie;

alert("Ejercicio 30 - Piramide asteriscos");

r = Number(prompt("Ingrese un numero en el rango 20<n>7"));
p=Number;

p=0; r=0;
r=0;

if(r>=7 || r<=20){

    
    for (let i=1; i<=7; i++){

        serie= " ";
        if(i>=5){

            r=r+2;

        }else{

        }
        p = r+1;

        for(let j=1; i= (p-i); i++){
            serie=serie + " * ";

        }

        document.getElementById("espacio").innerHTML=serie;

    }


}else {

    fdocument.getElementById("error").innerHTML="El numero no esta en el rango";

    } 
