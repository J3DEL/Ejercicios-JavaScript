let letra;

alert("Ejercicio 6- Letra vocal o consonante")

letra = prompt("Ingrese la letra");

switch (letra){
    case "a" || "A" :
        document.getElementById("vocal").innerHTML=" Es vocal";
        
        break;
    case "e" || "E":
        document.getElementById("vocal").innerHTML=" Es vocal";
        
        break;
    case "i" || "I":
        document.getElementById("vocal").innerHTML=" Es vocal";
        break;
    case "o" || "O":
        document.getElementById("vocal").innerHTML=" Es vocal";
        break;
    case "u" || "U":
        document.getElementById("vocal").innerHTML=" Es vocal";
        break;
        default: 
        document.getElementById("consonante").innerHTML=" Es consonante";

}