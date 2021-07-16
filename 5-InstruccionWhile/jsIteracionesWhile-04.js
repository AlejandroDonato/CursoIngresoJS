/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;
	numero = 10;
	while(numero > 9 || numero < 0 ){
		numero = prompt("ingrese un número entre 0 y .");
	}
	document.getElementById("txtIdNumero").value = numero; 
}