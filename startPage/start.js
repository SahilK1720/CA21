function submit(){
    const username = document.getElementById("uname").value;
    const nickname = document.getElementById("nname").value;

    var userDetails = {
        username: username,
        nickname: nickname
    };

    localStorage.setItem("userDetails", JSON.stringify(userDetails));    
};

const backgroundSound = new Audio("../assets/audio/solitaire.mp3");
window.onload = function(){
	backgroundSound.pause();
	backgroundSound.currentTime = 0;
	backgroundSound.loop = true;
	backgroundSound.play();
}
