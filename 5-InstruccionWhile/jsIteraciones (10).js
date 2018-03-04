function Mostrar()
{

var numero;
var negativo=0;
var positivo=0;
var cantPositivos=0;
var cantNegativos=0;
var cantCeros=0;
var cantPares=0;
var flag=0;
var respuesta=true;

while(respuesta==true)
{
	numero=prompt("Ingrese número");
	numero=parseInt(numero);

	if(flag==0)
	{
		flag=1;
	}

	if(numero<0)
	{
		negativo=negativo+numero;
		cantNegativos++;
	}

	if(numero>0)
	{
		positivo=positivo+numero;
		cantPositivos++;
	}

	if(numero==0)
	{
		cantCeros++;
	}

	if(numero%2==0 && numero!=0)
	{
		cantPares++;
	}

	respuesta=confirm("¿Desea ingresar otro número?");
}

document.write("<br>"+ "1. La suma de los negativos es "+ negativo);
document.write("<br>"+ "2. La suma de los positivos es "+ positivo);
document.write("<br>"+ "3. La cantidad de positivos es "+ cantPositivos);
document.write("<br>"+ "4. La cantidad de negativos es "+ cantNegativos);
document.write("<br>"+ "5. La cantidad de ceros es "+ cantCeros);
document.write("<br>"+ "6. La cantidad de pares es "+ cantPares);
document.write("<br>"+ "7. El promedio de los positivos es "+ positivo/cantPositivos);
document.write("<br>"+ "8. El promedio de los negativos es "+ negativo/cantNegativos);
document.write("<br>"+ "9. La diferencia entre los positivos y los negativos es "+ (positivo-negativo));

}//FIN DE LA FUNCIÓN