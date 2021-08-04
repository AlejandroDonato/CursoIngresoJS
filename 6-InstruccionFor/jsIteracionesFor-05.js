function mostrar()
{
	let numero;

	/*
	do{

	numero = parseInt(prompt("Ingrese un numero"));
	
	while(isNaN(numero)){
		numero = parseInt(prompt("Error, Ingrese un numero valido"));

	}

	}while(numero != 9);
	*/


	for (  ;  ; ) { // si no ponemos nada sera un bucle infinito hast que lo terminemos con break
		numero = parseInt(prompt("Ingrese un numero"));
	
		while(isNaN(numero)){
			numero = parseInt(prompt("Error, Ingrese un numero valido"));
		}

		if(numero == 9){
			alert("El numero ingresado termina el programa");
			break;
		}
		
	}
}