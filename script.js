window.onload = function() {
    const boton = document.getElementById("startButton");
    const contenido = document.getElementById("mainContent");
    const historia = document.getElementById("historia");

    boton.addEventListener("click", function() {
        
        contenido.style.opacity = "0";

        setTimeout(function() {
            contenido.style.display = "none";
            historia.style.display = "block";
            historia.style.opacity = "0";
            historia.style.transition = "opacity 1s ease";

            setTimeout(function(){
                historia.style.opacity = "1";
            }, 100);
            
    }, 800);
        
  });
    
};
