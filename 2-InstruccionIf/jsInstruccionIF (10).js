function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 


var numeroRandom;
numeroRandom= Math.floor((Math.random() * 10) + 1);

if(numeroRandom>8)
		
	{
	alert(“Excelente”+ numeroRandom);

	} 
		else
			{
				if(numeroRandom<4)
					{
						alert(“Vamos que la próxima se puede: ” + numeroRandom);
					}

			} else
				{
					alert(“Aprobó:” + numeroRandom); 
				}
}


/*var numeroRandom;

numeroRandom=Math.floor((Math.random() * 10) + 1);
	if(numeroRandom>8)
	{
		alert("Excelente "+ numeroRandom);

			}
			if(numeroRandom<8 && numeroRandom>3)
	{
		alert("Aprobó "+ numeroRandom);

			}
			if(numeroRandom<4)
	{
		alert("Next time "+ numeroRandom);

			}

}//FIN DE LA FUNCIÓN
*/