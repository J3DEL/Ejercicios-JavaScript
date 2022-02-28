alert("Ejercicio 23 - Serie Fibonacci");
window.addEventListener("load",function() {
    ejecutarPrograma();


    function ejecutarPrograma () {

        
        let n = parseInt(prompt("cantidad de numero: "));

        if (Number.isInteger (n) && n >0){

            let arrayFibonacci =
            generarFibonacci (n);
            imprimirArray(arrayFibonacci);

        }else{

            document.getElementById('error').innerHTML= 'El  numero ingresado no es un entero mayor que cero';
        }

    }

    function generarFibonacci (n) {
        let fn = [0,1];

        if (n<=1){

            return fn ;

        }

        for (let i = 2; i  <= n; i++) {

            fn [ï] = fn [i-1] + fn [i-2]; 

        }

        return fn;
    }

function imprimirArray (array) {

    for (let i=0; i < array.length; i++) {

        document.getElementById("arreglo").innerHTML=array[i];

    }

}

});

