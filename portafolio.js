//  Controlador de interfaz
const UI = {
  cuerpo: document.body,

  /*alternarColor: function () {
    const esOscuro = this.cuerpo.style.backgroundColor === "black";
    this.cuerpo.style.backgroundColor = esOscuro ? "white" : "black";
    this.cuerpo.style.color = esOscuro ? "black" : "white";
  },*/

  irASeccion: function (id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  },
};

// Cambiar tema 
/*const botonTema = document.getElementById("btn-tema");
botonTema.addEventListener("click", () => UI.alternarColor());*/

// navegación suave
const linksNavegacion = document.querySelectorAll("nav ul li a[href^='#']");

linksNavegacion.forEach((link) => {
  link.addEventListener("click", (evento) => {
    evento.preventDefault();
    const idSeccion = link.getAttribute("href").replace("#", "");
    UI.irASeccion(idSeccion);
  });
});

// Delegación de eventos: un solo listener para todo el contenedor de proyectos
// (antes teníamos un forEach con un listener por cada tarjeta, ahora optimizado)
// const tarjetasProyectos = document.querySelectorAll(".proyecto-card");
//
// tarjetasProyectos.forEach((tarjeta) => {
//   tarjeta.addEventListener("click", () => {
//     const nombreProyecto = tarjeta.querySelector("h3").innerText;
//     alert(`¡Has hecho clic en el proyecto: ${nombreProyecto}!`);
//   });
// });

const contenedorProyectos = document.querySelector(".proyectos-grid");

contenedorProyectos.addEventListener("click", function (evento) {
  // .target = el elemento que fue clickeado, .closest busca el padre más cercano que coincida con el selector
  const tarjeta = evento.target.closest(".proyecto-card");
  if (tarjeta) {
    const enlace = tarjeta.querySelector("a");
    if (enlace && enlace.href && enlace.href !== "#") {
      window.open(enlace.href, "_blank");
    } else {
      console.log("Has hecho clic en el proyecto: " + tarjeta.querySelector("h3").innerText);
    }
  }
});

// Animaciones fade-in al hacer scroll (IntersectionObserver)
const secciones = document.querySelectorAll(".main > section");

secciones.forEach((seccion) => {
  seccion.classList.add("seccion-oculta");
});

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("seccion-visible");
    }
  });
}, { threshold: 0.15 });

secciones.forEach((seccion) => {
  observador.observe(seccion);
});

// validacion de formulario de contacto
const formularioContacto = document.querySelector("#contactame form");

formularioContacto.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje").value;

  if (nombre === "" || correo === "" || mensaje === "") {
    alert("Por favor, completa todos los campos antes de enviar.");
  } else {
    alert(`¡Gracias ${nombre}! Tu mensaje fue enviado correctamente.`);
    formularioContacto.reset();
  }
});
