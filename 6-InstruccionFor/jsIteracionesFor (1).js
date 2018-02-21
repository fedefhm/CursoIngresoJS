function Mostrar()
{

// var contador=0; puedo definir la variable y sacarla del primer lugar del parentesis del for

/* for(contador=0;contador<10;) //los dos punto y coma tienen que quedar si le saco el "contador++" de atrás y ponerlo en la llave
{
	contador++
	document.write(contador);
	*/


 
//con esto tambien funciona. El parentesis del for es una iteración infinita escrita así; conlo cual debo acotarla abajo con el if
var contador=0;
for(;;)
{
	contador++;
	document.write("<br>"+contador);
	if(contador==10)
	{
		document.write("break"+contador);
		break;
	}
	if(contador==5)
	{
	continue;
	}
	document.write("<br>continue"+contador);
	
}

}

/*

var contadorDePositivos=0;
var contadorDeNegativos=0;
var contadorDeCeros=0;
var contadorDePar=0;
var contadorDeImpar=0;
var contador50=0;

for(contador=-100;contador<100;contador++)
{
	if(contador>0)
	{
		contadorDePositivos++;
	}
	else{
		if(contador<0)
		{
			contadorDeNegativos++;
		}else
		{
			contadorDeCeros++
		}


	}
	if(contador%2==0 && contador!=0)
	{
		contadorDePar++;
	}else{
		if(contador!=0)
		{
			contadorDeImpar++;
		}
	}

	switch(contador)
	{
		case 50:
		contador50 ++;
		break;
	}
}

document.write("Positivos"+contadorDePositivos);
document.write("Negativos"+contadorDeNegativos);
document.write("Ceros"+contadorDeCeros);
document.write("par"+contadorDePar);
document.write("impar"+contadorDeImpar);
document.write("contador50"+contador50);
*/