//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero1= prompt("Ingrese el primer número");
	var numero2= prompt("Ingrese el segundo número");

	numero1=parseInt(numero1);
	numero2=parseInt(numero2);

	if(numero1==numero2)
	{
		document.write(numero1*numero2);
	}
	else
	{
		if(numero1>numero2)
		{
			document.write(numero1-numero2);
		}

		else
		{
			document.write(numero1+numero2);
		}

	}
}

