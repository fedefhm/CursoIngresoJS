//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
	var importe;
	var maximo;
	var minimo;
	var contador=0;

	while(contador<7)
	{
		importe=prompt("Ingrese importe");

		while(importe<0 || isNaN(importe))
		{
			alert("Ingrese SÓLO NÚMEROS y POSITIVOS");
			importe=prompt("Ingrese importe");
		}

		importe=parseInt(importe);

		if(contador==0 || importe>maximo)
		{
			maximo=importe;
		}
		if(contador==0 || importe<minimo)
		{
			minimo=importe;
		}
		contador++;

	}//salida del while principal

alert("La mayor venta de la semana fue de $"+maximo+" y la mínima de $"+minimo);
}// Fin de la función

