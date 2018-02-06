/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	var nombre;
	var edad;

	nombre= document.getElementById('elNombre').value;
	edad= document.getElementById('laEdad').value;

	alert("Usted se llama " + nombre + " y tiene " + edad " años ")

	// tambien se podria haber escrito alert("Usted se llama " + nombre + " y tiene " + edad + "años"
	// los espacios que dejo entre el + no son relevantes, pero si los que le pongo a los textos entre comillas.

}


