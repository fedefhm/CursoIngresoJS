/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var sueldo;
var resultado;

sueldo= document.getElementById('sueldo').value;

sueldo= parseInt(sueldo);

resultado= sueldo*1.1;

// con el "alert"; con esta opción, mostraría el resultado como leyenda en el html, pero se busca  que el resultado lo tire en el recuadro, con lo cual hay que tomar el dato por ID y mostrarlo, la sintaxis es como sigue

document.getElementById('resultado').value=resultado




}
