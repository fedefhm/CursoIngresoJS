//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mesDelAño;
	mesDelAño=prompt(mesDelAño);

	switch(mesDelAño)
	{
		case"Enero":
		case"Febrero":
		alert("Veranito!!!!");
		break;
		default:
		alert("Extraño Enero y Febrero");
	}
	
}

