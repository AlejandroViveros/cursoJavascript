var persona = {
	nombre: "maria",
	apellido: "dubon",
	imprimirNombre: function() {
		console.log( this.nombre +" "+ this.apellido );
		
	},
	direccion:{
		pais: "Costa rica",
		obtenerPais: function() {
			
			// aqui se crea una variable igual a this (esto) siendo igual a objeto direccion
			//al no ser igualada y crear una variable que sea igual a una funcion y esta imprima this
			//js toma this del globlal object no del objeto que estamos programando
			var copiaThis = this;

			var nuevaDireccion=  function() {
				console.log(copiaThis);
				
			}

			nuevaDireccion();
			
		}

	}

};



persona.imprimirNombre();
persona.direccion.obtenerPais();
