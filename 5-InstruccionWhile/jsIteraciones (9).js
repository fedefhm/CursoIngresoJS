function Mostrar()
{

	
	var max;
	var min;
	var numero;
	var flag=0;
	
	var respuesta=true;
		
	while(respuesta==true)
	{
		numero=prompt("Ingrese numero");
		numero= parseInt(numero);

			if(flag==0)
			{
				min=numero;
				max=numero;
				flag=1
			}

			if(numero>max)
			{
				max=numero;
			}

			if(numero<min)
			{
				min=numero;
			}

			respuesta=confirm("¿Desea continuar?");

	}
		document.getElementById('maximo').value=max;
		document.getElementById('minimo').value=min;
}//FIN DE LA FUNCIÓN