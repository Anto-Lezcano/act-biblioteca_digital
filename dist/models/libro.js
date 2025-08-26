import { Material } from "./material.js";
export class Libro extends Material {
    paginas;
    genero;
    constructor(id, titulo, autor, paginas, genero) {
        super(id, titulo, autor);
        this.paginas = paginas;
        this.genero = genero;
    }
    mostrarInfo() {
        console.log(`Libro: ${this.titulo} - ${this.autor}, ${this.paginas} páginas, Género: ${this.genero ?? "No tiene un genero asignado"}`);
    }
}
//# sourceMappingURL=libro.js.map