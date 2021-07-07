(function ($) {
"use strict";

$('.mobo-bar').click(function(event) {
	$('.offcanvas-menu').addClass('active');
});
$('.close-menu').click(function(event) {
	$('.offcanvas-menu').removeClass('active');
});





$('.overlay').click(function(event) {
	$('.header_bottom, .overlay').removeClass('active');
});

// banner_slider
$('.banner_slider_active').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="fal fa-angle-left"></i>','<i class="fal fa-angle-right"></i>'],
    nav:true,
	dots:false,
});


// pertnars_store
$('.pertnes_slider_active').owlCarousel({
    loop:false,
    margin:0,
	center:false,
	items:4,
	navText:['<i class="fal fa-angle-left"></i>','<i class="fal fa-angle-right"></i>'],
    nav:false,
	dots:false,
    responsive:{
        0:{
            items:2,
			center:true,
			margin:15,
			loop:true
        },
        767:{
            items:2,
			center:true,
			margin:30,
			loop:true
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
});

// our history
$('.history-slider-active').owlCarousel({
    loop:false,
    margin:20,
	items:4,
	navText:['<i class="fal fa-angle-left"></i>','<i class="fal fa-angle-right"></i>'],
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:2
        },
        767:{
            items:3
        },
        992:{
            items:3
        },
        1501:{
            items:4
        }
    }
});


// our visit
$('.visit-store-slider-active').owlCarousel({
    loop:false,
    margin:15,
	items:4,
	navText:['<i class="fal fa-angle-left"></i>','<i class="fal fa-angle-right"></i>'],
    nav:true,
	dots:true,
	autoplay:true,
    responsive:{
        0:{
            items:2,
			nav: false
        },
        767:{
            items:3
        },
        992:{
            items:5
        },
        1501:{
            items:6
        }
    }
});

	//resize window js 
  
  
	$(window).bind("resize", function () {
		//get window width
			var widths = $(this).width();
			if(widths <= 991) {
				$('.p_list-slider-active').addClass('owl-carousel');
				// our visit
				$('.p_list-slider-active').owlCarousel({
					loop:false,
					margin:20,
					items:2,
					navText:['<i class="fal fa-angle-left"></i>','<i class="fal fa-angle-right"></i>'],
					nav:false,
					dots:false,
				});
			}else{
				$('.p_list-slider-active').removeClass('owl-carousel');
			}
	}).trigger('resize');





	$('.our-clients-logo').slick({
		speed: 3000,
		autoplay: true,
		autoplaySpeed: 0,
		centerMode: false,
		cssEase: 'linear',
		slidesToShow: 1,
		loop:true,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: true,
		initialSlide: 1,
		arrows: false,
		buttons: false,
		pauseOnFocus: true,
		pauseOnHover: true
	});
	




// testimonial
$('.testimonial_wrapper').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="fal fa-angle-left"></i>','<i class="fal fa-angle-right"></i>'],
    nav:true,
	dots:false,
});

$('.product-slider-wrapper').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: false,
	adaptiveHeight: true,
	infinite: false,
   	useTransform: true,
	speed: 400,
	cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

// product-details slider
$('.product-nav-slider')
.on('init', function(event, slick) {
	$('.product-nav-slider .slick-slide.slick-current').addClass('is-active');
})
.slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
	dots: false,
	focusOnSelect: false,
	infinite: false,
	responsive: [{
		breakpoint: 1024,
		settings: {
			slidesToShow: 5,
			slidesToScroll: 5,
		}
	}, {
		breakpoint: 640,
		settings: {
			slidesToShow: 4,
			slidesToScroll: 4,
	   }
	}, {
		breakpoint: 420,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
   }
	}]
});

$('.product-slider-wrapper').on('afterChange', function(event, slick, currentSlide) {
	$('.product-nav-slider').slick('slickGoTo', currentSlide);
	var currrentNavSlideElem = '.product-nav-slider .slick-slide[data-slick-index="' + currentSlide + '"]';
	$('.product-nav-slider .slick-slide.is-active').removeClass('is-active');
	$(currrentNavSlideElem).addClass('is-active');
});

$('.product-nav-slider').on('click', '.slick-slide', function(event) {
	event.preventDefault();
	var goToSingleSlide = $(this).data('slick-index');

	$('.product-slider-wrapper').slick('slickGoTo', goToSingleSlide);
});


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});







})(jQuery);