

riot.compile(function() {

    /* ---------------------------------------------
     Mount Riot Tags
     --------------------------------------------- */
    riot.mount('preloader, header, top-section, footer');


    /* ---------------------------------------------
     Mount Nav Menu Tag
     --------------------------------------------- */
    riot.mount('nav-menu', { use_links: true });


    /* ---------------------------------------------
     Get Post ID
     --------------------------------------------- */
    var post_id = getQueryParameters().id || 1;


    /* ---------------------------------------------
     Mount Post Section Tag
     --------------------------------------------- */
    riot.mount('main-section', 'post-section', {
        post: blog_posts.find(p => p.id == post_id)
    });


    /* ---------------------------------------------
     Initialize Custom JS
     --------------------------------------------- */
    initAll();

});
