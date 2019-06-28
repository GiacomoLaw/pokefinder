$(document).ready(function () {
	var offset = 300;
	var animating = false;
	var backToTop = $('.back-to-top');

	$(window).scroll(function () {
		if ($(this).scrollTop() > offset) {
			if (!animating) {
				backToTop.fadeIn();
			}
		} else {
			if (!animating) {
				backToTop.fadeOut();
			}
		}
	});

	backToTop.click(function () {
		animating = true;
		$('body,html').animate({
			scrollTop: 0
		}, 500, function () {
			animating = false;
			backToTop.fadeOut();
		});
	});
});
