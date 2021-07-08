/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let alambre;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    perimetro = largo * 2 + ancho * 2;
    alambre = perimetro * 3;

    alert ("el lago de alambre que se necesita es de " + alambre + " mts");

}
function Circulo () 
{
	let radio;
    let perimetro;
    let alambre;

    radio = parseFloat(document.getElementById("txtIdRadio").value);

    perimetro = radio * 2 * 3.14;
    
    alambre = perimetro * 3;

    alert ("el largo del alambre que se presisa es de " + alambre + " mts");
}
function Materiales () 
{
	let largo;
    let ancho;
    let superficie;
    let cemento;
    let cal;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    superficie = largo * ancho;

    cemento = superficie * 2;
    
    cal = superficie * 3;

    alert ("para un terreno de " + superficie + "mt2, se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");

    //podems declarar una costante con: const CEMENTO_X_METRO = 2
    //y const CAL_X_METRO = 3 
    //para remprazar los valores a multiplicar por la superficie
    //asi no perdemos los valores constantes o no nos equivocamos al cargarlos
}