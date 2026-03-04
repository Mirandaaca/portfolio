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
