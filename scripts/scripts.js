/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
$(document).ready(function () {
	animateDiv(".a");
	animateDiv(".b");
	animateDiv(".c");
	animateDiv(".d");
    animateDiv(".e");
	animateDiv(".f");
	animateDiv(".g");
	animateDiv(".h");
});

function makeNewPosition() {
	// Get viewport dimensions (remove the dimension of the div)
	var h = $(window).height() - 50;
	var w = $(window).width() - 50;

	var nh = Math.floor(Math.random() * h);
	var nw = Math.floor(Math.random() * w);

	return [nh, nw];
}

function animateDiv(myclass) {
	var newq = makeNewPosition();
	$(myclass).animate({ top: newq[0], left: newq[1] }, 9000, function () {
		animateDiv(myclass);
	});
}
