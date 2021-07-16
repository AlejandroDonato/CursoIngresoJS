/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo = "x";
	while (!(sexo == "f" || sexo == "m")){
		sexo = prompt("ingrese f ó m .");
		document.getElementById("txtIdSexo").value = sexo;
	}
}