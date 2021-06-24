

function obtenerAleatorio(){

	return Math.random();

}

function obtenerNombre(){
	return "juan";
}
//console.log(obtenerNombre()+ " Padilla");
//la funcion de abajo returna booleano (que significa verdadero o falso)
function esMayor05(){

	if( obtenerAleatorio() > 0.5  ){
		return true;
	} else{
		return false;

	}
}

// console.log(esMayor05());

if( esMayor05()){
	console.log("Es mayor a 0.5");
} else{
	console.log("Es menor a 0.5");
}
//esta funcion, retorna objeto {objeto}
function crearPersona(nombre, apellido){
	return{
		nombre: nombre,
		apellido: apellido,

	}
}
//se define variable que sera igual al retorno de la funcion
var persona= crearPersona("maria", "paz")
// console.log(persona.nombre);
// console.log(persona.apellido);

//creamos funcion "creaFuncion" la cual retorna una funcion(anonima) 
//esta funcion anonima imprime en consola "me crearon"
function creaFuncion(){
	return function(nombre){
		console.log("me crearon " + nombre);

		return function(){
			console.log("segunda funcion");
		}
	}
}

//se crea una variable "nuevaFuncion", la cual equivale al retorno de "creaFuncion"
//y la variable nuevaFuncion se transforma en funcion(porque el retorno es otra funcion)
var nuevaFuncion = creaFuncion();
//nuevaFuncion( persona.nombre );
var segundaFuncion = nuevaFuncion( persona.nombre );
segundaFuncion();

function retornoMaldito(){
	return function(){
		console.log("alejandro mi pololo");

		return function(){
			console.log("carito mi polola");
			
			return function (){
				console.log("mama comprame una tablet");
			}
		}

	}
}


var retorno1 = retornoMaldito();
var retorno2 = retorno1();
var retorno3 = retorno2();

retorno1();
retorno2();
retorno3();

