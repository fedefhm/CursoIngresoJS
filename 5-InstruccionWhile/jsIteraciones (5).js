function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

document.getElementById('Sexo').value=sexo;

if(sexo="f")
{
	alert("femenino")
}
	else
{
		if(sexo="m")
	{
		alert("masculino")

	}
			else 
			{
				alert("Ingrese sexo válido")
	}
}

}//FIN DE LA FUNCIÓN