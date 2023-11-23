document.getElementById("proceed-button").addEventListener("click", function(e) {
    location.href = "../gamePage/game.html";
} );

document.getElementById("back").addEventListener("click", function(e) {
    location.href = "../index.html";
} );

const backgroundSound = new Audio("../assets/audio/solitaire.mp3");
window.onload = function(){
	backgroundSound.pause();
	backgroundSound.currentTime = 0;
	backgroundSound.loop = true;
	backgroundSound.play();
}