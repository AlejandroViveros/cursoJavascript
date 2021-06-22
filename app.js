
var persona = {
	nombre: "Carito",
	apellido: "vejar",
	edad: 26,
	direccion:{
		pais: "chile",
		ciudad: "santiago",
		edificio: {
			nombre: "edificio principal",
			telefono: "2222222-2"
		}
	}
};

console.log(persona.direccion.pais);
console.log(persona.direccion );

persona.direccion.zipcode = 11101;
console.log(persona.direccion.zipcode);

console.log( persona.direccion.edificio.telefono);


var edificio = persona.direccion.edificio;

edificio.nopiso = "8vo piso";

console.log(persona);


