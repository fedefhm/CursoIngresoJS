//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
	var sexo;
	var contador=0;
	var suma=0;
	var notaMasBaja;
	var varonesMasDeSeis=0;

	while(contador<6)
	{
		nota=prompt("Ingrese nota");
		sexo=prompt("Ingrese sexo");

		while(nota<0 || nota>10 || isNaN(nota))// valido notas
		{
			alert("Ingrese SÓLO NÚMEROS entre 0 y 10");
			nota=prompt("Ingrese nota");
		}
		nota=parseInt(nota);
		while(sexo!="f" && sexo!="m")//valido sexo
		{
			alert("Ingrese sexo válido");
			sexo=prompt("Ingrese sexo");
		}

		suma=suma+nota;
		if(contador==0 || nota<notaMasBaja)
		{
			notaMasBaja=nota;
		}
		if(nota>=6 && sexo=="m")
		{
			varonesMasDeSeis++
		}
		contador++;


	}//salida del while central

	alert("a) El promedio es " + suma/contador);
	alert("b) La nota mas baja fue " +notaMasBaja);
	alert("c) La cant. de varones con 6 o mas es " + varonesMasDeSeis);

	
}//fin de la función

