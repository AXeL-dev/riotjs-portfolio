
/* ---------------------------------------------
 Mount Riot Tags (To know: riots mouting is synchronous)
 --------------------------------------------- */
riot.mount('preloader, header, footer');


/* ---------------------------------------------
 Mount Nav Menu Tag
 --------------------------------------------- */
riot.mount('nav-menu', { use_links: true });


/* ---------------------------------------------
 Mount Top Section Tag
 --------------------------------------------- */
riot.mount('top-section', { title: 'Portfolio' });


/* ---------------------------------------------
 Mount Portfolio Section Tag
 --------------------------------------------- */
riot.mount('main-section', 'portfolio-section', {
    filter_class: 'mgt-0 mgb-50'
});
