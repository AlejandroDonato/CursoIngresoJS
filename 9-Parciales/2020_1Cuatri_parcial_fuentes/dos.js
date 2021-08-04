function mostrar()
{
/*
  Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/

  let tipo;
  let cantidad;
  let precio;

  let acumCemento = 0;
  let acumArena = 0;
  let acumCal = 0;

  let importeBruto;
  let importeNeto;
  let descuento;
  let maxTipo;
  let maxPrecio;
  let seguir;
  let flagCaro = 1;
 
  do{

    tipo = prompt("ingrese tipo de producto: cemento/arena/cal").toLowerCase();
		while(tipo != "cemento" && tipo != "arena" && tipo != "cal"){
			tipo = prompt("Error, ingrese tipo de producto: cemento/arena/cal").toLowerCase();
		}
		
		precio = parseInt(prompt("ingrese precio del producto"));
		while(isNaN(precio) || precio < 0){
			precio = parseInt(prompt("Error, ingrese precio del producto"));
		}
		
		cantidad = parseInt(prompt("ingrese cantidad del producto"));
		while(isNaN(cantidad) || !(cantidad > 0)){
			cantidad = parseInt(prompt("Error, ingrese cantidad del producto"));
		}










  }while(seguir == "s");  








}
