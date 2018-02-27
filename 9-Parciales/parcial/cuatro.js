function Mostrar()
/*{
// ingresar 3 numeros e informar cuál es el mayor

var numeroUno = prompt ("Ingrese el primer número");
var numeroDos = prompt ("Ingrese el segundo número");
var numeroTres = prompt ("Ingrese el tercer número");

numeroUno= parseInt(numeroUno);
numeroDos= parseInt(numeroDos);
numeroTres=parseInt(numeroTres);

if(numeroUno>numeroDos&&numeroUno>numeroTres)
{
	alert("El máximo es "+numeroUno);
}
else
	{
	if(numeroDos>numeroTres&&numeroDos>numeroUno)
	{
		alert("El máximo es "+numeroDos);
	}
	else
	{
		alert("El máximo es "+numeroTres);
	}

	}

}
*/
/*para testear el ejercicio, ingresar:
333
321
123
231
*/

//hacer lo mismo para que muestre máximo y mínimo

// es igual pero con las boquitas cambiadas.
// imprimir por document.write porque sino sale en dos carteles distintos (por alert)

{
// ingresar 3 numeros e informar cuál es el mayor

var numeroUno = prompt ("Ingrese el primer número");
var numeroDos = prompt ("Ingrese el segundo número");
var numeroTres = prompt ("Ingrese el tercer número");

numeroUno= parseInt(numeroUno);
numeroDos= parseInt(numeroDos);
numeroTres=parseInt(numeroTres);

if(numeroUno>numeroDos&&numeroUno>numeroTres)
{
	document.write("El máximo es "+numeroUno);
}
else
	{
	if(numeroDos>numeroTres&&numeroDos>numeroUno)
	{
		document.write("El máximo es "+numeroDos);
	}
	else
	{
		document.write("El máximo es "+numeroTres);
	}

	}
	

if(numeroUno<numeroDos&&numeroUno<numeroTres)
	{
	document.write(" y el mínimo es "+numeroUno);
	}
	else
	{
	if(numeroDos<numeroTres&&numeroDos<numeroUno)
	{
		document.write(" y el mínimo es "+numeroDos);
	}
	else
	{
		document.write(" y el mínimo es "+numeroTres);
	}

}
}
