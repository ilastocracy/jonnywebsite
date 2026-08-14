
const audio = document.getElementById("audio");
const playButton = document.getElementById("playButton");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

const progress = document.getElementById("progress");
const thumbnail = document.getElementById("thumbnail");
const songTitle = document.getElementById("songTitle");


// PLAYLIST

const songs = [
    {
        title: "2hollis - god",
        audio: "audio/god.mp3",
        thumbnail: "songthumbnails/2.png"
    },

    {
        title: "2hollis - trauma",
        audio: "audio/trauma.mp3",
        thumbnail: "songthumbnails/3.png"
    },

    {
        title: "2hollis - crush",
        audio: "audio/crush.mp3",
        thumbnail: "songthumbnails/4.png"
    }
];


// CURRENT SONG

let currentSong = 0;


// LOAD SONG

function loadSong(index) {

    const song = songs[index];

    audio.src = song.audio;
    thumbnail.src = song.thumbnail;
    songTitle.textContent = song.title;

    progress.value = 0;
}


// PLAY / PAUSE

playButton.addEventListener("click", () => {

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }

});


// PLAY BUTTON ICON

audio.addEventListener("play", () => {
    playButton.textContent = "❚❚";
});

audio.addEventListener("pause", () => {
    playButton.textContent = "▶";
});


// NEXT SONG

nextButton.addEventListener("click", () => {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(currentSong);
    audio.play();

});


// PREVIOUS SONG

previousButton.addEventListener("click", () => {

    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    loadSong(currentSong);
    audio.play();

});


// PROGRESS BAR

audio.addEventListener("timeupdate", () => {

    if (!audio.duration) return;

    progress.value =
        (audio.currentTime / audio.duration) * 100;

});


progress.addEventListener("input", () => {

    audio.currentTime =
        (progress.value / 100) * audio.duration;

});


// AUTOMATICALLY PLAY NEXT SONG

audio.addEventListener("ended", () => {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(currentSong);
    audio.play();

});


// LOAD FIRST SONG

loadSong(currentSong);
