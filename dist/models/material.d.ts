import { IBibliotecaItem } from "../interfaces/IBibliotecaItem.js";
export declare abstract class Material implements IBibliotecaItem {
    readonly id: number;
    titulo: string;
    autor: string;
    private disponible;
    constructor(id: number, titulo: string, autor: string);
    get isDisponible(): boolean;
    set isDisponible(valor: boolean);
    abstract mostrarInfo(): void;
}
//# sourceMappingURL=material.d.ts.map