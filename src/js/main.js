
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

	$("#modal-content-1").fancybox({
		fitToView: false,
		autoWidth: false,
		autoSize: false,
		helpers: {
			title: {
				type: 'inside',
				position: 'top'
			},
			css: {
				'background': 'rgba(0, 0, 0, 0.58)'
			}
		},
		// tpl: {
		// 	next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"></a>',
		// 	prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"></a>'
		// },
		beforeLoad: function () {
			this.title = $(this.element).find('span').html();
		},
		afterShow: function () {

			// $('.h__slider-win').refresh();
			// $('.h__slider-control').refresh();

			$('#modal-slider-1').not('.slick-initialized').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				dots: false,
				infinite: true,
				centerMode: false,
				prevArrow: '<button class="slick-prev"></button>',
				nextArrow: '<button class="slick-next"></button>'
			});
		}
	});

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