function mostrar()
{
	let nota;

	//nota = Math.round(Math.random() * 9 + 1);
	nota = Math.floor(Math.random() * 10 + 1);

	if(nota >= 9){
		alert("EXELENTE! tu nota es un " + nota);
	}
	else if(nota >= 4){
		alert("APROBO, tu nota es un " + nota);
	}
	else{
		alert("Vamos, la proxima se puede, tu nota es un " + nota);
	}

}