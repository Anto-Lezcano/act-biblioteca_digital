import { Material } from "./material.js";
export declare class Libro extends Material {
    paginas: number;
    genero?: string | undefined;
    constructor(id: number, titulo: string, autor: string, paginas: number, genero?: string | undefined);
    mostrarInfo(): void;
}
//# sourceMappingURL=libro.d.ts.map