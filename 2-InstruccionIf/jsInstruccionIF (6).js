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


		DE ESTA MANERA, USAMOS 3 VECES EL "MICROPROCESADOR"
		(SENTENCIA "IF"); EN CAMBIO CON LA DE ABAJO SÓLO SE
		USA DOS VECES (SE ECONOMIZA CÓDIGO Y SE HACE MENOS
		ENGORROSO).


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