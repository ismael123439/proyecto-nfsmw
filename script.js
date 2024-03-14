document.addEventListener('DOMContentLoaded', function() {

    var imagen = document.getElementById('imagen-m3gtr');
    var sonido = document.getElementById('sonido-m3gtr');

    function reproducirSonido() {
        sonido.play();
    }

    imagen.addEventListener('click', reproducirSonido);
});
