/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numero;
	let seguir;
		
	let sumaNegativos = 0;
	let contNegativos = 0;
	let promNegativos = 0;

	let sumaPositivos = 0;
	let contPositivos = 0;
	let promPositivos = 0;

	let cantCeros = 0;
	let contPares = 0;
	let diferencia;

	
	do{
		numero = parseInt(prompt("Ingrese número"));
		
		while(isNaN(numero)){
			numero = parseInt(prompt("Error, Ingrese un número"));
		}
		
		if ( numero > 0) {
			sumaPositivos += numero;
			contPositivos++;
		}
		else if (numero < 0) {
			sumaNegativos += numero;
			contNegativos++;
		}
		else{
			cantCeros++;
		}
		if (numero % 2 == 0) {
			contPares++;
		}
			
		seguir = prompt("Desea continuar agregando números? S/N")
	}while(seguir == "s")

	if (contPositivos != 0) {
		promPositivos = sumaPositivos / contPositivos;
	}
	if (contNegativos != 0) {
		promNegativos = sumaNegativos / contNegativos;
	}

	diferencia = contPositivos - contNegativos;
/*	con un alert se utiliza \n oara el salto de linea utilizando ``
	alert(`
1-Suma de los negativos: ${sumaNegativos}\n
2-Suma de los positivos: ${sumaPositivos}\n
3-Cantidad de positivos: ${contPositivos}\n
4-Cantidad de negativos: ${contNegativos}\n
5-Cantidad de ceros: ${cantCeros}\n
6-Cantidad de números pares: ${contPares}\n
7-Promedio de positivos: ${promPositivos}\n
8-Promedios de negativos: ${promNegativos}\n
9-Diferencia entre positivos y negativos: ${diferencia}`)
*/
console.log (`1-Suma de los negativos: ${sumaNegativos}`)
console.log (`2-Suma de los positivos: ${sumaPositivos}`)
console.log (`3-Cantidad de positivos: ${contPositivos}`)
console.log (`4-Cantidad de negativos: ${contNegativos}`)
console.log (`5-Cantidad de ceros: ${cantCeros}`)
console.log (`6-Cantidad de números pares: ${contPares}`)
console.log (`7-Promedio de positivos: ${promPositivos}`)
console.log (`8-Promedios de negativos: ${promNegativos}`)
console.log (`9-Diferencia entre positivos y negativos: ${diferencia}`)
			
}