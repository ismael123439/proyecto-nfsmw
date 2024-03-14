document.addEventListener('DOMContentLoaded', function() {
    let imagen = document.getElementById('img-cayman');
    let sonido = document.getElementById('sonido-cayman');
    let sonidoActivo = false;

    function toggleSonido() {
        if (!sonidoActivo) {
            sonido.play();
            sonidoActivo = true;
        } else {
            sonido.pause();
            sonido.currentTime = 0;
            sonidoActivo = false;
        }
    }

    imagen.addEventListener('click', toggleSonido);
});
