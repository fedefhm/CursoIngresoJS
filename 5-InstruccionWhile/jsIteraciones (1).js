function Mostrar()
{
	var contador;
	contador=0; //arranco en cero

	while(contador<10) // la cantidad es la que me pide (las veces)
	{
		
		contador++; // es lo mismo que poner contador=contador + 1
		document.write(contador); // el <br> es un formato de html para que ela cuenta la haga uno debajo del otro (salto de línea)
		 
	}
	/*var contador;
	contador=1;

	while(contador<=10)
	{
		document.write("<br>"+ contador); // el <br> es un formato de html para que ela cuenta la haga uno debajo del otro (salto de línea)
		contador=contador+1 
*/


}//FIN DE LA FUNCIÓN
// ojo porque si no defino bien las condiciones, se tilda (porque entra cíclicamente en el while y nunca sale)