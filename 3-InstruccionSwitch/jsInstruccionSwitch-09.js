function mostrar()
{
	let precio;
	let estacion;
	let destino;

	precio = 15000;
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					alert("costo $" + (precio * 1.2));
				break;
				case "Cataratas":
				case "Cordoba":
					alert("costo $" + (precio * .9));	
				break;
				case "Mar del plata":
					alert("costo $" + (precio * .8));
				break;
			} 
		break;
		case "Verano":
			switch(destino){
				case "Bariloche":
					alert("costo $" + (precio * .8));
				break;
				case "Cataratas":
				case "Cordoba":
					alert("costo $" + (precio * .9));
				break;
				case "Mar del plata":
					alert("costo $" + (precio * 1.2));
				break;
 			}
		break;
		case "Otoño":
		case "Primavera":
			switch(destino){
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					alert("costo $" + (precio * 1.1));
				break;
				case "Cordoba":
					alert("costo $" + precio);
				break;
			} 
		break;
	}
}