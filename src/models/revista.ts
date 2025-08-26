import { Material } from "./material.js";

export class Revista extends Material {
  edicion: number;

  constructor(id: number, titulo: string, autor: string, edicion: number) {
    super(id, titulo, autor);
    this.edicion = edicion;
  }

  mostrarInfo(): void {
    console.log(
      `Revista: ${this.titulo} - ${this.autor}, Edición nº${this.edicion}`
    );
  }
}
