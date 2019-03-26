

riot.compile(function() {

    /* ---------------------------------------------
     Mount Riot Tags
     --------------------------------------------- */
    riot.mount('preloader, header, footer');


    /* ---------------------------------------------
     Mount Nav Menu Tag
     --------------------------------------------- */
    riot.mount('nav-menu', { use_links: true });


    /* ---------------------------------------------
     Mount Top Section Tag
     --------------------------------------------- */
    riot.mount('top-section', { title: 'Blog' });


    /* ---------------------------------------------
     Mount Blog Section Tag
     --------------------------------------------- */
    riot.mount('main-section', 'blog-section', {
        posts: blog_posts,
        page: getQueryParameters().page || 1
    });


    /* ---------------------------------------------
     Initialize Custom JS
     --------------------------------------------- */
    initAll();

});
