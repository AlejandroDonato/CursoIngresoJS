/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;

	numero = parseInt(prompt("ingrese un número entre 0 y 9"));

	while(numero > 9 || numero < 0 || isNaN(numero)){ 
		// isNaN funcion para definir si es un numero o no
		//(!(numero >= 0 && numero <=9)) con esta opcion no hace falta el isNaN
		//porque abarca solo los numeros del rango requerido y lo invierte con !

		numero = parseInt(prompt("Numero incorrecto. Ingrese un número entre 0 y 9"));
	}

	document.getElementById("txtIdNumero").value = "Numero = " + numero; 
}