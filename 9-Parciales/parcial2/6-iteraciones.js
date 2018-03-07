//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var mayorImporte;
	var menorImporte;
	var contador=0;

	while(contador<7)
	{
		importe=prompt("Ingrese importe");

		while(importe<=0 || isNaN (importe))
		{
			alert("sólo importes mayores a cero");
			importe=prompt("Ingrese importe");
		}

		importe=parseInt(importe);

		if(contador==0 || importe>mayorImporte)
		{
			mayorImporte=importe;
		}

		if(contador==0 || importe<menorImporte)
		{
			menorImporte=importe;
		}

		contador++;

	}//salida del while

	alert("El mayor importe fue "+ mayorImporte+ " y el menor fue "+menorImporte);

}// fin de la función

