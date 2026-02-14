window.onload = function() {
    const boton = document.getElementById("startButton");
    const contenido = document.getElementById("mainContent");

    boton.addEventListener("click", function() {
        contenido.innerHTML = `
            <h1>Bienvenida a nuestro viaje ✨</h1>
            <p>Mes 6... y seguimos escribiendo historia.</p>
        `;
    });
};
