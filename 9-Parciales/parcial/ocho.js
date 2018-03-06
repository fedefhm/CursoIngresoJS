function Mostrar()
{
var numero;
var cantPares=0;
var contador=0;
var suma=0;
var maximo=0;
var minimo=99999;// ver cómo mejorar el mínimo porque no funciona
var respuesta=true;

	while(respuesta==true)
	{
	numero=prompt("Ingrese número");
	numero=parseInt(numero);
		while(numero<=0)
		{
			alert("Sólo números mayores a cero");
			numero=prompt("Ingrese número");
			numero=parseInt(numero);
		}

		if(numero%2==0)
		{
			cantPares++;
		}

		if(numero>maximo)
		{
			maximo=numero;
		}
		if(numero<minimo);
		{
			minimo=numero;
		}
		suma=suma+numero;
		contador++;
		respuesta=confirm("¿Ingresar otro número?");

	}

document.write("a) La cant. de pares es "+cantPares);
document.write("<br>" + "b) El promedio de todos los números es "+ suma/contador);
document.write("<br>" + "c) La suma de todos los números es "+ suma);
document.write("<br>" + "d) El máximo es " + maximo + " y el mínimo es " + minimo);
}
