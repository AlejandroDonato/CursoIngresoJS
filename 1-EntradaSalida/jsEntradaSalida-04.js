/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre;
	//reserva de espacio para guardar datos

	nombre = prompt("ingrese texto");

	//guarda en la variable el texto que se coloque en la ventana emergente
	
	document.getElementById("txtIdNombre").value = nombre;
	
	//carga el texto guardado en la variable en el recuadro de texto del html

}

