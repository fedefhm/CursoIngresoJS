function Mostrar()
{
var largo;
var ancho;
var perímetro;


largo=document.getElementById('largo').value;
ancho=document.getElementById('ancho').value;
ancho=parseInt(ancho);
largo=parseInt(largo);

perímetro= (2*ancho+2*largo)*3;
perímetro= parseInt(perímetro);


document.write("El total de alambre necesario es: "+perímetro+ " metros");




}
