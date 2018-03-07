//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;

	ancho=document.getElementById('ancho').value;
	ancho=parseInt(ancho);
	largo=document.getElementById('largo').value;
	largo=parseInt(largo);

	alert("La cantidad de alambre necesaria es "+(largo*12+ancho*12));
	
}

