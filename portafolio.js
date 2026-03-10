

const botonTema = document.getElementById("btn-tema");
botonTema.addEventListener("click", () => UI.alternarColor());


// const tarjetasProyectos = document.querySelectorAll(".proyecto-card");
//
// tarjetasProyectos.forEach((tarjeta) => {
//   tarjeta.addEventListener("click", () => {
//     const nombreProyecto = tarjeta.querySelector("h3").innerText;
//     alert(`¡Has hecho clic en el proyecto: ${nombreProyecto}!`);
//   });
// });

// delegacion de eventos
const contenedorProyectos = document.querySelector(".proyectos-grid");

contenedorProyectos.addEventListener("click", function (evento) {
  const tarjeta = evento.target.closest(".proyecto-card");
  if (tarjeta) {
    alert("Has hecho clic en el proyecto: " + tarjeta.querySelector("h3").innerText);
  }
});

// Efecto hover en las tarjetas de proyecto
tarjetasProyectos.forEach((tarjeta) => {
  tarjeta.addEventListener("mouseenter", () => {
    tarjeta.style.backgroundColor = "#f0f0f0";
    tarjeta.style.cursor = "pointer";
  });

  tarjeta.addEventListener("mouseleave", () => {
    tarjeta.style.backgroundColor = "#fff";
  });
  tarjeta.addEventListener("click", () => {
    const enlaceProyecto = tarjeta.querySelector("a").href;
    window.open(enlaceProyecto, "_blank");
  });
});

// Cambiar color de fondo
const UI = {
  cuerpo: document.body,

  alternarColor: function () {
    const esOscuro = this.cuerpo.style.backgroundColor === "black";
    this.cuerpo.style.backgroundColor = esOscuro ? "white" : "black";
    this.cuerpo.style.color = esOscuro ? "black" : "white";
  },
};
