document.addEventListener('DOMContentLoaded', function() {
    let imagen = document.getElementById('img-db9');
    let sonido = document.getElementById('sonido-db9');
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
