//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero;
	var contador=0;
	var suma=0;
	var minimo;
	var maximo;
	var pares=0;
	var respuesta=true;

	while(respuesta==true)
	{
		numero=prompt("ingrese numero");
		while(numero<=0 || isNaN(numero))
		{
			alert("Ingrese SÓLO números POSITIVOS");
			numero=prompt("ingrese numero");
		}

		numero=parseInt(numero);
		
		if(numero%2==0)
		{
			pares++;
		}

		suma=suma+numero;

		if(contador==0 || numero<minimo)
		{
			minimo=numero;
		}

		if(contador==0 || numero>maximo)
		{
			maximo=numero;
		}

		contador++;
		respuesta=confirm("¿Desea ingresar otro número?");

	}//salida del while principal
	
	document.write("a) La cantidad de números pares es "+ pares+"<br>" + "b) El promedio de todos los números es: "+suma/contador+ "<br>" + "c) La suma de todos los números es "+suma+"<br>" + "d) El número máximo ingresado fue "+maximo+" y el mínimo fue "+minimo);	
}//Fin de la función

