window.onload = function() {
    const boton = document.getElementById("startButton");

    boton.addEventListener("click", function() {
        document.body.innerHTML = `
            <div style="text-align:center; padding-top:40vh; color:white; background-color:#0d0d0d; height:100vh;">
                <h1>Bienvenida a nuestro viaje ✨</h1>
                <p>Mes 6... y seguimos escribiendo historia.</p>
            </div>
        `;
    });
};

