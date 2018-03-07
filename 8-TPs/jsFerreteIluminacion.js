/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidad;
 	var marca;
 	var precio=35;
 	var subtotal;
 	var precioConDescuento;

 	cantidad=document.getElementById('Cantidad').value;
 	cantidad=parseInt(cantidad);
 	marca=document.getElementById('Marca').value;
 	subtotal=precio*cantidad;

 	if(cantidad<3)
 	{
 		alert("El precio total es "+ subtotal + " pesos");
 	}
	 	if(cantidad==3)
	 	{
	 		switch(marca)
	 		{
	 			case "ArgentinaLuz":
	 			precioConDescuento=subtotal*0.85;
	 			document.getElementById('precioDescuento').value=precioConDescuento;
	 			break;
	 			case "FelipeLamparas":
	 			precioConDescuento=subtotal*0.9;
	 			document.getElementById('precioDescuento').value=precioConDescuento;
	 			break;
	 			case "JeLuz":
	 			case "Osram":
	 			case "HazIluminacion":
	 			precioConDescuento=subtotal*0.95;
	 			document.getElementById('precioDescuento').value=precioConDescuento;
	 			if(precioConDescuento>120)
	 			{
	 				alert("Usted pagará "+precioConDescuento*1.1+ " siendo " +precioConDescuento*0.1+ " lo que se adiciona de IIBB"); 
	 			}
	 		}
	 	}

		 	if(cantidad==4)
		 	{
		 		switch(marca)
		 		{
		 			case "ArgentinaLuz":
		 			case "FelipeLamparas":
		 			precioConDescuento=subtotal*0.75;
		 			document.getElementById('precioDescuento').value=precioConDescuento;
		 			break;
		 			case "JeLuz":
	 				case "Osram":
	 				case "HazIluminacion":
		 			precioConDescuento=subtotal*0.8;
		 			document.getElementById('precioDescuento').value=precioConDescuento;
		 			if(precioConDescuento>120)
		 			{
		 				alert("Usted pagará "+precioConDescuento*1.1+ " siendo " +precioConDescuento*0.1+ " lo que se adiciona de IIBB"); 
		 			}
		 		}
		 	}

		 	if(cantidad==5)
		 	{
		 		switch(marca)
		 		{
		 			case "ArgentinaLuz":
		 			precioConDescuento=subtotal*0.6;
		 			document.getElementById('precioDescuento').value=precioConDescuento;
		 			break;
		 			case "FelipeLamparas":
		 			case "JeLuz":
	 				case "Osram":
	 				case "HazIluminacion":
		 			precioConDescuento=subtotal*0.7;
		 			document.getElementById('precioDescuento').value=precioConDescuento;
			 			if(precioConDescuento>120)
			 			{
			 				alert("Usted pagará "+precioConDescuento*1.1+ " siendo " +precioConDescuento*0.1+ " lo que se adiciona de IIBB"); 
			 			}
		 		}
		 	}
	 	if(cantidad>=6)
	 	{
	 		precioConDescuento=subtotal*0.5;
	 		document.getElementById('precioDescuento').value=precioConDescuento;
	 		if(precioConDescuento>120)
	 		{
	 			alert("Usted pagará "+precioConDescuento*1.1+ " siendo " +precioConDescuento*0.1+ " lo que se adiciona de IIBB"); 
	 		}
	 		
	 	}


}// fin de la función
