/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
var resultado; //defino las variables
var numeroUno;
var numeroDos;

numeroUno= document.getElementById('numeroUno').value; // tomo los datos
numeroDos= document.getElementById('numeroDos').value;

numeroUno=parseInt(numeroUno); //con esto transformo el "numero uno" a numero y tomo la parte entera
numeroDos=parseInt(numeroDos);

resultado=numeroUno+numeroDos; //opero

alert(resultado); //muestro

//linea 10 y 11: tomo datos. Linea 13 y 14: los transformo. Luego opero.



}

