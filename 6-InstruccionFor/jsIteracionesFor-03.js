function mostrar()
{
	let cantidad;

	cantidad = parseInt(prompt("Ingrese cantidad de repeticiones"))
	
	while(isNaN(cantidad)){
		cantidad = parseInt(prompt("Error, Ingrese cantidad de peticiones valida"))
	}

	for (let i = 1; i <= cantidad; i++) {

	alert("Hola UTN FRA");
	
}
}