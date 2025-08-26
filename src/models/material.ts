import { IBibliotecaItem } from "../interfaces/IBibliotecaItem.js";

export abstract class Material implements IBibliotecaItem {
  readonly id: number;
  titulo: string;
  autor: string;
  private disponible: boolean;

  constructor(id: number, titulo: string, autor: string) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.disponible = true;
  }

  get isDisponible(): boolean {
    return this.disponible;
  }

  set isDisponible(valor: boolean) {
    this.disponible = valor;
  }

  abstract mostrarInfo(): void;
}
