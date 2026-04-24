// 1. Mensaje de bienvenida al cargar la página
window.onload = function() {
    console.log("¡Bienvenido a mi portafolio interactivo!");
    alert("Hola, gracias por visitar mi portafolio.");
};

// 2. Cambiar el texto de un párrafo al hacer clic
const btnTexto = document.getElementById('btn-cambiar-texto');
const parrafoBio = document.getElementById('parrafo-bio');

btnTexto.addEventListener('click', () => {
    parrafoBio.textContent = "¡Has desbloqueado mi información completa! Soy una futura experta en desarrollo y arquitectura.";
    btnTexto.style.display = "none"; // Ocultamos el botón después de usarlo
});

// 3. Mostrar/Ocultar contenido (Efecto dinámico)
const btnToggle = document.getElementById('btn-toggle');
const formContainer = document.getElementById('form-container');

btnToggle.addEventListener('click', () => {
    if (formContainer.style.display === "none") {
        formContainer.style.display = "block";
        btnToggle.textContent = "Ocultar Formulario";
    } else {
        formContainer.style.display = "none";
        btnToggle.textContent = "Mostrar Formulario";
    }
});