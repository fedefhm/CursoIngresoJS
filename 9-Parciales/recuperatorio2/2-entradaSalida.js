//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe= prompt("Ingrese importe");
	var precioFinal;
	importe=parseInt(importe);
	precioFinal=importe*1.21;
	document.getElementById('importe').value=precioFinal;
	
	
}

