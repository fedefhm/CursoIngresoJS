function Mostrar()
{
var edad;
var sexo;
var sumaEdades=0;
var contador=0;
var minimo;
var cantVaronesMayores=0;

	while(contador<5)
	{
		edad=prompt("Ingrese la edad");
		edad=parseInt(edad);

		while(edad<0 || edad>100 || isNaN (edad))// valido edad
		{
			alert("Sólo edades entre 0 y 100");
			edad=prompt("Ingrese la edad");	
		}

		sexo=prompt("Ingrese el sexo: m (masculino) o f (femenino)");
		
		while(sexo!="f" && sexo!="m")// valido sexo
		{
			alert("Ingrese sexo de modo correcto");
			sexo=prompt("Ingrese el sexo");	
		}

		if(contador==0 || edad<minimo)
		{
			minimo=edad;
		}

		if(edad>=20 && sexo=="m")
		{
			cantVaronesMayores++;
		}
		sumaEdades=sumaEdades+edad;
		contador++;

	}//salida del while

alert("a) El promedio de edades es "+ sumaEdades/contador);
alert("b) La edad más baja es " + minimo);
alert("c) La cantidad de varones con 20 años o más es " + cantVaronesMayores);

}//salida de la función
