let z , costo, x;

alert("Ejercicio 27 - Costo de llamada");

x =Number(prompt("Ingrese el destino de su llamada"));
z =Number(prompt("Ingrese la duracion de llamada en minutos"));

switch (x){

    case 1:

    costo= .13*z
    document.getElementById("Region").innerHTML="El destino de su llamada es Estados Unidos";
    document.getElementById("cobro").innerHTML="Su cobro por la llamada es: " + costo + "$";

    break;
    case 2:

    costo= .11*z
    document.getElementById("Region").innerHTML="El destino de su llamada es Estados Unidos";
    document.getElementById("cobro").innerHTML="Su cobro por la llamada es: " + costo + "$";

    break;
    case 3:

    costo= .52*z
    document.getElementById("Region").innerHTML="El destino de su llamada es Estados Unidos";
    document.getElementById("cobro").innerHTML="Su cobro por la llamada es: " + costo + "$";

    break;
    case 4:

    costo= .99*z
    document.getElementById("Region").innerHTML="El destino de su llamada es Estados Unidos";
    document.getElementById("cobro").innerHTML="Su cobro por la llamada es: " + costo + "$";

    break;
    case 5:

    costo= .17*z
    document.getElementById("Region").innerHTML="El destino de su llamada es Estados Unidos";
    document.getElementById("cobro").innerHTML="Su cobro por la llamada es: " + costo + "$";

    break;
    case 6:

    costo= .17*z
    document.getElementById("Region").innerHTML="El destino de su llamada es Estados Unidos";
    document.getElementById("cobro").innerHTML="Su cobro por la llamada es: " + costo + "$";

    break;
    case 7:

    costo= .20*z
    document.getElementById("Region").innerHTML="El destino de su llamada es Estados Unidos";
    document.getElementById("cobro").innerHTML="Su cobro por la llamada es: " + costo + "$";

    break;
    case 8:

    costo= .59*z
    document.getElementById("Region").innerHTML="El destino de su llamada es Estados Unidos";
    document.getElementById("cobro").innerHTML="Su cobro por la llamada es: " + costo + "$";

    break;
    case 9:

    costo= .28*z
    document.getElementById("Region").innerHTML="El destino de su llamada es Estados Unidos";
    document.getElementById("cobro").innerHTML="Su cobro por la llamada es: " + costo + "$";

    break;

    default:

        document.getElementById("error").innerHTML="El destino de su llamada no existe";


}