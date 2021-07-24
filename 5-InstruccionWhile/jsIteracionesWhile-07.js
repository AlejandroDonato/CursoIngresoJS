/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	/*
	let son = 's';
	let numero = 0;
	let i = 0;
		
	while(son == 's'){
		numero += parseInt(prompt("Ingrese numero:"));
		i++;
		son = prompt("Desea continuar? S o N").toLowerCase();
	}
	document.getElementById("txtIdSuma").value = "la suma total es = "+ numero;
	document.getElementById("txtIdPromedio").value ="el promedio es = "+ numero/i;
	*/
	let son;
	let acumulador = 0;
	let i = 0;
		
	do{
		acumulador += parseInt(prompt("Ingrese numero:"));
		i++;
		son = prompt("Desea continuar? S o N").toLowerCase();
	}while(son == 's');
	document.getElementById("txtIdSuma").value = "la suma total es = "+ acumulador;
	document.getElementById("txtIdPromedio").value ="el promedio es = "+ acumulador/i;
}