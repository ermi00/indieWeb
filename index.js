let contador = 0;
let pistasDeAudio = [
  "/assets/Bonetrousle.mp3",
  "/assets/megalovaniaSongFinal.mp3",
  "/assets/Hot-Head Bop.mp3",
  "/assets/Snakey Chantey.mp3",
  "/assets/Steel Drum Rhumba.mp3",
];

let botonReproducir = document.getElementById("botonReproducir");
let cancionDeFondo = new Audio(pistasDeAudio[0]);

function tocarCancion() {
  if (cancionDeFondo.paused) {
    cancionDeFondo.play();
    botonReproducir.innerHTML = "❚❚";
  } else {
    cancionDeFondo.pause();
    botonReproducir.innerHTML = "▶";
  }
}

function siguienteCancion() {
  if (cancionDeFondo && !cancionDeFondo.paused) {
    cancionDeFondo.pause();
    cancionDeFondo.currentTime = 0;
  }

  contador++;
  let contadorActual = contador;
  console.log(contadorActual);
  cancionDeFondo = new Audio(pistasDeAudio[contadorActual]);
  cancionDeFondo.play();
  botonReproducir.innerHTML = "❚❚";

  if (contador == 5) {
    contador = 0;
    cancionDeFondo.pause();
    console.log("Resetear canciones")
    cancionDeFondo = new Audio(pistasDeAudio[contador]);
    tocarCancion();
  }
}

function anteriorCancion() {
  if (cancionDeFondo && !cancionDeFondo.paused) {
    cancionDeFondo.pause();
    cancionDeFondo.currentTime = 0;
  }

  contador--;
  let contadorActual = contador;
  console.log(contadorActual);
  cancionDeFondo = new Audio(pistasDeAudio[contadorActual]);
  cancionDeFondo.play();
}
