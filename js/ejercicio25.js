let x, z, i, m, l=Number;

x = prompt('De que numeros desea sacar los multiplos ');
y =prompt('Hasta que numero');

i=0;
m=0;

do{
    m ++;
    i ++;
    m=x * i;
    document.getElementById('m').innerHTML=' ' + m;
    i=i+1
}while (m>=z)