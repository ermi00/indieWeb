let botonReproducir = document.getElementById("botonReproducir");
let cancionDeFondo = new Audio("/assets/Bonetrousle.mp3");

function tocarCancion() {
  if (cancionDeFondo.paused) {
    cancionDeFondo.play();
    botonReproducir.innerHTML = "❚❚";
  } else{
    cancionDeFondo.pause();
    botonReproducir.innerHTML = "▶";
  }
}
