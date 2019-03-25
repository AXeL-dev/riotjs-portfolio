(function($){
    'use-strict';



    /* ---------------------------------------------
     Initializing Functions Triggered On Window Load
     --------------------------------------------- */
    $(window).on('load', function(){
        initPreloaderFade();
    });


    /* ---------------------------------------------
     Initializing Functions Triggered On Window Resize
     --------------------------------------------- */
    $(window).on('resize', function(){
        initHeroHeight();
        initPortfolioResize();
    });


    /* ---------------------------------------------
     Initializing Functions Triggered On Window Scroll
     --------------------------------------------- */
    $(window).on('scroll', function(){
        initHeaderAnimation();
    });


    /* ---------------------------------------------
     Initializing All Functions When DOM Is Ready
     --------------------------------------------- */
    $(document).ready(function(){
        initParallax();
        initAnimateScroll();
        initMagnificPopup();
        initCarousel();
        initWowAnimation();
        initMiscellaneous();
    });


    /* ---------------------------------------------
     Preloader Fadeout
     --------------------------------------------- */
    function initPreloaderFade(){
        $('.preloader').fadeOut();
    }


    /* ---------------------------------------------
     Hero Height
     --------------------------------------------- */
    function initHeroHeight(){
        $('.hero-height').height($(window).height());
    }


    /* ---------------------------------------------
     Parallax Background
     --------------------------------------------- */
    function initParallax(){
        if(!device.tablet() && !device.mobile()){
            $('.parallax-section').each(function(){
                $('.parallax-section').parallaxScroll("50%", 0.3);
            });
            $('.parallax-layer').parallax();
        }
    }


    /* ---------------------------------------------
     Animate Scroll
     --------------------------------------------- */
    function initAnimateScroll(){
        $('.animatescroll-link').on('click', function(e){
            if ($(this).attr('href').match('^#')) {
                e.preventDefault();
            }
        });
    }


    /* ---------------------------------------------
     Header Animation
     --------------------------------------------- */
    function initHeaderAnimation(){
        var scroll_top = $(document).scrollTop();
        if(scroll_top >= 100){
            $('.header').removeClass('header-hidden');
            $('.header').addClass('header-visible');
        }else{
            $('.header').removeClass('header-visible');
            $('.header').addClass('header-hidden');
        }
    }


    /* ---------------------------------------------
     Magnific Popup Plugin
     --------------------------------------------- */
    function initMagnificPopup(){
        $('.portrait-mfp').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        $('.portfolio-mfp').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        $(".video-mfp").magnificPopup({
            type: 'iframe',
            gallery: {
                enabled: true
            }
        });
    }


    /* ---------------------------------------------
     Portfolio Resize
     --------------------------------------------- */
    function initPortfolioResize(){
        $('.portfolio-items').isotope({
            filter  : $('.filter').find('a.active').attr('data-filter'),
            animationOptions: {
                duration: 750,
                queue: false
            }
        });
        return false;
    }


    /* ---------------------------------------------
     All Carousels
     --------------------------------------------- */
    function initCarousel(){
        $('.client-carousel').owlCarousel({
            pagination: false,
            navigation: false,
            autoPlay: true,
            slideSpeed : 500,
            items : 5,
            itemsDesktop : [991,3],
            itemsDesktopSmall : [768,3]
        });

        $('.reference-carousel').owlCarousel({
            pagination: true,
            navigation: false,
            autoPlay: true,
            slideSpeed : 500,
            items : 1
        });
    }


    /* ---------------------------------------------
     Wow Animation
     --------------------------------------------- */
    function initWowAnimation(){
        var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 150,
                mobile: false,
                live: true
            }
        );
        wow.init();
    }


    /* ---------------------------------------------
     Miscellaneous
     --------------------------------------------- */
    function initMiscellaneous(){
        $('.single-blog-navigation').children('a').addClass('btn-custom waves-effect');
        $('.pagination').children('.page-numbers').addClass('btn-circle waves-effect waves-light');
    }


})(jQuery);
