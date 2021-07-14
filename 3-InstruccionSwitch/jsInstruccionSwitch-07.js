function mostrar()
{
	let destino
	destino = document.getElementById ("txtIdDestino").value;
	
	switch(destino){
		case "Bariloche":
			alert("Oeste del pais");
			break;
		case "Cataratas":
			alert("Norte del pais");
			break;
		case "Mar del plata":
			alert("Este del pais");
			break;
		case "Ushuaia":
			alert("Sur del pais");
			break;
	}
}