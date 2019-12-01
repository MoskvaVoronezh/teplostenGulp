
//= partials/jquery.min.js
//= partials/slick.min.js
//= partials/jquery.fancybox.min.js
//= partials/jquery.validate.js
//= partials/calculator.js

$(document).ready(function () {
	// slick-carousel
	$(".project-slider").slick({
		slideToShow: 1,
		slideToScroll: 1,
		infinite: true,
		prevArrow: '<button class="arrow-left"></button>',
		nextArrow: '<button class="arrow-right"></button>'
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

	$('.link-modal').fancybox({
		type: 'inline',
		// afterLoad: function () {
		// 	$("#main-form").validate({
		// 		rules: {
		// 			user_name: {
		// 				required: true,
		// 			},
		// 			user_email: {
		// 				required: true,
		// 				email: true
		// 			},
		// 			user_phone: {
		// 				required: true,
		// 			},
		// 		},
		// 		messages: {
		// 			user_name: {
		// 				required: "Это поле обязательно для заполнения",
		// 			},
		// 			user_email: {
		// 				required: "Это поле обязательно для заполнения",
		// 			},
		// 			user_phone: {
		// 				required: "Это поле обязательно для заполнения",
		// 			},
		// 		}
		// 	});
		// }
			
	});

	

	$('#main-form').submit(function (e) {
		e.preventDefault();
	}).validate({
		// ignore: ".ignore",
		rules: {
			user_name: {
				required: true,
			},
			user_email: {
				required: true,
				email: true
			},
			user_phone: {
				required: true,
			},
		},
		messages: {
			user_name: {
				required: "Это поле обязательно для заполнения",
			},
			user_email: {
				required: "Это поле обязательно для заполнения",
				email: "Ваш email должен содержать @"
			},
			user_phone: {
				required: "Это поле обязательно для заполнения",
			},
		},
		submitHandler: function(form) {
			$.ajax({
				type: 'POST',
				url: "mail.php",
				data: $("#main-form").serialize()
			}).done(function () {
				console.log('success');	
				parent.$.fancybox.close();	
			}).fail(function () {
				console.log('error');
	
			});
			return false;
		}
	});
		
});


