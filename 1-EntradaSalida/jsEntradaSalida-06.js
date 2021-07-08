/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
  let numerouno;
  let numerodos;
  let resultado;

  numerouno = parseInt(document.getElementById("txtIdNumeroUno").value);
  numerodos = parseInt(document.getElementById("txtIdNumeroDos").value);

  //numerouno = parseInt(numerouno)
  //numerodos = parseInt(numerodos)
  
  //parseInt modifica una cadena de texto (ascii) a valor numerico
  //parseFloat igual a parseInt solo que reconoce el (.)

  resultado = numerouno + numerodos;
  //resultado = parseInt(numerouno) + parseInt(numerodos); otra opcion de resolucion

  alert("la suma es " + resultado);
  //alert (`la suma es ${resultado}`); 
}
