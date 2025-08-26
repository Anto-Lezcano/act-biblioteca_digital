import { Material } from "../models/material.js";

export default interface IUsuario {
  id: number;
  nombre: string;
  prestar(material: Material): void;
}
