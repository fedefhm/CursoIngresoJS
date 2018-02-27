function Mostrar()
/*{
  
var importe;
var importeFinal;

importe= prompt ("Ingrese importe");
importe= parseInt(importe);

importeFinal= importe*1.21;

document.getElementById('importeFinal').value=importeFinal;

}
*/
// el ejercicio pide pedir por promt el precio, el porcentaje de descuento que se va a hacer y mostrarlo por ID
{
var importe = prompt("Ingrese importe");
var descuento = prompt("Ingrese porcentaje de descuento");
var importeFinal;

importe= parseInt(importe);
descuento= parseInt(descuento);

importeFinal= importe - ((importe*descuento)/100);
document.getElementById('importeFinal').value=importeFinal;

}
