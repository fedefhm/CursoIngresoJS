function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta=true;

	while(respuesta == true)
	{
		
		numero = prompt ("ingrese numero");

		contador++;

		numero = parseInt(numero);

		if(numero<0)
		{
			negativo= negativo * numero;
		}
		if(numero>0)
		{
			positivo= positivo+numero;
		}

		respuesta= confirm("Quiere ingresar otro numero?");
		
	}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN