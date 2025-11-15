// main.script.js
var playButton = document.querySelector("#play");
var audio = document.getElementById("audio");
playButton.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
audio.onloadstart = function() {
  document.querySelector("#loading").classList.remove("hidden");
};
audio.oncanplaythrough = function() {
  document.querySelector("#loading").classList.add("hidden");
};
audio.onplay = function() {
  playButton.classList.add("active");
};
audio.onpause = function() {
  playButton.classList.remove("active");
};
audio.addEventListener("timeupdate", function() {
  if (audio.currentTime >= 599) {
    audio.currentTime = 2;
  }
});
var darkModeBtn = document.getElementById("dark");
function checkSystemDarkMode() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");
  darkModeBtn.classList.toggle("active");
}
if (checkSystemDarkMode()) {
  document.documentElement.classList.add("dark");
  darkModeBtn.classList.add("active");
}
darkModeBtn.addEventListener("click", toggleDarkMode);
var blankModeButton = document.getElementById("clean");
var blankModePage = document.getElementById("blankMode");
blankModeButton.addEventListener("click", () => {
  blankMode.classList.remove("hidden");
  document.documentElement.requestFullscreen();
  setTimeout(() => {
    blankMode.querySelector("#blankMode p").style.opacity = "0";
  }, "1000");
});
blankModePage.addEventListener("click", () => {
  blankMode.classList.add("hidden");
  document.exitFullscreen();
});
