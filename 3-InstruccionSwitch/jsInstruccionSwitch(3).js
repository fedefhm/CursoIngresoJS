function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño)
{
	case "Febrero":
	alert("Este mes no tiene mas de 29 días");
	break;
	default: 
	alert("Este mes tiene 30 o más días");
	break	//este break no es necesario, pero está bueno ponerlo para acostumbrarse, porque hay otros lenguajes un poco más ásperos que sí o sí lo necesitan.
}

//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN