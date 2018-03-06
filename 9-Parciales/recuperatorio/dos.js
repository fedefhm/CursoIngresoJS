function Mostrar()
{
  	var importe;
	var importeFinal;
	importe= prompt("Ingrese importe");
	importe=parseInt(importe);
	importeFinal=(importe*0.75);
	
	document.getElementById('importeFinal').value= importeFinal;
	
}
