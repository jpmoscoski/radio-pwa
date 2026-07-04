const radio = document.getElementById("radio");
const button = document.getElementById("playButton");
const song = document.getElementById("song");

let playing = false;

button.addEventListener("click", () => {

    if (!playing){

        radio.play();

        button.innerHTML = "⏸ Pausar";

        song.innerHTML = "JP HITS • Ao Vivo";

    } else {

        radio.pause();

        button.innerHTML = "▶ Ouvir Agora";

        song.innerHTML = "Parado";

    }

    playing = !playing;

});
if("serviceWorker" in navigator){

navigator.serviceWorker.register("service-worker.js");

}