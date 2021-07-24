function mostrar()
{
	let i=0;
	let promedio=0;
	let sumaTotal=0;
	let numero;
		
	while(i <5){
		i++;
		numero = parseInt(prompt("Ingrese numero " + i));
		sumaTotal = sumaTotal + numero;
		console.log("Suma parcial " + sumaTotal);
		console.log("Promedio parcial " + sumaTotal/i);
	}
	promedio = sumaTotal/i;
	document.getElementById("txtIdSuma").value = "la suma total es = "+ sumaTotal;
	document.getElementById("txtIdPromedio").value ="el promedio es = "+ promedio;
}