import { Libro } from "./models/libro.js";
import { Revista } from "./models/revista.js";
import Usuario from "./models/usuario.js";

// Crea materiales
const libro1 = new Libro(
  1,
  "El Señor de los Anillos",
  "J.R.R. Tolkien",
  1200,
  "Fantasía"
);
const libro2 = new Libro(2, "La Casa de los Espiritus", "Marcela Perez", 500);
const revista1 = new Revista(
  3,
  "Ciencia y Tecnologia",
  "Jose Perez, Matilda Ruiz",
  202
);

// Crea usuario
const usuario1 = new Usuario(1, "Antonella");

// Prestar material
console.log(`Pedido del Libro ${libro1.titulo}`);
usuario1.prestar(libro1);
console.log(`Pedido de la Revista ${revista1.titulo}`);
usuario1.prestar(revista1);
console.log(`Pedido del Libro ${libro1.titulo}`);
usuario1.prestar(libro1);

// Mostrar prestados
usuario1.mostrarPrestados();

// Mostrar prestacion
console.log("Ultima prestacion: ");
usuario1.mostrarUltimaPrestacion();

// Polimorfismo
const materiales = [libro1, libro2, revista1];
materiales.forEach((m) => m.mostrarInfo());
