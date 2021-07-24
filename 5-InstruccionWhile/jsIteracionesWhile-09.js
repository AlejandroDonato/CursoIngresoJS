/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numero;
	let numeroMaximo;
	let numeroMinimo;
	let seguir;
	flag = 1;

	do{
		numero = parseInt(prompt("ingrese numero"));

		while(isNaN(numero)){
			numero = parseInt(prompt("Error, Ingrese un numero"));
		}

		if(flag){
			numeroMaximo = numero;
			numeroMinimo = numero;
			flag = 0;
		}
		else if(numero < numeroMinimo){
			numeroMinimo = numero;
		}
		else if(numero > numeroMaximo){
			numeroMaximo = numero;
		}
		//alert("max: " + numeroMaximo + " y min: " + numeroMinimo);

		seguir = prompt("desea continuar agregando numeros? S/N").toLowerCase();

	}while(seguir == "s");

	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;




}