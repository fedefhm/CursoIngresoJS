//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero;
	var pares=0;
	var suma=0;
	var contador=0;
	var maximo;
	var minimo;
	var respuesta=true;

	while(respuesta==true)
	{
		numero=prompt("Ingrese número");
		while(numero<=0 || isNaN(numero))
		{
			alert("SÓLO números y POSITIVOS");
			numero=prompt("Ingrese número");
		}
		numero=parseInt(numero);
		if(numero%2==0)
		{
			pares++;
		}
		suma=suma+numero;
		if(contador==0 || numero>maximo)
		{
			maximo=numero;
		}
		if(contador==0 || numero<minimo)
		{
			minimo=numero;
		}
		contador++;
		respuesta=confirm("¿Desea ingresar otro número?");

	}// salida del while central

	document.write("a) La cantidad de numeros pares ingresados es "+pares+"<br>"+ "b) El promedio es "+suma/contador + "<br>" + "c) La suma es "+suma+"<br>"+"d) El máximo número ingresado es "+maximo+" y el mínimo es " +minimo);

}// fin de la función

