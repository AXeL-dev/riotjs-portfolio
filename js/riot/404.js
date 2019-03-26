

riot.compile(function() {

    /* ---------------------------------------------
     Mount Riot Tags
     --------------------------------------------- */
    riot.mount('header, footer');


    /* ---------------------------------------------
     Mount Nav Menu Tag
     --------------------------------------------- */
    riot.mount('nav-menu', { use_links: true });


    /* ---------------------------------------------
     Mount Top Section Tag
     --------------------------------------------- */
    riot.mount('top-section', { title: '404' });


    /* ---------------------------------------------
     Mount Error Section Tag
     --------------------------------------------- */
    riot.mount('main-section', 'error-section', {
        message: 'Page not found'
    });


    /* ---------------------------------------------
     Initialize Custom JS
     --------------------------------------------- */
    initAll();

});
