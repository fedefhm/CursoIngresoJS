function Mostrar()
{	/*
	var contador=0;
	var acumulador=0;
	var respuesta="y";

	while(respuesta=="y")
		{	
			numero=prompt("Ingrese número");
			parseInt(numero); //despues de tomar el numero, antes de parsearlo,
			// debo poner el contador; sino no funciona.
			acumulador=acumulador+numero;
			contador++;
			respuesta= prompt("¿continuar?");
		}
	document.getElementById('suma').value= acumulador;
	document.getElementById('promedio').value=acumulador/contador;

*/
	var contador=0;
	var acumulador=0;
	var respuesta='y';

	while(respuesta == "y")
	{
		
		numero = prompt ("ingrese numero");

		contador++; 

		numero = parseInt(numero);

		acumulador= acumulador+numero;

		respuesta= prompt("Quiere ingresar otro numero?");
	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN