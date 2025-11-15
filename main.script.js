"use strict";
const playButton = document.querySelector("#play");
const audio = document.getElementById("audio");



// 播放按钮
playButton.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

// 音频相关
audio.onloadstart = function () {
    document.querySelector("#loading").classList.remove("hidden");
};
audio.oncanplaythrough = function () {
    document.querySelector("#loading").classList.add("hidden");
};
audio.onplay = function () {
    playButton.classList.add("active");
};
audio.onpause = function () {
    playButton.classList.remove("active");
};

audio.addEventListener("timeupdate", function () {
    if (audio.currentTime >= 599) {
        audio.currentTime = 2;
    }
});

// Dark mode button
const darkModeBtn = document.getElementById("dark");

// Check if system dark mode is enabled
function checkSystemDarkMode() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

// Toggle dark mode
function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
    darkModeBtn.classList.toggle("active");
}

// Initialize dark mode based on system preference
if (checkSystemDarkMode()) {
    document.documentElement.classList.add("dark");
    darkModeBtn.classList.add("active");
}

// Listen for dark mode button clicks
darkModeBtn.addEventListener("click", toggleDarkMode);


const blankModeButton = document.getElementById("clean");
const blankModePage = document.getElementById("blankMode");
blankModeButton.addEventListener("click", () => {
    blankModePage.classList.remove("hidden");
    document.documentElement.requestFullscreen();
    setTimeout(() => {
        blankModePage.querySelector("p").style.opacity = "0";
    }, 1000);
});

blankModePage.addEventListener("click", () => {
    blankModePage.classList.add("hidden");
    document.exitFullscreen();
});









