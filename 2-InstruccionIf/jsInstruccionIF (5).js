function Mostrar()
{
//tomo la edad  

var edad
edad=document.getElementById('edad').value;

if (edad<13 || edad>17)
	{
	alert("No es un adolescente");	
	}

/* otra forma (hecha en clase):

if(edad>12 && edad<17)

{
	
} // al no poner nada, hace que si se cumple ese "if", no haga nada.
else
{
	alert("no es adolescente")
}

// if(!(edad>12 && edad<17)) con el signo de exclamaciòn niego si no pasa, sino me alerta lo de adentro

}//FIN DE LA FUNCIÓN
*/

}


