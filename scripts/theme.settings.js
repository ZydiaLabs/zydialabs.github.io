(function ($) {
    'use strict';

    $(function() {
        $(' #work-preview > li ').each( function() { $(this).hoverdir(); } );
    });
    
    $('#banner').parallax({
        speed :	0.25
    });

    $('.parallax-content').parallax({
        speed :	0.25
    });

    $('#macbook-01').bxSlider({
        pause: 15000,
        slideWidth: 1200,
        minSlides: 1,
        maxSlides: 1,
        controls: false,
        auto: false
    });

    $('#iphone-01').bxSlider({
        slideWidth: 1200,
        minSlides: 1,
        maxSlides: 1,
        controls: false,
        auto: true,
        autoDelay: 500
    });

    $(window).load(function(){
	    $('#client-carousel').carouFredSel({
	        responsive: true,
	        width: '100%',
	        scroll: 2,
	        items: {
	            width: 300,
	            visible: {
	                min: 2,
	                max: 4
	            }
	        }
	    });
    });
})(jQuery);