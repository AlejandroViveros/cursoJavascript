



function imprimir( fn ){

fn();



}

var persona ={
	nombre:"juan",
	apellido:"padilla"
}

var miFuncion = function(){
	console.log("miFuncion");
}

imprimir(miFuncion);
