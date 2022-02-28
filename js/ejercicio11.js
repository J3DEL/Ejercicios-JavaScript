let fecha;
let d, m, a, b;

alert("Ejercicio 11-Identificacion de año bisiesto");

fecha = prompt("Ingrese la fecha en el formato DD/MM/AAAA con un espacio en cada seccion");

d = Number( fecha.substring(0,2));
m = Number( fecha.substring(3,5));
a = Number( fecha.substring(6,10));

document.getElementById("dia").innerHTML = "DIA " + d;
document.getElementById("mes").innerHTML = "MES " + m;
document.getElementById("año").innerHTML = "AÑO " + a;

    if ((a % 4 ==0 ) && (a % 100!=0) || (a % 400==0)){

            document.getElementById("añoBisiesto").innerHTML="Es año bisiesto";

            b=1
            if (m==02 && b==1){

                if (d>=1 && d<=29){

                    document.getElementById("fechaCorrecta").innerHTML = "La fecha es correcta";
                }else{

                    document.getElementById("fechaIncorrecta").innerHTML = "La fecha no es correcta";
                }

            }

    }else{

        document.getElementById("noBisiesto").innerHTML = "No es año bisiesto";
        b == 0
        if(m==2 && b==0){

            if(d>=1 && d<=28){

                document.getElementById("fechaCorrecta").innerHTML = "La fecha es correcta";

            }else{

                document.getElementById("fechaIncorrecta").innerHTML = "La fecha no es correcta";

            }

        }

    }

switch (m){

    case 1 || 3 || 5 || 7 || 9 || 10 || 11 || 12:
        
    if(d>=1 && d<=31){

        document.getElementById("fechaCorrecta").innerHTML = "La fecha es correcta";

    }else{

        document.getElementById("fechaIncorrecta").innerHTML = "La fecha no es correcta";

    }
    break;

    case 4 || 6 || 8 || 11:

        if(d>=1 && d<=30){

            document.getElementById("fechaCorrecta").innerHTML = "La fecha es correcta";
    
        }else{
    
            document.getElementById("fechaIncorrecta").innerHTML = "La fecha no es correcta";
    
        }
        break;

        default:
          
}