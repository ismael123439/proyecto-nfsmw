// Obtener la imagen y el elemento de audio
const imagen = document.getElementById('imagen');
//const sonido = document.getElementById('sonido');
let sound = new Audio("./audio/m3gtrsound.mp3")

// Agregar un evento de mouseover a la imagen
imagen.addEventListener('mouseover', reproducirSonido);

// Función para reproducir el sonido
function reproducirSonido() {
    sound.play();
    console.log("sad")
}
