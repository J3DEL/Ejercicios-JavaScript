
	let i, t, n , may, men, cont= Number;

    alert('Ejercicio 20 - orden de numeros de mayor a menor');

	n= Number(prompt('Ingrese la cantidad de numeros'));

	may=0; cont=0;
	men=0;
	i=1;
    t=0;

        while (cont < n){

            cont ++;
            
            
            t= Number(prompt("Ingrese el numero: " + cont));
            
            if(i==1) {
                
                may=t;
                men=t;
            }else {
                
                if(t>may){
                    
                    may=t;
                    
                }else{                
                }
                if(t>men){
                    
                    men=t;
                    
                }else{                
                }
                
            }
            
        }
    
	

