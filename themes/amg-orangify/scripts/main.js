$(function(){
	// ------------------------------- | AMG
	// General
	// ------------------------------- |
	var overlay = $(".amg-overlay"),
		contacts = $(".amg-floating-contacts");

	// ------------------------------- | AMG
	// Set Thumbnail Images
	// ------------------------------- |
	var thumbnails = $("[data-image]");

	$.each(thumbnails, function(){
		var t = $(this),
			image = t.data("image");

		t.css("background-image","url(" + image + ")");
	});

	// ------------------------------- | AMG
	// Floating Contact Widget
	// ------------------------------- |
	$("html.no-touch .amg-floating-icon").on("mouseenter", function(){
		$(this).closest(".amg-floating-contact-wrap").addClass("hover");
	});
	$("html.no-touch .amg-floating-contact-wrap").on("mouseleave", function(){
		$(this).removeClass("hover");
	});
	$("html.touch .amg-floating-icon").on("click", function(){
		$(this).parent().toggleClass("hover");
	});

	// ------------------------------- | AMG
	// Mobile Navigation
	// ------------------------------- |
	$('#js-toggle').on('click', function(e) {
	  e.preventDefault();
	  $('.js-toggle').toggleClass('open');
	});

	// ------------------------------- | AMG
	// Sliders
	// ------------------------------- |
	var slider = $('#quote_slider').leanSlider({
			pauseTime: 6000,
			controlNav: '#quote-slider-control-nav'
		});

	// ------------------------------- | AMG
	// Rotating Skill Badges
	// ------------------------------- |
	var $badges = $(".amg-badge img");

	function rotateBadge(passedBadge, speed){
		var rotateSpeed = speed / 180,
			current = 0;

		function badgeRotation(passedBadge){
			current = (current == 90) ? 271 : current + 1;

			passedBadge.css({
				"-webkit-transform":"rotate3d(0,1,0," + current + "deg)",
				"-moz-transform":"rotate3d(0,1,0," + current + "deg)",
				"transform":"rotate3d(0,1,0," + current + "deg)"
			});

			if (current == 360) {
				clearInterval(rotateInterval);
				passedBadge.removeAttr('style').removeClass('spinning');
			}
		}

		var rotateInterval = setInterval(function(){badgeRotation(passedBadge)}, rotateSpeed);
	}

	$badges.mouseenter(function(){
		if ($(this).hasClass('spinning')) {
			return false;
		} else {
			rotateBadge($(this), 500);
			$(this).addClass('spinning');
		}
	});

	// ------------------------------- | AMG
	// Open Modals
	// ------------------------------- |
	$(".amg-modal-trigger").on("click", function(){
		var modal = $(this).attr("href");

		overlay
			.add(contacts)
			.add(modal)
		.addClass("open");
	});
	$(".amg-modal-closer").on("click", function(){
		var modal = $(this).attr("href");
		
		overlay
			.add(contacts)
			.add(modal)
		.removeClass("open");
	});

	var tablet_mq = window.matchMedia( "(min-width: 385px)" );
	if (tablet_mq.matches) {

	}

	// ------------------------------- | AMG
	// Thumbnail Fallback for Touch Devices
	// ------------------------------- |
	$("html.touch .amg-thumbnail").on("click", function(){
		$(this).toggleClass("hover");
	}).mouseleave(function(){
		$(this).removeClass("hover");
	});

	var tablet_mq = window.matchMedia( "(max-width: 768px)" );
	if (tablet_mq.matches) {
		
	}
})