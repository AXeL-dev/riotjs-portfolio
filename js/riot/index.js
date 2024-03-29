

riot.compile(function() {

    /* ---------------------------------------------
     Mount Riot Tags
     --------------------------------------------- */
    riot.mount('header, nav-menu, top-section, about-section, skill-section, footer');


    /* ---------------------------------------------
     Mount Technology Section Using Client Section Tag
     --------------------------------------------- */
    riot.mount('technology-section', 'client-section', {
        title: 'Tools & Technologies',
        clients: [
            //{ name: 'HTML', image: 'img/tech/html.png' },
            //{ name: 'CSS', image: 'img/tech/css.png' },
            { name: 'Bootstrap', image: 'img/tech/bootstrap.png' },
            { name: 'Semantic UI', image: 'img/tech/semantic-ui.png' },
            { name: 'Sass', image: 'img/tech/sass.png' },
            { name: 'Jekyll', image: 'img/tech/jekyll.png' },
            //{ name: 'PHP', image: 'img/tech/php.png' },
            { name: 'Symfony', image: 'img/tech/symfony.png' },
            { name: 'CodeIgniter', image: 'img/tech/codeigniter.png' },
            { name: 'Wordpress', image: 'img/tech/wordpress.png' },
            { name: 'Drupal', image: 'img/tech/drupal.png' },
            { name: 'MySQL', image: 'img/tech/mysql.png' },
            { name: 'mongoDB', image: 'img/tech/mongodb.png' },
            //{ name: 'Javascript', image: 'img/tech/js.png' },
            { name: 'jQuery', image: 'img/tech/jquery.png' },
            { name: 'Ajax', image: 'img/tech/ajax.png' },
            { name: 'TypeScript', image: 'img/tech/ts.png' },
            { name: 'AngularJS', image: 'img/tech/angular.png' },
            { name: 'Vue.js', image: 'img/tech/vue.png' },
            { name: 'Riot JS', image: 'img/tech/riot.png' },
            { name: '.Net', image: 'img/tech/dotnet.png' },
            { name: 'SQL Server', image: 'img/tech/sql-server.png' },
            { name: 'Docker', image: 'img/tech/docker.png' },
            { name: 'Qt Framework', image: 'img/tech/qt.png' },
            { name: 'GTK', image: 'img/tech/gtk.png' },
            { name: 'Android', image: 'img/tech/android.png' },
            { name: 'Electron', image: 'img/tech/electron.png' },
            { name: 'Trello', image: 'img/tech/trello.png' },
            { name: 'Git', image: 'img/tech/git.png' },
            { name: 'NPM', image: 'img/tech/npm.png' }
        ]
    });


    /* ---------------------------------------------
     Mount Education Section Using Timeline Section Tag
     --------------------------------------------- */
    riot.mount('education-section', 'timeline-section', {
        title: 'Education',
        items: [
            {
                tag: 'University of Science and Technology Settat',
                title: 'Professional license in application design and development',
                period: '2015 - 2016'
            },
            {
                tag: 'ISTA NTIC Hay Salam Sale',
                title: 'Software development specialized technician',
                period: '2013 - 2015',
                position: 'right'
            },
            {
                tag: 'University of Rabat',
                title: '1st year in physics-chemistry branch',
                period: '2012 - 2013'
            },
            {
                tag: 'Abderrahim Bouabid High School',
                title: 'Bachelor\'s degree in physics',
                period: '2009 - 2012',
                position: 'right'
            }
        ]
    });


    /* ---------------------------------------------
     Mount Experience Section Using Timeline Section Tag
     --------------------------------------------- */
    riot.mount('experience-section', 'timeline-section', {
        title: 'Experience',
        items: [
            {
                tag: 'Blue Mango Software',
                title: 'Analyst/Programmer',
                description: [
                    '✔ Customizing open-source projects such as: Dolibarr, osTicket, Alfresco, VICIdial.',
                    '✔ Creating websites, dashboards & plugins using technologies like Wordpress, AngularJS, PHP, Javascript ...',
                    '✔ Documenting projects using <a href="https://docsify.js.org/" target="_blank">docsify</a>.',
                    '✔ Setting up an OpenLDAP server to centralise third parties data.',
                    '✔ Doing server administration & backup stuff (ssh, ftp, vnc).'
                ],
                period: 'April 2019 - July 2019'
            },
            {
                tag: 'Freelance',
                title: 'Freelancer',
                description: [
                    '✔ Developing custom <a href="https://www.dolistore.com/en/search?orderby=position&orderway=desc&search_query=axel" target="_blank">modules</a> for Dolibarr.',
                    '✔ Publishing some of my own projects like <a href="https://github.com/AXeL-dev/Dindo-Bot" target="_blank">Dindo Bot</a>, <a href="https://github.com/AXeL-dev/distract-me-not" target="_blank">Distract Me Not</a>, <a href="https://github.com/AXeL-dev/dolibase" target="_blank">Dolibase</a>, <a href="https://github.com/AXeL-dev/riot-presents" target="_blank">Riot Presents</a>.',
                    '✔ Contributing to open-source community. <a href="https://github.com/Jessewb786/Silaty/graphs/contributors" target="_blank">#Silaty</a> <a href="https://github.com/Dolibarr/dolibarr/graphs/contributors" target="_blank">#Dolibarr</a>',
                    '✔ Learning & discovering new technologies, design patterns, best code practices.'
                ],
                period: '2017 - present',
                position: 'right'
            },
            {
                tag: 'NAMYR Communication',
                title: 'Full Stack Developer',
                description: [
                    '✔ Creation of an e-commerce website using the CodeIgniter PHP framework.',
                    '✔ Web scraping data for analysis purpose using <a href="http://casperjs.org/" target="_blank">CasperJS</a>.'
                ],
                period: 'October 2017 - November 2017'
            },
            {
                tag: 'Kenitra Negoce Technology',
                title: 'Software Developer',
                description: [
                    '✔ Bug fixes and modules development on SaturnERP (a copy of Dolibarr ERP).',
                    '✔ Redesigning the graphical interface of the cloning tool CLONEWise (based on FOG Project).',
                    '✔ Using tools like <a href="https://www.atlassian.com/software/jira" target="_blank">Jira</a> for tasks management & <a href="https://git-scm.com/" target="_blank">git</a> for source code commits.',
                    '✔ Administering servers/virtual machines using ssh & VMware.'
                ],
                period: 'February 2016 - June 2016',
                position: 'right'
            },
            {
                tag: 'ZTE CORPORATION',
                title: 'Traineeship',
                description: [
                    'Creating a web application in PHP to simplify script generation and execution from Excel sheets.'
                ],
                period: 'February 2015 - April 2015'
            }
        ]
    });


    /* ---------------------------------------------
     Mount Portfolio Section Tag
     --------------------------------------------- */
    riot.mount('portfolio-section', {
        title: 'Portfolio',
        filters: [
            { name: 'Python', filter: '.python' },
            { name: 'PHP', filter: '.php' },
            { name: 'Javascript', filter: '.js' },
            { name: 'ASP.Net', filter: '.asp' }
        ],
        max: 9
    });


    /* ---------------------------------------------
     Mount Blog Section Tag
     --------------------------------------------- */
    riot.mount('blog-section', {
        title: 'Blog',
        posts: blog_posts,
        max: 4
    });


    /* ---------------------------------------------
     Initialize Custom JS
     --------------------------------------------- */
    initAll();

});
