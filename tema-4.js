function cepillarDientes() {
  console.log(
    "1. Cepillandome los dientes...... (entra ysale de la pila rapido",
  );
}

function banarse() {
  cepillarDientes(); // Se apila encima de banarse
  console.log("2. Cuerpo limpio (banarse termina ahora)");
}

function empezarDia() {
  banarse(); // Se apila encima de empezarDia
  console.log("3. Listo para trabajar (la pila ya esta vacia)");
}

empezarDia(); // Se apila en la pila de ejecucion

const botonProyectos = document.getElementById("ver-proyectos");

function mostrarProyectos() {
  const proyectosSection = document.getElementById("proyectos");
  proyectosSection.scrollIntoView({ behavior: "smooth" });
}
botonProyectos.addEventListener("click", mostrarProyectos);

// Cambiar el tema del sitio web
const botonTema = document.getElementById("btn-tema");

const cuerpoPagina = document.body;

function alternarTema() {
  if (cuerpoPagina.style.backgroundColor === "black") {
    cuerpoPagina.style.backgroundColor = "white";
    cuerpoPagina.style.color = "black"; // cambio del texto a negro
  } else {
    // Si el fondo no es negro
    cuerpoPagina.style.backgroundColor = "black";
    cuerpoPagina.style.color = "white"; // cambio del texto a blanco
  }
}

botonTema.addEventListener("click", alternarTema);

// alerta al hacer click dentro de un proyecto
const todasLasTarjetas = document.querySelectorAll(".proyecto-card");

todasLasTarjetas.forEach((tarjeta) => {
  tarjeta.addEventListener("click", () => {
    const nombreProyecto = tarjeta.querySelector("h3").innerText;
    alert(`¡Has hecho clic en el proyecto: ${nombreProyecto}!`);
  });
});

// variables: let (que puede cambiar) y const (que no puede cambiar)
const nombreDeveloper = "Cristopher Miranda"; // No se puede cambiar el valor de esta variable, ES FIJO
let proyectosCompletados = 5; // Este valor puede cambiar a medida que completes más proyectos, ES VARIABLE

// tipos primitivos: string, number, boolean

let mensaje = "Hola, soy un desarrollador web"; // string
let edad = 30; // number
let esDesarrollador = true; // boolean

// tipos de datos complejos: array, objeto

let habilidades = ["HTML", "CSS", "JavaScript"]; // array

let perfil = {
  nombre: "Cristopher Miranda",
  edad: 30,
  habilidades: ["HTML", "CSS", "JavaScript"],
}; // objeto

const proyectoNuevo = {
  nombre: "Portafolio Personal",
  descripcion: "Un sitio web para mostrar mis proyectos y habilidades",
  tecnologias: ["HTML", "CSS", "JavaScript"],
  completado: false,
};

// Entender la visibilidad de las variables: global y local, de las variables y la memoria de las funciones.

function crearContadorDeProyectos() {
  let contador = inicial; // Esta variable es local a la función crearContadorDeProyectos, variable privada gracias al closure

  return {
    incrementar: function () {
      contador++;
      return `Proyectos completados: ${contador}`;
    },
    obtenerTotal: () => contador, // funcion flecha que devuelve el valor actual del contador, tambien es parte del closure y puede acceder a la variable contador
  };
}

const miContador = crearContadorDeProyectos(5); // contador inicia en 5

console.log(miContador.incrementar()); // Proyectos completados: 5 (contador se incrementa a 6)
console.log(miContador.contador); // undefined, contador no es accesible desde fuera de la función crearContadorDeProyectos

// otro ejemplo de closure para entender mejor la memoria de las funciones
function crearSaludo(nombre) {
  return function () {
    return `Hola, ${nombre}! Bienvenido a mi portafolio.`;
  };
}

const saludoCristopher = crearSaludo("Cristopher");
console.log(saludoCristopher()); // Hola, Cristopher! Bienvenido a mi portafolio. (la función interna tiene acceso a la variable nombre gracias al closure)

// otro ejemplo de closure para entender mejor la memoria de las funciones
function crearRastreador() {
  // local/function scope: solo vive aqui adentro de la funcion
  let conteo = 0;
  return function () {
    // closure: esta función interna tiene acceso a la variable conteo aunque la función crearRastreador ya haya terminado su ejecución, closure que mantiene acceso a la variable conteo
    conteo++;
    return `Has visitado esta sección ${conteo} veces.`;
  };
}

const rastrearClics = crearRastreador();
console.log(rastrearClics()); // Has visitado esta sección 1 veces.
console.log(rastrearClics()); // Has visitado esta sección 2 veces.
console.log(rastrearClics()); // Has visitado esta sección 3 veces.

// Programacion funcional: Inmutabilidad y transformacion de datos con funciones puras
// Definicion: En lugar de cambiar los datos originales, se crean nuevos datos a partir de los originales utilizando funciones puras que no tienen efectos secundarios. La programacion
// funcional busca crear nuevos datos a partir de los anteriores.

// Mutaciones

const misProyectos = [
  { nombre: "E-commerce", techs: ["HTML", "CSS", "JavaScript"] },
  { nombre: "Blog Personal", techs: ["GraphQL", "Gatsby", "JavaScript"] },
  { nombre: "Portafolio", techs: ["Angular", "Vue", "Gatsby"] },
];

// Reduce, usaremos reduce para contar cuantas veces se repite cada tecnologia en los proyectos, se contara las ocurrencias de cada tecnologia en el array de proyectos y se devolvera un objeto con el conteo de cada tecnologia

const stackStats = misProyectos
  .flatMap((proyecto) => proyecto.techs) // obtenemos un array con todas las tecnologias de los proyectos
  .reduce((acumulador, tecnologia) => {
    // usamos reduce para contar las ocurrencias de cada tecnologia
    acumulador[tecnologia] = (acumulador[tecnologia] || 0) + 1;
    return acumulador;
  }, {});
console.log(stackStats); // { HTML: 1, CSS: 1, JavaScript: 2, GraphQL: 1, Gatsby: 2, Angular: 1, Vue: 1 }

// Filter
// filter: creamos un nuevo array con los proyectos que utilizan JavaScript
const nombresProyectosJS = misProyectos.filter(p => p.techs.includes("JavaScript"));



// Map
// map: creamos un nuevo array con solo los nombres de los proyectos
const nombresProyectos = misProyectos.map(p => p.nombre);
console.log(nombresProyectos); // ["E-commerce", "Blog Personal", "Portafolio"]






/// modularidad
// controlador de interfaz
 
const UI = {
    cuerpo: document.body,
 
    alternarColor: function() {
        const esOscuro = this.cuerpo.style.backgroundColor === "black";
        this.cuerpo.style.backgroundColor = esOscuro ? "white" : "black";
        this.cuerpo.style.color = esOscuro ? "black" : "white";
    },
    irAseccion: function(id) {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" }); }
 
};
botonTema.addEventListener("click", () => UI.alternarColor());



// delegacion  de  eventos: un solo listener para todo el contenedor de proyectos
const contenedor = document.getElementById("contenedor-proyectos");
 
contenedor.addEventListener("click", function(evento){
 // .target el elemento que fue clikeado .closest busca el padre mas cercano que coincida con el selector dado
    const tarjeta = evento.target.closest(".proyecto-card");
    if(tarjeta){
        alert ("Haz hecho clic en un proyecto: " + tarjeta.querySelector("h3").innerText);
    }
 
});