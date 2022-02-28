let clave;

alert("Ejercicio 7- Costo de llamada telefónica")

clave=Number(prompt("Escoja la clave hacia a donde llama: "));

switch (clave){
    case 1 :
        var tiempoLlamada;
        var total;

        tiempoLlamada=prompt("¿Cuantos minutos duro la llamada?");

        total = 0.15 * tiempoLlamada;

        document.getElementById("uno").innerHTML="Su total a pagar es de: " + total + " $";
        
        break;
    case 2 :
        var tiempoLlamada;
        var total;

        tiempoLlamada=prompt("¿Cuantos minutos duro la llamada?");

        total = 0.14 * tiempoLlamada;

        document.getElementById("dos").innerHTML="Su total a pagar es de: " + total + " $";
        
        break;
    case 3 :
        var tiempoLlamada;
        var total;

        tiempoLlamada=prompt("¿Cuantos minutos duro la llamada?");

        total = 0.25 * tiempoLlamada;

        document.getElementById("tres").innerHTML="Su total a pagar es de: " + total + " $";
        
        break;
    case 4 :
        var tiempoLlamada;
        var total;

        tiempoLlamada=prompt("¿Cuantos minutos duro la llamada?");

        total = 0.05 * tiempoLlamada;

        document.getElementById("cuatro").innerHTML="Su total a pagar es de: " + total + " $";
        
        break;
    case 5 :
        var tiempoLlamada;
        var total;

        tiempoLlamada=prompt("¿Cuantos minutos duro la llamada?");

        total = 0.10 * tiempoLlamada;

        document.getElementById("cinco").innerHTML="Su total a pagar es de: " + total + " $";
        
        break;
    case 6 :
        var tiempoLlamada;
        var total;

        tiempoLlamada=prompt("¿Cuantos minutos duro la llamada?");

        total = 0.11 * tiempoLlamada;

        document.getElementById("seis").innerHTML="Su total a pagar es de: " + total + " $";
        
        break;
    case 7 :
        var tiempoLlamada;
        var total;

        tiempoLlamada=prompt("¿Cuantos minutos duro la llamada?");

        total = 0.12 * tiempoLlamada;

        document.getElementById("siete").innerHTML="Su total a pagar es de: " + total + " $";
        
        break;
    case 8 :
        var tiempoLlamada;
        var total;

        tiempoLlamada=prompt("¿Cuantos minutos duro la llamada?");

        total = 0.08 * tiempoLlamada;

        document.getElementById("ocho").innerHTML="Su total a pagar es de: " + total + " $";
        
        break;

    
        default: 
        document.getElementById("error").innerHTML=" Ingreso la clave incorrecta por favor repetir.";

}