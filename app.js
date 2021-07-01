
function Notebook(p_procesador, p_ram, p_discoDuro, p_graficos) {
    this.procesador = p_procesador;
    this.ram = p_ram;
    this.discoDuro = p_discoDuro;
    this.graficos = p_graficos;

    this.retornoDatos = function () {
        
        var respuesta = `las caracteristicas de este pc son:
        procesador` + this.procesador
        +`ram` + this.ram
        +`disco duro` + this.discoDuro
        +`graficos` + this.graficos

        return respuesta;



    }

}

var pc = new Notebook("intel", "12", "480", "nv1650");
var pc2 = new Notebook("amd", "32", "480", "rx5070");

console.log(pc.retornoDatos());
console.log(pc2.retornoDatos());



