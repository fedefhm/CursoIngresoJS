function Mostrar()
{
	//tomo la edad  
	var mesDelAño= document.getElementById('mes').value;
	switch(mesDelAño)
	{
		case "Enero" :
		case "Febrero" : 
		case "Marzo" :
		case "Abril" :
		case "Mayo" :
		case "Junio" :         
		alert("Falta para el invierno");
		break;
		case "Julio" : 
		case "Agosto" :
		alert("Abrigate que hace frío");
		break;
		case "Septiembre" : 
		case "Octubre" :
		case "Noviembre" :
		case "Diciembre" :
		alert("Ya pasó el frío, ahora calor");


	}




}//FIN DE LA FUNCIÓN