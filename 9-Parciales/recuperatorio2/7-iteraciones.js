//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
	var sexo;
	var contador=0;
	var suma=0;
	var minimo;
	var varonesMasDeSeis=0;

	while(contador<6)
	{
		nota=prompt("ingrese nota");
		while(nota<0 || nota>10 || isNaN(nota))
		{
			alert("Ingrese SÓLO números entre 0 y 10");
			nota=prompt("ingrese nota");
		}

		nota=parseInt(nota);
		sexo= prompt("Ingrese sexo: f (femenino) ó m (masculino)");
		while(sexo!="f" && sexo!="m")
		{
			alert("Ingrese sexo de forma correcta");
			sexo= prompt("Ingrese sexo: f (femenino) ó m (masculino)");
		}

		suma=suma+nota;
		if(contador==0 || nota<minimo)
		{
			minimo=nota;
		}

		if(sexo=="m" && nota>=6)
		{
			varonesMasDeSeis++;
		}
		contador++;

	}//salida del while principal
	
	alert("a) El promedio de notas fue: "+suma/contador);
	alert("b) La nota más baja fue: "+minimo);
	alert("c) La cant. de varones con nota 6 o mas es: "+varonesMasDeSeis);

}//Fin de la función

