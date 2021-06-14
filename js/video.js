var video = document.getElementById("player1");
var volume = video.volume
document.getElementById("volume").innerText = volume * 100 + "%"

// change the slider
var slider = document.getElementById("slider")
window.setInterval(changevolume, 1);

function changevolume() {
	video.volume = slider.value/100;
	document.getElementById("volume").innerText = slider.value + "%"
}

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
});

function play() {
	if (video.paused) {
		video.play();
	}
}

function pause() {
	if (!video.paused) {
		video.pause();
	}
}

function slower() {
	video.playbackRate *= 0.95;
	console.log(`New speed is ${video.playbackRate}`);
}

function faster() {
	video.playbackRate /= 0.95;
	console.log(`New speed is ${video.playbackRate}`);
}

function skip(value) {
	console.log(`Original location ${video.currentTime}`);
	video.currentTime += value;
	console.log(`New location ${video.currentTime}`);
}

function mute() {
	if (video.muted) {
		video.muted = false
		document.getElementById("mute").innerText = "mute"
	} else {
		video.muted = true
		document.getElementById("mute").innerText = "unmute"
	}
}

function printVolume() {
	console.log(document.getElementById("slider").value/100)
}

function oldStyle() {
	video.style.filter = "grayscale(100%)";
}

function orig() {
	video.style.filter = "none";
}