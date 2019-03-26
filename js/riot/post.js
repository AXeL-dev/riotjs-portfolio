

riot.compile(function() {

    /* ---------------------------------------------
     Mount Riot Tags
     --------------------------------------------- */
    riot.mount('header, top-section, footer');


    /* ---------------------------------------------
     Mount Nav Menu Tag
     --------------------------------------------- */
    riot.mount('nav-menu', { use_links: true });


    /* ---------------------------------------------
     Mount Post Section Tag
     --------------------------------------------- */
    riot.mount('main-section', 'post-section', {
        post: blog_posts.find(p => p.id == getQueryParameters().id),
        disqus: {
            page_url: 'https://axel-dev.github.io/portfolio',
            site_name: 'axel-dev'
        }
    });


    /* ---------------------------------------------
     Initialize Custom JS
     --------------------------------------------- */
    initAll();

});
