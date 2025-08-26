import IUsuario from "../interfaces/IUsuario.js";
import { Material } from "./material.js";
export default class Usuario implements IUsuario {
    id: number;
    nombre: string;
    private materialPrestado;
    ultimaPrestacion: Material;
    constructor(id: number, nombre: string);
    prestar(material: Material): void;
    mostrarPrestados(): void;
    mostrarUltimaPrestacion(): void;
}
//# sourceMappingURL=usuario.d.ts.map