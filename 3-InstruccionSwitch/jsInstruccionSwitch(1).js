function Mostrar()
{
	//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;
	switch(mesDelAño)  
	// al final del switch va sin punto y coma. 
	//Pongo la variable a comparar entre parentesis del switch
	{
		case "Marzo" :      // lo que venga debajo de esta línea se va a ejecutar cuando el mes del año sea Febrero"
			alert("A clases");
			break; 
			// el break pone un freno a las instrucciones 
		case "Enero" :      // lo que venga debajo de esta línea se va a ejecutar cuando el mes del año sea Febrero"
			alert("Que comiences bien el año");
			break;
		case "Diciembre" :      // lo que venga debajo de esta línea se va a ejecutar cuando el mes del año sea Febrero"
			alert("Felices fiestas");
			break;
		case "Julio" :      // lo que venga debajo de esta línea se va a ejecutar cuando el mes del año sea Febrero"
			alert("Se vienen las vacaciones");
			break; 
	}



}//FIN DE LA FUNCIÓN