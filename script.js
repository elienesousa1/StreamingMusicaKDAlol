const nomeMusicas = document.getElementById("musicas");
const audio = document.getElementById("audio-musicas");
const botaoPlayPause = document.getElementById("play-pause");
const botaoProximaMusicas = document.getElementById("proximo");
const botaoMusicasAnterior = document.getElementById("anterior");

const quantidadeMusicas = 5;
let taTocando = false;
let musicas = 1;

function tocarFaixa() {
  botaoPlayPause.classList.remove("bi-play-circle-fill");
  botaoPlayPause.classList.add("bi-pause-circle-fill");
  audio.play();
  taTocando = true;
}

function pausarFaixa() {
  botaoPlayPause.classList.add("bi-play-circle-fill");
  botaoPlayPause.classList.remove("bi-pause-circle-fill");
  audio.pause();
  taTocando = false;
}

function tocarOuPausarFaixa() {
  if (taTocando === true) {
    pausarFaixa();
  } else {
    tocarFaixa();
  }
}

function musicasAnterior() {
  if (musicas === 1) {
    musicas = quantidadeMusicas;
  } else {
    musicas -= 1;
  }
  audio.src = "./assets/musicas/" + musicas + ".mp3";
  nomeMusicas.innerText = "Albúm KD/A" + musicas;
  tocarFaixa();
}

function proximaMusicas() {
  if (musicas < quantidadeMusicas) {
    musicas ++;
  } else {
    musicas = 1;
  }
  audio.src = "./assets/musicas/" + musicas + ".mp3";
  nomeMusicas.innerText = "Albúm KD/A " + musicas;
  tocarFaixa();
}

botaoPlayPause.addEventListener("click", tocarOuPausarFaixa);
botaoMusicasAnterior.addEventListener("click", musicasAnterior);
botaoProximaMusicas.addEventListener("click", proximaMusicas);
audio.addEventListener("ended", proximaMusicas);