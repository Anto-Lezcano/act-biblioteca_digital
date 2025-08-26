export default class Usuario {
    id;
    nombre;
    materialPrestado = [];
    ultimaPrestacion;
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    prestar(material) {
        if (material.isDisponible) {
            this.materialPrestado.push(material);
            material.isDisponible = false;
            this.ultimaPrestacion = material;
            console.log(`El material ${material.titulo} ha sido entregado`);
        }
        else {
            console.log(`El material ${material.titulo} no esta disponible`);
        }
    }
    mostrarPrestados() {
        console.log("Material prestado: ");
        this.materialPrestado.forEach((e) => {
            console.log(`${e.titulo} - ${e.autor}`);
        });
    }
    mostrarUltimaPrestacion() {
        console.log(`La ultima prestacion fue: ${this.ultimaPrestacion.titulo} del autor ${this.ultimaPrestacion.autor}`);
    }
}
//# sourceMappingURL=usuario.js.map