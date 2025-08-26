import { Material } from "./material.js";

export class Libro extends Material {
  paginas: number;
  genero?: string | undefined;

  constructor(
    id: number,
    titulo: string,
    autor: string,
    paginas: number,
    genero?: string | undefined
  ) {
    super(id, titulo, autor);
    this.paginas = paginas;
    this.genero = genero;
  }

  mostrarInfo(): void {
    console.log(
      `Libro: ${this.titulo} - ${this.autor}, ${
        this.paginas
      } páginas, Género: ${this.genero ?? "No tiene un genero asignado"}`
    );
  }
}
