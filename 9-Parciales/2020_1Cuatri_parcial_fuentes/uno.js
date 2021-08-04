/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
function mostrar()
-------------------------------------------------------------------------

------------------------estrategia de resolucion:---------------------------
1- declarar bariables
cosas que tengo que pedir al usuario 
tipo/precio/cantidad/marca/fabricante

	a- cantidad de alcoholBarato/fabricanteAlcoholBarato/precioAlcoholBarato/FlagA

	b- acumuladores y contadores ---> barbijos/alcoholes/jabones
		variable promedio

	c- acumulador de jabones del punto b

2- general bucle de 5 veces (for)
-------------------------------------------------------------------------
cosas que se tiene que hacer 5 veces (dentro del bucle)

	2.1- pido tipo / valido 
	2.2- pido precio / valido 
	2.3- pido camtidad / valido  
	2.4- pido marca
	2.5- pido fabricante

3-que tengo que hacer para constestar el punto a-

	3.1- me fijo si es un alcohol --> 
		si es la primera vez (flag) guardo precio cantidad y fabricante
		sino comparar

	3.2- segun tipo de producto actualizo el acumulador y contador

------------------------------------------------------------------------
4- cosas que tengo que ahcer despues del for
me fijo cual fue el tipo con mas unidades vendidas y calculo el promedio

mostrar el resultado
*/
function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;

	let cantAlcoholBarato;
	let fabricanteAlcoholBarato;
	let precioAlcoholBarato;
	let marcaAlcoholBarato;
	let FlagAlcohol = 1;

	let contBarbijos = 0;
	let contAlcoholes = 0;
	let contJabones = 0;

	let acumtBarbijo = 0;
	let acumAlcohol = 0;
	let acumJabon = 0;

	let promedio;
	let mayorTipo;

	for (let i = 0 ; i < 5 ; i++) {

		tipo = prompt("ingrese tipo de producto: barbijo/alcohol/jabon").toLowerCase();
		while(tipo != "barbijo" && tipo != "alcohol" && tipo != "jabon"){
			tipo = prompt("Error, ingrese tipo de producto: barbijo/alcohol/jabon").toLowerCase();
		}
		
		precio = parseInt(prompt("ingrese precio del producto"));
		while(isNaN(precio) || !(precio >= 100 && precio <= 300)){
			precio = parseInt(prompt("Error, ingrese precio del producto"));
		}
		
		cantidad = parseInt(prompt("ingrese cantidad del producto"));
		while(isNaN(cantidad) || !(cantidad > 0 && cantidad < 1000)){
			cantidad = parseInt(prompt("Error, ingrese cantidad del producto"));
		}
		
		marca = prompt("Ingrese marca del producto");

		fabricante = prompt("Ingrese fabricante del producto");

		switch(tipo){
			case "alcohol":
				if(FlagAlcohol == 1 || precioAlcoholBarato	> precio){

					cantAlcoholBarato = cantidad;
					fabricanteAlcoholBarato = fabricante;
					precioAlcoholBarato = precio;
					marcaAlcoholBarato = marca;
					FlagAlcohol == 0;
				}
				else if(precioAlcoholBarato	== precio){
					cantAlcoholBarato += cantidad;
					fabricanteAlcoholBarato += " y " + fabricante;
					marcaAlcoholBarato += " y " + marca;
				}
				
				contAlcoholes += cantidad; 
				acumAlcohol += precio * cantidad;

				break;
			case "barbijo":

				contBarbijos += cantidad; 
				acumtBarbijo += precio * cantidad;

				break;
			case "jabon":

				contJabones += cantidad; 
				acumJabon += precio * cantidad;
				break;
		}
	}

	if (contAlcoholes > contBarbijos && contAlcoholes > contJabones) {
		promedio = "alcoholes a un precio promedio de: $" + acumAlcohol / contAlcoholes;
		
	} else if (contBarbijos >= contAlcoholes && contBarbijos > contJabones) {
		promedio = "barbijos a un precio promedio de: $" + acumtBarbijo / contBarbijos;
		
	} else {
		promedio = "jabones a un precio promedio de: $" + acumJabon / contJabones;
	}
	if(FlagAlcohol == 0){
		alert("el alcohol mas barato es el: "+ marcaAlcoholBarato + ", frabricado por: "+ 
		fabricanteAlcoholBarato + ", en " + cantAlcoholBarato + " unidades, a $" + precioAlcoholBarato + "c/u");
	}
	else{
		alert("no se vendio nungun alcohol");
	}

	alert("El producto mas vendido fueron los " + promedio);
	alert("la cantidad vendida de jabones Fue: " + contJabones);
}
