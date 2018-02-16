/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	//esto es un comentario de una linea
//alert("anda");
// toda linea de intruccion, termina con punto y coma (;)

var nombre;
/*

con el "barra asterisco", defino bloque de comentarios (abro con barra asterisco y lo cierro a la inversa)
var nombre;
alert("nombre");
alert(nombre);//si lo dejo asi, me va a mostras "undefinied" porque no defini valor de variable.
nombre="Federico";
alert(nombre)
*/



nombre=prompt("ingrese su nombre","");
alert(nombre);

alert("su nombre es: "+ nombre);
}

