function Mostrar()
{

	var numero;
	var contador=0;
	var acumulador=0;
	
	while(contador<5)
	{
		
		numero= prompt("Ingrese numero");
		contador++;
		numero= parseInt(numero);
		acumulador= acumulador+numero; // en la primera vuelta, acumuladores cero más el número ingresado
		// en la segunda, será el acumulado, más el nuevo número y así.A la quinta vez, sale.
		

	}

	document.getElementById('suma').value= acumulador;
	document.getElementById('promedio').value= acumulador/5;

}//FIN DE LA FUNCIÓN