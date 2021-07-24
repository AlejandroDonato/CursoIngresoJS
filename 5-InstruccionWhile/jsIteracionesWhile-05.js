/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;

	sexo = prompt("Ingrese sexo: f ó m .").toLowerCase();
	//lower para transformar en minusculas y uper mayusculas

	while (!(sexo == "f" || sexo == "m")){

		sexo = prompt("Incorrecto. ingrese f ó m .").toLowerCase();

	}
	document.getElementById("txtIdSexo").value = sexo;
}