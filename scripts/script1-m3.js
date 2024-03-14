document.addEventListener('DOMContentLoaded', function() {
    let imagen = document.getElementById('imagen-m3gtr');
    let sonido = document.getElementById('sonido-m3gtr');
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
