(function($){
    'use-strict';


    /* ---------------------------------------------
     Initializing Functions Triggered On Window Load
     --------------------------------------------- */
    $(window).on('load', function(){
        console.log('window loaded');
        $(document).ready(function () {
            console.log('document is ready');
            initPreloaderFade();
        });
    });


    /* ---------------------------------------------
     Initializing Functions Triggered On Window Resize
     --------------------------------------------- */
    $(window).on('resize', function(){
        //console.log('window resized');
        initHeroHeight();
        initPortfolioResize();
    });


    /* ---------------------------------------------
     Initializing Functions Triggered On Window Scroll
     --------------------------------------------- */
    $(window).on('scroll', function(){
        //console.log('window scrolled');
        initHeaderAnimation();
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


})(jQuery);
