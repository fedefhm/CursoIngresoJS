function Mostrar()
{
var numero;
var cantPares=0;
var suma=0;
var contador=0;
var maximo;
var minimo;
var respuesta=true;
var flag=0;

while(respuesta==true)
{
	numero=prompt("Ingrese número");

	while(numero<=0 || isNaN(numero))//valido que sean positivos
	{
		alert("Ingrese SÓLO números y positivos");
		numero=prompt("Ingrese número");
	}
	numero=parseInt(numero);
	/* El número lo parseo a esta altura porque
	si toco "enter" sin querer cuando me lo pide en el HTML
	y el parseo lo tendría luego de pedir
	el numero (en la línea 15), la suma y el promedio me dan mal.
	(no así los pares, el máx y mín).
	La otra opción (implicaría usarlo dos veces) es que lo parsee
	en la línea 15 y en la 20 también.
*/
	if(numero%2==0)
	{
		cantPares++;
	}

	if(contador==0 || numero>maximo)
	{
		maximo=numero;
	}
	if(contador==0 || numero<minimo)
	{
		minimo=numero;
	}
	
	suma=suma+numero;
	contador++;
	respuesta=confirm("¿Desea ingresar otro número?")
	

}//salida del while

document.write("a) La cantidad de pares es "+ cantPares + "<br>" + "b) El promedio es " + (suma/contador) + "<br>" + "c) La suma de los números es " + suma + "<br>" + "d) El máximo es "+ maximo + " y el mínimo es "+ minimo);

}//fin de función
