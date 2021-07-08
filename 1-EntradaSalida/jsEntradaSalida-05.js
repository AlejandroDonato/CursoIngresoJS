/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar() {
  let nombre;
  let edad;

  nombre = document.getElementById("txtIdNombre").value;
  edad = document.getElementById("txtIdEdad").value;

  //alert ("usted se llama " + nombre + " y tiene " + edad + " años");
  alert(`usted se llama ${nombre} y tiene ${edad} años`);

  //dos formas de hacer este ejercicio con (`texto ${variable} texto`) o con ("texto" + variable)
  // back tick
  // alt + shift + flecha para copiar lineas
  // con la seleccion en el medio de una linea shifr + flecha para mover la linea
}
