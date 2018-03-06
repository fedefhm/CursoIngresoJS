function Mostrar()
{
var mesDelAño;
mesDelAño=prompt("Ingrese el mes");

switch(mesDelAño)
{
	case "Enero" :
	alert("Comienza el año");
	break;
	case "Diciembre":
	alert("Se vienen las fiestas");
	break;
	default :
	alert("No es Enero ni Diciembre");
	break;
}
}
