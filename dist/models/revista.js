import { Material } from "./material.js";
export class Revista extends Material {
    edicion;
    constructor(id, titulo, autor, edicion) {
        super(id, titulo, autor);
        this.edicion = edicion;
    }
    mostrarInfo() {
        console.log(`Revista: ${this.titulo} - ${this.autor}, Edición nº${this.edicion}`);
    }
}
//# sourceMappingURL=revista.js.map