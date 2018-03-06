function Mostrar()
{
var numero;
var divisor;
var cantDivisores=0;

numero=prompt("Ingrese número");
numero=parseInt(numero);

for(i=2;i<=numero;i++)
	{
		if(numero%i==0)
		{
		divisor=i;
		divisor=parseInt(divisor);
		document.write(divisor + "<br>"); 
		cantDivisores++
		}
	}

	document.write("La cantidad de divisores entre 1 y " + numero + " es " + cantDivisores + " y son los siguientes mencionados arriba");


}//FIN DE LA FUNCIÓN