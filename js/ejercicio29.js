let a, b, num;
let serie;
let nums;

alert("Ejercicio 29 - Piramide de numeros");

num=Number(prompt("Desde que numero quiere empezar"));

nums= num+1;

for (let a=1; a==nums; a++){

    serie =" " ;
    for (let b=1; b==(nums-a); b++){ 

        document.getElementById("serie2").innerHTML= serie + " " + String(nums-a);
        }

        document.getElementById("serie").innerHTML=serie;

}