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
        initSectionHighlight();
        initImageBackground();
        initAnimateScroll();
        initMagnificPopup();
        initMasonry();
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
     Section Highlighting
     --------------------------------------------- */
    function initSectionHighlight(){
        $('section').each(function(){
            $(this).waypoint(function(direction){
                if(direction === 'down'){
                    var sec_id = $(this).attr('id');
                    var current_section_link = '.' + sec_id + '-nav';
                    $('.main-nav > ul > li > a').removeClass('active-nav');
                    $(current_section_link).addClass('active-nav');
                }
            } , {offset: '130px'});
            $(this).waypoint(function(direction){
                if(direction === 'up'){
                    var sec_id = $(this).attr('id');
                    var current_section_link = '.' + sec_id + '-nav';
                    $('.main-nav > ul > li > a').removeClass('active-nav');
                    $(current_section_link).addClass('active-nav');
                }
            } , {offset: function(){return -$(this).height() + 130;}});
        });
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
     Image Background
     --------------------------------------------- */
    function initImageBackground(){
        $(".image-bg").each(function(){
            if($(this).attr("data-image-bg")){
                $(this).css({
                    "background": "url(" + $(this).data("image-bg") + ")",
                    'background-position': 'center top',
                    'background-repeat': 'no-repeat',
                    'background-size': 'cover'
                });
            }
        });
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
     Masonry
     --------------------------------------------- */
    function initMasonry(){
        $(".masonry").imagesLoaded(function(){
            $(".masonry").masonry();
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
        $('#wp-calendar').children('a').addClass('waves-effect waves-light');
        $('.pagination').children('.page-numbers').addClass('btn-circle waves-effect waves-light');
    }


})(jQuery);
