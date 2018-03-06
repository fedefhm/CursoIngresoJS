function Mostrar()
{
var numero;
var par;
var cantPares=0;

numero=prompt("Ingrese número");
numero=parseInt(numero);

for(i=1;i<=numero;i++)
	{
		if(i%2==0)
		{
		cantPares++;
		document.write(i+"<br>"); /*debo poner a esta altura
una impresión de resultado, para que imprima a cada vuelta, en 
cada paso por el "for"; sino, pasa (sin imprimir) y sale pero no
muestra los resultados(todos los pares)
		
*/
		}

	}

document.write("La cantidad de pares entre 1 y " + numero + " es " + (numero/2) + " y son los arriba mencionados");

}//FIN DE LA FUNCIÓN