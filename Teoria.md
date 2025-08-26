### INVESTIGACION

1. ¿Qué diferencia existe entre extends y implements en TypeScript?
2. ¿Qué ventajas ofrece el tipado fuerte en funciones y clases?
3. ¿Qué significa que una clase sea abstracta?
4. ¿Por qué conviene usar getters y setters para el encapsulamiento?
5. Ejemplificar cómo tipar:
   a. Una función con parámetros obligatorios y opcionales.
   b. Una función que devuelve una Promise.

##### DESARROLLO

1. En TypeScript, extends se usa para la herencia de clases, permitiendo que una clase herede propiedades y métodos de otra clase. Por otro lado, implements se usa para hacer que una clase cumpla con el contrato de una interfaz, lo que significa que la clase debe proporcionar la implementación para las propiedades y métodos definidos en la interfaz.

2. El tipado fuerte en funciones y clases mejora la calidad del código al: detectar errores de tipo en tiempo de compilación, lo que evita fallos en tiempo de ejecución y facilita la depuración; aumentar la legibilidad y el mantenimiento del código, al hacer que los tipos sean explícitos y predecibles; y mejorar la productividad del desarrollador, gracias a un mejor soporte de las herramientas de desarrollo y la detección temprana de problemas.

3. Una clase abstracta es una clase que no se puede instanciar directamente (no puedes crear un objeto a partir de ella), sino que sirve como un esquema o plantilla para otras clases más concretas (clases derivadas) que hereden de ella.

4. Conviene usar getters y setters para el encapsulamiento porque permiten controlar el acceso y la modificación de los datos de un objeto, añadiendo validaciones, permitiendo la creación de objetos inmutables, ocultando la implementación interna y simplificando el mantenimiento del código al evitar la refactorización de código externo cuando se cambian los detalles internos de la clase

5.

- Función con parámetros obligatorios y opcionales
  function saludar(nombre: string, edad?: number): string {
  return edad ? `Hola, soy ${nombre} y tengo ${edad} años.` : `Hola, soy ${nombre}.`;
  }

- Función que devuelve una Promise
  function obtenerDatos(): Promise<string> {
  return new Promise(r => {
  setTimeout(() => r("Datos cargados"), 1000);
  });
  }
