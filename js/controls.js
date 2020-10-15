var video = document.querySelector("#video"),
	button = document.querySelector("#button");

button.addEventListener("click", function () {
	video.play()
	video.setAttribute("controls", "controls");
}, false);

$(".presentation__btn").click(function () {
	$(".presentation-box").addClass('presentation-box-hide');
})