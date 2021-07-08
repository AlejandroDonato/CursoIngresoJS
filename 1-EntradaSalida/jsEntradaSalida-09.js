/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let aumento;
	let nuevosueldo;
	
	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
	
	//nuevosueldo = sueldo * 1.1 ; tiene un error que no se porque no da exacto
	//para un aumento del sueldo fijo se puede utilizar la mutltiplicacion fijada para dicho aumento

	aumento = sueldo * 10 / 100;

	// podria multiplicar por 0.1 o .1 direactamente

	nuevosueldo = aumento + sueldo;

	(document.getElementById("txtIdResultado").value) = nuevosueldo;
 



}
