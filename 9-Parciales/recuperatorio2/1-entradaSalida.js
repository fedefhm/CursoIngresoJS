//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var base;
	base=document.getElementById('lado').value;
	base=parseInt(base);
	alert("El perímetro del triánguo equilátero es " + base*3);

	
}

