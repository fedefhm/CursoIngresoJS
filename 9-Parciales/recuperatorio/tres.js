function Mostrar()
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;

	precioUno= document.getElementById('precioUno').value;
	precioUno= parseInt(precioUno);
	precioDos= document.getElementById('precioDos').value;
	precioDos= parseInt(precioDos);
	precioTres= document.getElementById('precioTres').value;
	precioTres= parseInt(precioTres);
	suma= precioUno+precioDos+precioTres;

	alert("La suma de los precios es "+ suma+ " y el promedio es " + suma/3);

}
