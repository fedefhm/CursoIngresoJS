function Mostrar()
{
//tomo la edad  

var edad
edad=document.getElementById('edad').value;





/* if(edad<13)
{

	alert("niño");

}
	if(edad>12 && edad<18)
	{

		alert("adolescente")
	}
		if(edad>17)
		{
			alert("adulto")
		}
	*/	
	


 if(edad<13)
{

	alert("niño");

}
else
{

	if(edad>18)
	{
		alert("adulto")
	}
	else
	{
		alert("adolescente");
	}
}

}//FIN DE LA FUNCIÓN