function Mostrar()
{
var numero1;
var numero2;
var suma;

numero1= prompt("Ingrese el primer número");
numero1=parseInt(numero1);
numero2= prompt("Ingrese el segundo número");
numero2=parseInt(numero2);

suma= numero1+numero2;

if(suma<0)
{
	document.write("La suma es negativa, y el resultado es "+ suma);
}
	else
	{
		if(suma>0)
		{
			document.write("La suma es positiva, y el resultado es "+ suma);
		}
	
				else
			{
				document.write("La suma es cero");
			}

	}

}
