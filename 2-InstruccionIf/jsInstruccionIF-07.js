function mostrar()
{

	let edad;
	let estadocivil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadocivil = (document.getElementById("estadoCivil").value);

	/*if(edad <= 17){

		if(estadocivil == "Casado" || estadocivil == "Divorciado"){

			alert ("Es muy pequeño para NO ser soltero");
	
		}

	}*/

	if(edad <=17 && estadocivil != "Soltero"){
		alert ("Es muy pequeño para NO ser soltero");
	}
}