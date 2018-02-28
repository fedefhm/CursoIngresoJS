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

/*
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
// habría que agregarle alguna otra condición porque ingresando 
// la secuencia 1-1-3, devuelve "el máximo es 3 y el mínimo es 3"

*/

//ahora este es el del parcial posta:
{
var numero1;	
var numero2;
numero1=prompt("Ingrese el primer número");
numero2=prompt("Ingrese el segundo número");
numero1= parseInt(numero1);
numero2= parseInt(numero2);

	if(numero1>numero2)
	{
		document.write(numero1-numero2);
	}
	else
	{
		if(numero2>numero1)
		{
			document.write(numero1+numero2);
		}
		else
		{
			document.write(numero1*numero2);
		}
	}
		
		
}
