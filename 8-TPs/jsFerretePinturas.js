/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	// C=5/9*(F-32)
	var faren;
	var celsius;

	faren=document.getElementById('Temperatura').value;
	faren=parseInt(faren);
	celsius=(faren-32)*5/9;
	celsius=parseInt(celsius);

	alert("Una temperatura de "+ faren+ " grados Farenheit, equivale a "+ celsius + " grados Centígrados");

}

function CentigradosFahrenheit () 
{
	//F=(C*1.8)+32
	var faren;
	var celsius;

	celsius=document.getElementById('Temperatura').value;
	celsius=parseInt(celsius);
	faren=(celsius*1.8)+32;
	celsius=parseInt(celsius);

	alert("Una temperatura de "+ celsius+ " grados Centígrados, equivale a "+ faren + " grados Fahrenheit");


}
