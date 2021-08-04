function mostrar()
{
	let numero;
	let mensaje = " ";
	let contador = 0;
	
	numero = parseInt(prompt("Ingrese un numero"));
	
	while(isNaN(numero)){
		numero = parseInt(prompt("Error, Ingrese un numero valido"));
	}
	for (let i = 1; i <= numero ; i++) {
			if (i % 2 == 0) {
			contador++;
			mensaje += i + " ";
		}
	}
	alert("numeros pares son: " + mensaje + ", en total una cantidad de: " + contador + " numeros");
}