let categoria;
let sueldo;
let aumento;
let sueldoTotal;


 alert("Ejercicio 15- Sueldo de trabajador según la categoría");

 categoria =Number(prompt("Ingrese el numero de su categoria"));
 sueldo = Number(prompt("Ingrese su sueldo"));
 aumento =Number;
 sueldoTotal =Number;
 

 switch(categoria){
        case 1:

        aumento=(sueldo*10/100);
        sueldoTotal=(sueldo+aumento);

        document.getElementById("felicidades").innerHTML="Felicidades su bonificaciòn es del 10% equivalente a: " + aumento + " $";

        document.getElementById("sueldo").innerHTML="Su sueldo serà de: "+ sueldoTotal + " $";
        break;

        case 2:

        aumento=(sueldo*20/100);
        sueldoTotal=(sueldo+aumento);

        document.getElementById("felicidades").innerHTML="Felicidades su bonificaciòn es del 20% equivalente a: " + aumento + " $";

        document.getElementById("sueldo").innerHTML="Su sueldo serà de: "+ sueldoTotal + " $";
        break;

        case 3:

        aumento=(sueldo*30/100);
        sueldoTotal=(sueldo+aumento);

        document.getElementById("felicidades").innerHTML="Felicidades su bonificaciòn es del 30% equivalente a: " + aumento + " $";

        document.getElementById("sueldo").innerHTML="Su sueldo serà de: "+ sueldoTotal + " $";
        break;

        case 4:

        aumento=(sueldo*50/100);
        sueldoTotal=(sueldo+aumento);

        document.getElementById("felicidades").innerHTML="Felicidades su bonificaciòn es del 50% equivalente a: " + aumento + " $";

        document.getElementById("sueldo").innerHTML="Su sueldo serà de: "+ sueldoTotal + " $";
        break;

        default:
            
        document.getElementById("error").innerHTML="Error usted no ha escogido una categoria valida";

 }