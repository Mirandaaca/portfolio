// Modularidad: controlador de interfaz
const UI = {
  cuerpo: document.body,

  alternarColor: function () {
    const esOscuro = this.cuerpo.style.backgroundColor === "black";
    this.cuerpo.style.backgroundColor = esOscuro ? "white" : "black";
    this.cuerpo.style.color = esOscuro ? "black" : "white";
  },
};

const botonTema = document.getElementById("btn-tema");
botonTema.addEventListener("click", () => UI.alternarColor());

// Alerta al hacer clic en una tarjeta de proyecto
const tarjetasProyectos = document.querySelectorAll(".proyecto-card");

tarjetasProyectos.forEach((tarjeta) => {
  tarjeta.addEventListener("click", () => {
    const nombreProyecto = tarjeta.querySelector("h3").innerText;
    alert(`¡Has hecho clic en el proyecto: ${nombreProyecto}!`);
  });
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

