/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numerouno;
	let numerodos;
	let resultado;

	numerouno = parseInt (document.getElementById ("txtIdNumeroUno").value);
	numerodos = parseInt (document.getElementById ("txtIdNumeroDos").value);
	
	//parseInt modifica una cadena de texto (ascii) a valor numerico
	//parseFloat

	resultado = numerouno + numerodos;

	
	//alert ("la suma es " resultado);
	alert (`la suma es ${resultado}`);


}

