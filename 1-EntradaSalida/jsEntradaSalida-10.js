/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let nuevoimporte;
	
	importe = parseFloat(document.getElementById("txtIdImporte").value);
	
	nuevoimporte = importe * .75 ;

	//tambien pordria poenerse como en el ejercicio anterior calculando ela umento * 25 / 100
	//y luego restarselo al precio inicial

	(document.getElementById("txtIdResultado").value) = nuevoimporte;
}
