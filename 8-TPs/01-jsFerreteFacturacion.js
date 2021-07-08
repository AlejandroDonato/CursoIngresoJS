/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
    let precio2;
    let precio3;
    let preciofinal;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    preciofinal = precio1 + precio2 + precio3;

    alert("El precio final es $" + preciofinal.toFixed(2));

    //toFixed(x) se uriliza para que el valor numerico muestre X decimales
}
function Promedio () 
{
    let precio1;
    let precio2;
    let precio3;
    let promedio;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    promedio = (precio1 + precio2 + precio3) / 3;

    //se puede realizar con mas variables y mas pasasos
    //separando la suma de los precios del calculo del promedio

    alert("El promedio es $" + promedio.toFixed(2));
}
function PrecioFinal () 
{
    let precio1;
    let precio2;
    let precio3;
    let preciofinal;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    preciofinal = (precio1 + precio2 + precio3) * 1.21;

    //prodia hacerse calculando por separado el valor del iva
    //y despues sumando preciofinal + iva para tener el resultado

    alert("El precio final con iva incluido es $" + preciofinal.toFixed(2));
}