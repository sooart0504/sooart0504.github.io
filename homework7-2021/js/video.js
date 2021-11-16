var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%"
	console.log(video.currentTime);
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Old video speed is " + video.playbackRate);
	video.playbackRate += -0.05;
	console.log("New video speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Old video speed is " + video.playbackRate);
	video.playbackRate += 0.05;
	console.log("New video speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.ended){
		video.currentTime = 0;
		console.log("Video has ended. Press start again!");
		// video.play();
	}
	else {
		video.currentTime += 15;
		console.log("Video is skipped to " + video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false){
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Video muted");
	}
	else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Video unmuted");
	}
});

document.querySelector("#slider").addEventListener("change", function(x) {
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%"
	console.log("New video volume is " + video.volume);
});


document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
		console.log("Video is now Vintage style!");
});

document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
		console.log("Video is now Original style!");
});