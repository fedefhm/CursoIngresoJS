function Mostrar()
{
var peso;
var cantidad=0;
var maximo;
var minimo;

while(cantidad<5)
{
	peso= prompt ("Ingrese peso del contenedor en Kg");
	peso=parseInt(peso);
	while(peso<=0)// valido que el peso sea positivo
	{
		alert("Sólo pesos mayores a cero");
		peso=prompt("ingrese peso");
	}

	if(cantidad==0 || peso>maximo)
	{
		maximo=peso;
	}
	if(cantidad==0 || peso<minimo)
	{
		minimo=peso;
	}
	
	cantidad++;

}// salida del for de cantidad

	document.write("El contenedor más pesado pesa " + maximo + " Kg y el más liviano pesa " + minimo + " Kg");

}//Fin de la función
