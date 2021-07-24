/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	/*
	let i = 10;
	
	while(i >= 1){
		//alert (i);
		console.log("valor de la variable" + i);
		i--;
		//i =i - 1;
	}
	*/

	//forma de resolucion con todos los valores en un solo alert

	let control = 10;
	let mensaje = " ";
	
	while(control >= 1){
		mensaje = mensaje + control + " ";
		//si cambiamos de lugar mensaje y " " 
		//podemos hacer que se encadenen los mensajes en sentido contrario
		
		control--;
		//console.log( control--) 
		//-- se puede poder de los dos lados variando que hace primero
	}
	alert(mensaje);
}