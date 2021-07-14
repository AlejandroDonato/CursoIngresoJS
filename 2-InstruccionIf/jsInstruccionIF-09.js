function mostrar()
{
	let numero;
	let maximo = 10;
	let minimo = 1;

	numero = Math.round(Math.random() * (maximo - minimo) + minimo);
	//numero = Math.round(Math.random() * 9 + 1);
	//numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);

	alert(numero);
}

console.log(numero);

// floor redondea hacla abajo
// ceil redondea hacia arriba
// round redondeo clasico