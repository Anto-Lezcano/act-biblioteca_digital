export class Material {
    id;
    titulo;
    autor;
    disponible;
    constructor(id, titulo, autor) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = true;
    }
    get isDisponible() {
        return this.disponible;
    }
    set isDisponible(valor) {
        this.disponible = valor;
    }
}
//# sourceMappingURL=material.js.map