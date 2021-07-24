/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let contadorPositivo = 0;
	let contadorNegativo = 1;
	let seguir;
	let flag = 1;
	/*
	do{
		numero = parseInt(prompt("Ingrese un numero"));

		if(numero >= 0){
			contadorPositivo += numero;
		}
		else if(numero <0){
			contadorNegativo *= numero;
		}
		else{
			alert("no es un valor valido")
		}

		seguir = prompt("desea ingresar otro nuemero. S / N").toLowerCase();

	}while(seguir == 's');

	document.getElementById("txtIdSuma").value = "la suma de los positivos es: " + contadorPositivo;
	document.getElementById("txtIdProducto").value ="el producto de los negativos es: " + contadorNegativo;
	*/

	do{
		numero = parseInt(prompt("Ingrese un numero"));

		while(isNaN(numero)){
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero"));
		}
		if(numero >= 0){
			contadorPositivo += numero;
			//alert("es positivo")
		}
		else{
			flag = 0;
			contadorNegativo *= numero;
			//alert("es negativo")
		}
		
		seguir = prompt("desea ingresar otro nuemero. S / N").toLowerCase();

	}while(seguir == 's');

	if(flag){
		contadorNegativo = 0;
	}

	document.getElementById("txtIdSuma").value = "la suma de los positivos es: " + contadorPositivo;
	document.getElementById("txtIdProducto").value ="el producto de los negativos es: " + contadorNegativo;
	
	
}