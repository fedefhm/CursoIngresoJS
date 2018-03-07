//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo;
	var ancho;
	
	largo=document.getElementById('largo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('ancho').value;
	ancho=parseInt(ancho);
	
	alert("Para alambrar el terreno de "+largo+" m de largo por "+ancho+" m de ancho, se necesitan "+(12*(largo+ancho))+" m de alambre");
	
}

/* función bien planteada, pero hay problema con el 
html porque no deja ingresar el largo
*/

