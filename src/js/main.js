
//= partials/jquery.min.js
//= partials/slick.min.js
//= partials/jquery.fancybox.min.js


$(document).ready(function () {
	// slick-carousel
	$(".project-slider").slick({
		slideToShow: 1,
		slideToScroll: 1,
		infinite: true,
		prevArrow: '<button class="arrow-left"></button>',
		nextArrow: '<button class="arrow-right"></button>'
	});

	// modal-sliders

	// var instance = $.fancybox.open(
	// 	$('.modal-slider-1').slick({
	// 		slideToShow: 1,
	// 		slideToScroll: 1,
	// 		infinite: true
	// 	})
	// );

	// header list-phone
	$(".info-block__phone-current").on("click", function () {
		$(".info-list").toggleClass("info-list_active");
	});
	// burger and header-menu
	$(".burger").on("click", function(e) {
		e.preventDefault();
		$(".burger-link").toggleClass("burger-link_active");
		$(".header__menu").toggleClass("header__menu_active");
	});
	// first-project house 
	$('[data-fancybox="gallery"]').fancybox({
		// Options will go here
		slideShow  : true,
		fullScreen : true,
		thumbs     : true,
		closeBtn   : true,
		loop       : true
	});
	
	$('[data-fancybox="gallery-1"]').fancybox({
		// Options will go here
		slideShow  : true,
		fullScreen : true,
		thumbs     : true,
		closeBtn   : true,
		loop       : true
	});

	$('[data-fancybox="gallery-2"]').fancybox({
		// Options will go here
		slideShow  : true,
		fullScreen : true,
		thumbs     : true,
		closeBtn   : true,
		loop       : true
	});

	
	$('[data-fancybox="gallery-3"]').fancybox({
		// Options will go here
		slideShow  : true,
		fullScreen : true,
		thumbs     : true,
		closeBtn   : true,
		loop       : true
	});

	$('[data-fancybox="gallery-4"]').fancybox({
		// Options will go here
		slideShow  : true,
		fullScreen : true,
		thumbs     : true,
		closeBtn   : true,
		loop       : true
	});

	$('[data-fancybox="gallery-5"]').fancybox({
		// Options will go here
		slideShow  : true,
		fullScreen : true,
		thumbs     : true,
		closeBtn   : true,
		loop       : true
	});

	$('[data-fancybox="gallery-6"]').fancybox({
		// Options will go here
		slideShow  : true,
		fullScreen : true,
		thumbs     : true,
		closeBtn   : true,
		loop       : true
	});

	$('[data-fancybox="gallery-7"]').fancybox({
		// Options will go here
		slideShow  : true,
		fullScreen : true,
		thumbs     : true,
		closeBtn   : true,
		loop       : true
	});

	$('[data-fancybox="gallery-8"]').fancybox({
		// Options will go here
		slideShow  : true,
		fullScreen : true,
		thumbs     : true,
		closeBtn   : true,
		loop       : true
	});

});