/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let cantidad;
 	let marca;
 	let precio = 35;
    let precioFinal;
    let precioFinalTotal;
        
    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    
    switch(cantidad){
        case 1:
        case 2:
            precioFinal = precio
        break;
        case 3:
            if (marca == "ArgentinaLuz"){
                precioFinal = precio * .85;
            }
            else if(marca == "FelipeLamparas"){
                precioFinal = precio * .9;
            }
            else{
                precioFinal = precio * .95;
            }
        break;
        case 4:
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                precioFinal = precio * .75;
            }
            else{
                precioFinal = precio * .8;
            }
        break;
        case 5:
            if (marca == "ArgentinaLuz"){
                precioFinal = precio * .6;
            }
            else{
                precioFinal = precio * .7;
            }
        break;
        default:
            precioFinal = precio * .5;
        break;
    }
    document.getElementById("txtIdprecioDescuento").value = "Precio x marca $" + precioFinal;
    precioFinalTotal = precioFinal* cantidad;

    if (precioFinalTotal <= 120){
        alert("Precio final $ "+ precioFinalTotal);
    }
    else{
        alert("Precio final $ "+ precioFinalTotal * 1.1 + "IIBB Usted pago $" + precioFinalTotal * 0.1);

        //mensaje de impuesto dentro del cuadro precio final

        //document.getElementById("txtIdprecioDescuento").value = (precioFinal * 1.1) + " IIBB Usted pago $" + ( precioFinal * 0.1);

        //mensaje de impuesto en un alert aparte

        /*
        document.getElementById("txtIdprecioDescuento").value = precioFinal * 1.1;
        alert("IIBB Usted pago $" + precioFinal * 0.1)
        */
    }
}
