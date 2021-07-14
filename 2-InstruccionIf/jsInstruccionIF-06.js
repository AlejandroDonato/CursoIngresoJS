function mostrar()
{
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);

//	if (edad <=12){
//		alert ("Es un niño");
//	}
//	if (edad >=13 && edad <=17){
//		alert ("Es adolescente");
//	}
//	if (edad >=18){
//		alert ("Es mayor de edad");
//	}

	if (edad <=12){
		alert ("Es un niño");
	}
	else {
		if(edad <=17){
			alert ("Es adolescente");
		}
		else{
			alert ("Es mayor de edad");
		}
	}
}



/* 	podemos suprimir {} de el else y anexarle el if siguiente en el filtro para simplicar
	cuando tenemos muchas decicienos

if (edad <=12) {
	alert ("Es un niño");
}
else if(edad <=17) {
	alert ("Es adolescente");
}
else {
	alert ("Es mayor de edad");
}
} */ 