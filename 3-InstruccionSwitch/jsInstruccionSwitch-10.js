function mostrar()
{
	let estacion;
	let destino;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	
	// tarea

	switch(destino){
		case "Bariloche":
			if(estacion == "Invierno" || estacion == "Otoño"){
				alert("Se viaja");
			}
			else{
				alert("No se viaja");
			}
		break;
		case "Mar del plata":
			if(estacion == "Invierno"){
				alert("No se viaja");
			}
			else{
				alert("Se viaja");
			}
		break;
		case "Cataratas":
			if(estacion == "Invierno"){
				alert("No se viaja");
			}
			else{
				alert("Se viaja");
			}
		break;
		case "Cordoba":
			if(estacion == "Primavera" || destino == "Otoño"){
				alert("Se viaja");
			}
			else{
				alert("No se viaja");
			}
		break;
	}
	// forma que se me ocurrio provar si funcionaba
	/*  
	if ((estacion == "Invierno" && destino == "Bariloche") ||
		(estacion == "Verano" && (destino == "Mar del plata" || destino == "Cataratas")) || 
		(estacion == "Otoño") || (estacion == "Primavera" && destino != "Bariloche")) {
		alert("Se viaja");
	}
	else{
		alert("No se viaja")
	}*/

	//forma correcta segun lo que pedia el ejercicio
/*
	switch(estacion){
		case "Invierno":
			switch (destino){
				case "Bariloche":
					alert("Se viaja");
				break;
				default:
					alert("No se viaja");
				break;
			}
		break;
		case "Verano":
			switch (destino){
				case "Mar del plata":
				case "Cataratas":
					alert("Se viaja");
				break;
				default:
					alert("No se viaja");
				break;
			}
		break;
		case "Otoño":
				alert("Se viaja");
		break;
		case "Primavera":
			switch (destino){
				case "Bariloche":
					alert("No se viaja");
				break;
				default:
					alert("Se viaja");
				break;
			}
		break;
	}
*/
}