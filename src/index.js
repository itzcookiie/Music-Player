import "./styles.css";
import { SlowBuffer } from "buffer";

let playBtn = document.querySelector(".play-btn");
let pauseBtn = document.querySelector(".pause-btn");
let mediaBtn = document.querySelector(".media-btn");
let meter = document.querySelector(".meter");

let music = new Audio(
  "https://howlerjs.com/assets/howler.js/examples/player/audio/rave_digger.webm"
);

playBtn.addEventListener("click", () => {
  music.play();
});

pauseBtn.addEventListener("click", () => {
  music.pause();
});

mediaBtn.addEventListener("click", event => {
  meter.value = 0;
  music.load();
});

music.addEventListener("timeupdate", () => {
  meter.value = music.currentTime / music.duration;
});

meter.addEventListener("click", event => {
  meter.value = event.offsetX / event.target.clientWidth;
  music.currentTime = music.duration * meter.value;
});
