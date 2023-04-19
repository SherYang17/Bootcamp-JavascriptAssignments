let play = document.getElementById("play");
let playTwo = document.getElementById("playTwo");
let playThree = document.getElementById("playThree");

function playMusic() {
    let audio = new Audio("takemyhand.mp3");
    audio.play()
}

function playMusicTwo() {
    let audio = new Audio("rockiscooking.mp3");
    audio.play()
}

function playMusicThree() {
    let audio = new Audio("scissor.mp3");
    audio.play()
}

play.addEventListener("click", playMusic);
playTwo.addEventListener("click", playMusicTwo);
playThree.addEventListener("click", playMusicThree);


// https://www.youtube.com/watch?v=3xlws5og44U

