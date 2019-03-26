

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
    var query_params = {};
    location.search.substr(1).split('&').forEach(function(item) {
        query_params[item.split('=')[0]] = item.split('=')[1];
    });
    var post_id = query_params.id || 1;


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
