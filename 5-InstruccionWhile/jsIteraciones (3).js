function Mostrar()
{

var clave 
clave = prompt("Ingrese el número clave");

while(clave!="utn750")
	{

		alert("Ingrese el número clave");
		clave=prompt("Ingrese el número clave");
	}

		alert("Acceso permitido");
}//FIN DE LA FUNCIÓN

/* otra forma:
{
var clave = prompt("Ingrese el número clave");
while(clave!="utn750")
{
	clave=prompt("ERROR, ingrese el número clave");
}
alert("Bienvenido");
}