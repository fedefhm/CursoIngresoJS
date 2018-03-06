function Mostrar()
{
var nota;
var sexo;
var contador=0;
var suma=0;
var notaMasBaja=11;
var varonMasDeSeis=0;

while(contador<100)
{
	nota=prompt("Ingrese nota entre 0 y 10");
	nota=parseInt(nota);
	while(nota<0 || nota>10 || isNaN(nota))
	{
		alert("nota no válida");
		nota=prompt("Ingrese nota entre 0 y 10");
	}

	sexo=prompt("Ingrese sexo: f (femenino) o m (masculino)");
	while(sexo!="f" && sexo!="m")
	{
		alert("Ingrese sexo de modo correcto");
		sexo=prompt("Ingrese sexo: f (femenino) o m (masculino)");
	}
	
	if(sexo=="m" && nota>=6)
	{
		varonMasDeSeis++;
	}

	suma=suma+nota;
	if(nota<notaMasBaja)
			{
				notaMasBaja=nota;
			}	
	contador++;
}



alert("a) El promedio de notas es "+suma/contador);
alert("b) La nota más baja es " + notaMasBaja);
alert("c) La cantidad de varones cuya nota es mayor o igual a seis es " + varonMasDeSeis);


}// FIN DE A FUNCIÓN.

















/* Ejercicio de clase:
Ingresar números entre -50 y +50 y 1 letra. Informar
promedio de n positivos, cant. de impares, suma de todos
los numeros cuya letra haya sido una vocal,
el numero máximo y la letra con la que ingresó

var numero;
var letra;
var positivos;
var impares;
var sumaVocal;
var máximo;
var respuesta;


numero = prompt("Ingrese un número entre -50 y 50");
letra= prompt ("Ingrese una letra");



}
*/