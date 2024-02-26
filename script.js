"use strict";
const music = document.querySelector("audio");
const dickAnimation = document.getElementById("dick");
const preBtn = document.getElementById("previous");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const pauseBtn = document.getElementById("pause");
const image = document.querySelector("img");
const artistName = document.getElementById("artistName");
const musicName = document.getElementById("songName");
// -----------------------------------------------------

const progressBar = document.getElementById("progressBar");
const progress = document.getElementById("progress");
// -----------------------------------------------------
const currentTimeEl = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");

const songs = [
  { song: "song1", songName: "Dost Dram Zendegiro", artist: "Sirvan khosravi" },
  {
    song: "song2",
    songName: "To Nazdiki",
    artist: "Behnam Safavi & Farzad Farzin & Ali Ashabi",
  },
  { song: "song3", songName: "All Night", artist: "Emrah Karaduman" },
  { song: "song4", songName: "Faseleh Na", artist: "Hoorash Band" },
  { song: "song5", songName: "Baz Amadi", artist: "Madina Aknazarova" },
];

let play = false;

// play
function playMusic() {
  play = true;
  music.play();
  pauseBtn.classList.remove("hidden");
  playBtn.classList.add("hidden");
  dickAnimation.classList.add("dick-Animation");
}

// pause
function pauseMusic() {
  play = false;
  music.pause();
  playBtn.classList.remove("hidden");
  pauseBtn.classList.add("hidden");
  dickAnimation.classList.remove("dick-Animation");
}
// play button
playBtn.addEventListener("click", () => (play ? pauseMusic() : playMusic()));
// pause button
pauseBtn.addEventListener("click", () => {
  pauseMusic();
});

let songIndex = 0;
// load a song
function loadMusic(index) {
  musicName.textContent = songs[index].songName;
  artistName.textContent = songs[index].artist;
  music.src = `Musics/song-${index}.mp3`;
  image.src = `Images/image-${index}.jpg`;
}

// to load songs

// Next button
nextBtn.addEventListener("click", () => {
  songIndex++;
  if (songIndex > songs.length) {
    songIndex = 0;
  }
  loadMusic(songIndex);
  playMusic();
});

// previous button
preBtn.addEventListener("click", () => {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadMusic(songIndex);
  playMusic();
});
window.addEventListener("DOMContentLoaded", () => {
  loadMusic(songIndex);
});

// ----------------------------------------------
//Update Progress Bar & Time
function updateProgressBar(e) {
  // currenttime & duration is important event
  if (play) {
    const { duration, currentTime } = e.srcElement;
    //  updating progress with
    const withInPercentage = (currentTime / duration) * 100;
    progress.style.width = `${withInPercentage}%`;
    const totalMinutes = Math.floor(duration / 60);
    const totalSeconds = Math.floor(duration % 60);
    if (totalSeconds < 10) {
      totalSeconds = `0${totalSeconds}`;
    }
    //  to avoid NAN
    if (totalSeconds) {
      totalTime.textContent = `${totalMinutes}:${totalSeconds}`;
    }

    // current time counter
    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60);
    // if (currentSeconds < 10) {
    //   currentSeconds = `0${currentSeconds}`;
    // }
    //  to avoid NAN
    if (currentSeconds) {
      currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
    }
  }
}

// progress bar section
progressBar.addEventListener("click", (e) => {
  if (play) {
    const width = progressBar.offsetWidth;
    const offset = e.offsetX;
    const duration = music.duration;
    music.currentTime = (offset / width) * duration;
  }
});
