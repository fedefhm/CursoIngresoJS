function Mostrar()
{
//tomo la edad  

	var edad;
	edad= document.getElementById('edad').value;
	if(edad>17)
	{
		alert("Usted es mayor de edad");

	}
	else{

		alert("Todavía no es mayor de edad");
	}

}