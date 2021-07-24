/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;
	clave = 0;
	
	clave =	prompt("Ingrese clave: ");
	while(clave != "utn750"){
	clave =	prompt("clave incorrecta. Reingrese clave.");
	}
	alert("contraseña correcta");
}
