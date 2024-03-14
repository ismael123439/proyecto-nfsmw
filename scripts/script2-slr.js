document.addEventListener('DOMContentLoaded', function() {
    let imagen = document.getElementById('img-slr');
    let sonido = document.getElementById('sonido-slr');
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
