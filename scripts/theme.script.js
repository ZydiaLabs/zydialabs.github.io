(function ($) {
    'use strict';
	
    var navistatus = 0;

    $(".scrollto").click(function(){
        var topoffset = 0;
        $('html, body').clearQueue().animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - topoffset
        }, 1800,'swing');
        return false;
    });

	function sizeBanner(){
		var windowHeight = $(window).height();
		$("#banner").css("height",windowHeight+"px");
	}
	$(window).resize(function(){
		sizeBanner()
	});

    var workWrapper = $("#work-wrapper");
    var workLoader  = $("#work-loader");
    var workContent = $("#load-work-content");

   	$("#close-work-wrapper").click(function(){
        workWrapper.slideUp(1000);
        $(".work-article").fadeOut(800);
   	});

    function doafterloadwork()
    {
        var workArticle = $(".work-article");

        workLoader.css("display","none");
        workWrapper.children(".close").fadeIn(800);
        workArticle.css("minHeight",windowheight+"px");
        workArticle.fadeIn(1000);
        workWrapper.css("height","auto");

        $('.work-slider').bxSlider({
            slideWidth: 1600,
            minSlides: 1,
            maxSlides: 1,
			video: true
        });
    }

    $(document).on('click', '#work-preview li a', function(){

        var folder  = 'work/',
            hash    = $(this).attr('data-work-link'),
            url     = hash.replace(/[#\#]/g, '' );

        if(workWrapper.is(":hidden"))
        {
            workWrapper.children(".close").hide();
            workLoader.css("display","block");
            workContent.html("");
            workWrapper.css("height",windowheight+"px");
            workWrapper.slideDown(1000);

            $('html, body').clearQueue().animate({
                scrollTop: workWrapper.offset().top
            },1400,function(){

                workContent.load(folder+url, function(){
                    doafterloadwork();
                });
            });
        } else {
            var getwrapperheight = workWrapper.height();
            workWrapper.css("height",getwrapperheight+"px");
            workWrapper.children(".close").fadeOut(800);
            $(".work-article").fadeOut(800);
            workLoader.delay(850).fadeIn();

            $('html, body').clearQueue().animate({
                scrollTop: workWrapper.offset().top
            },1800,function(){

                workContent.load(folder+url, function(){
                    doafterloadwork();
                });
            });
        }
    });

    var pfPreview = $( '#work-preview' );
    var pfTabs = $( '.work-tabs' );
    var pfMixed = 0;

    function startmixitup()
    {
        if ( pfTabs.length ) {
            var active = pfTabs.find( 'li.active' ).data( 'filter' );


            if ( pfPreview.length > 0 ) {
                if( pfMixed == 0) {
                    pfMixed = 1;
                    pfPreview.mixitup( {
                        targetSelector: '.mix',
                        filterSelector: '.filter',
                        showOnLoad  : active
                    } );
                } else {
                    pfPreview.mixitup( 'remix', active );
                }
            }
        }
    }

    startmixitup();

	$(".toggle-box .toggle .header").click(function(){
		if($(this).parent(".toggle").children(".content").is(":hidden"))
		{
            $(this).addClass("active");
			$(this).parent(".toggle").children(".content").slideDown();
			$(this).parent(".toggle").children(".header").children(".plus").css({ display: 'none' });
			$(this).parent(".toggle").children(".header").children(".minus").css({ display: 'inline-block' });
		} else {
            $(this).removeClass("active");
			$(this).parent(".toggle").children(".content").slideUp();
			$(this).parent(".toggle").children(".header").children(".plus").css({ display: 'inline-block' });
			$(this).parent(".toggle").children(".header").children(".minus").css({ display: 'none' });
		}
	});	

})(jQuery);