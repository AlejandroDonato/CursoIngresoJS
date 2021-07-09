function mostrar()
{
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	if(edad < 18 )
	{
		if(edad > 12)
		{
		alert ("es adolescente");
		}	
	}
}

// otra dorma de resoolverlo
// if (edad <=17 && edad >= 13){
// alert ("es adolescente");
// }

// todo lo que tenga que ver con true o false vienen de valores buleanos
// podemos encadenar operaciones relacionales con 
// or  ||
// amd &&
// not !   invierte una validacion
// primero resuelve los relacionales <> y despues operador logico &&