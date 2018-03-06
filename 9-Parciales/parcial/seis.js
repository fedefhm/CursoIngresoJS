function Mostrar()
{
var importe;
importe=parseInt(importe);
var dia=0;
var maximo;
var minimo;
var flag=0;


while(importe>0 && dia<24) // valido importe para que sea solo positivo
{
	if(flag==0)
	{
		importe=maximo;
		importe=minimo;
		flag=1;
	}

	importe=prompt("Ingrese importe positivo");
	importe=parseInt(importe);
	dia++;
	if(importe>maximo)
	{
		importe=maximo;

	}

	if(importe<minimo)
	{
		importe=minimo;
	}

}

document.write("El mayor importe fue " + maximo + ", y el menor fue " + minimo);

}
