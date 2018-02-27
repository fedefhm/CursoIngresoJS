
function Mostrar()
{
// algoritmo que calcule perimetro y area de triangulo equilatero
// tomar la altura por prompt
var base;
var perímetro;
var area;

base= document.getElementById('laBase').value;

base= parseInt (base);

perímetro= base*3;
area=sqrt{ ((base/2)*(base/2))+(base*base)};

alert("El perímetro es "+ perímetro);
alert("El area es "+area);


}
// seguir... altura la toma, no hace pitagoras
