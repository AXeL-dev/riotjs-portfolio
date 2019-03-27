
var blog_posts = [
    {
        id: 6,
        title: 'Magento CMS: Presentation',
        date: 'March 27, 2019',
        author: 'AXeL',
        image: 'img/posts/magento.jpg',
        text: `
        <p>
            <a href="https://magento.com/" target="_blank">Magento</a> is a platform that allows you to control your online retail store by offering multiple features that enhance the quality of your site, accessibility for users, and provide great SEO benefits. Magento CMS is one of the most widely used CMS among the top-rated eCommerce brands.
        </p>
        <div class="center-align">
            <img src="img/posts/magento-cms-1.png" alt="Magento" />
        </div>
        <p class="mgt-10">
            <p class="bold-text">How does Magento differ from other CMS?</p>
            <p class="mgt-10">You may wonder in a world where the eCommerce market is quite competitive, not everyone settles on Magento CMS. Some people prefer other CMS such as Prestashop. What is it that is unique about Magento that cannot be found anywhere else?</p>
            <p class="mgt-10">Magento is the most reliable eCommerce platform among many top clients. For the past few years, Magento’s flexibility has helped gain trust from their clients. Magento can allow you to receive payments from customers through various methods. And payments can be received from all over the world without any complications. Updating your site is much easier with Magento admin panel. Another unique feature of Magento is that you can manage a number of sites with a single admin.</p>
        </p>
        <p class="mgt-10">
            <p class="bold-text">Advantages of Magento CMS</p>
            <ul class="mgt-10">
                <li><span class="bold-text">1</span>. Magento CMS has an easy setup process which allows amateurs to build a strong website.</li>
                <li><span class="bold-text">2</span>. They have a support team that includes over 600,000 members. Whenever you are facing difficulties due to Magento CMS, their strong support team will be right at your service during any time of the day.</li>
                <li><span class="bold-text">3</span>. Security is one of the most crucial factors during eCommerce setup. You do not want unauthorized people to access your personal information. Magento CMS offers a strongly secured service. You will have to worry less about malware and hackers. Their built-in features automatically secure your site. You do not need to put extra effort and time to protect your site.</li>
                <li><span class="bold-text">4</span>. I cannot stress it enough, more SEO benefits mean higher sales rate. Magento offers features that lead to more profits and higher sales. It reaches out to more customers.</li>
                <li><span class="bold-text">5</span>. Last but not least, Magento CMS offers great server performance. It is a high maintenance CMS that doesn’t slow down your server. Even when a large number of people are trying to access your site, you will not face difficulties. Magento allows your site to run smoothly without any interference.</li>
                <li><span class="bold-text">6</span>. It automatically updates your site when required. You do not need to run the extra mile. Your CMS can manage it all for you.</li>
                <li><span class="bold-text">7</span>. You can accept payment via multiple procedures from every corner of the world!</li>
                <li><span class="bold-text">8</span>. More available features choose from to help customize your site. More formats and functionalities available to optimize your eCommerce.</li>
            </ul>
            <img src="img/posts/magento-cms-2.png" alt="Magento" />
        </p>
        <p class="mgt-10">
            <p class="bold-text">Disadvantages</p>
            <p class="mgt-10">Moreover, after all the positive remarks about Magento, there are some tiny disadvantages that make people hesitant about choosing Magento CMS. Compared to other CMS, Magento is more expensive. With other CMS brands, you will have to pay less every month. Since Magento offers more benefits, it comes with a price.</p>
            <p class="mgt-10">Futhermore, Magento CMS takes a longer time to develop. Magento has a complex infrastructure that will require time to set up. Rome wasn’t built in a day. All good things take longer to develop. Magento also takes gigabytes to process. It takes up a lot of RAM. Magento is written in PHP, sometimes it cannot handle the load. This process delays and takes up more space. Another small disadvantage is that whenever Magento goes down, so will all your sites. Hence at times, your site will not function properly and it won’t be under your control.</p>
        </p>
        <p class="mgt-10">
            <p class="bold-text">Conclusion</p>
            <p class="mgt-10">Regardless of its cons, the pros cancel the cons out. Hence, Magento received the most public demand out of all eCommerce platforms in 2018. Magento CMS is a different take from the rest of the crowd. They offer benefits which other platforms are unable to offer.</p>
            <p class="mgt-10">All the advantages add up to be the best CMS there is on the market. So, you cannot possibly compare with any other CMS. If anyone who has previously used Magento knows how much sales you can make through Magento. And better sales should be the motive of any eCommerce site.</p>
        </p>
        `,
        categories: [
            'CMS',
            'e-commerce'
        ],
        tags: [
            'Magento'
        ]
    },
    {
        id: 5,
        title: 'Is jQuery dying?',
        date: 'March 27, 2019',
        author: 'AXeL',
        image: 'img/posts/jquery.png',
        text: `
        <p>
            Some years ago jQuery was a solid solution in developing cross-browser applications and providing some fancy DOM manipulations. Things have changed a lot since then and vanilla JS has been evolving steadily. Same story with browsers since Internet Explorer mostly has turned the page too. I know jQuery dev team is moving towards their 3rd major release but i have to admit that i have been using the library even less in my projects.
        </p>
        <p class="mgt-10">
            The truth is that the nature of applications has changed. My views are connected with my data so i do not need anymore plain DOM manipulations. Now these are part of the whole UI functionality and my data flow and not the result of a key stroke. So i need sth stronger than a listener to a click event that's why i use frameworks like AngularJS and lately VueJS and PolymerJS.
        </p>
        <p class="mgt-10">
            New ECMAScript versions bring steadily even more goodies for us. New apis like <span class="bold-text">fetch()</span> shall help us run AJAX requests lightning fast. Many people still use jQuery because of the <span class="bold-text">$.ajax()</span> function but since a native alternative will gain ground i guess this shall end.
        </p>
        <p class="mgt-10">
            Vanilla js offers tons of neat selectors like <span class="bold-text">document.querySelector('myID');</span> or <span class="bold-text">document.getElementById('myID');</span> so there is no need for <span class="bold-text">$('#myID');</span> etc. I know many developers are quite experienced in using jQuery selectors and tend to ignore the vanilla js ways. In fact there are too many developers who feel that they would step outside of their comfort zone if they were asked to use the vanilla js alternatives. The truth is that most of the times vanilla js selectors cover our needs.
        </p>
        <p class="mgt-10">
            As time goes by, the most popular JS frameworks are opting to use vanilla JS instead of JQuery. In fact, the only popular JS frameworks still using JQuery are EmberJS and BackboneJS but the flow is moving away from jQuery.
        </p>
        <blockquote>
            So this is the question: Is jQuery dying?
        </blockquote>
        <p>
            <a href="https://hashnode.com/post/is-jquery-dying-ciok1zcxv01y23353nio5zfp4" target="_blank">Source</a>
        </p>
        `,
        categories: [
            'Library'
        ],
        tags: [
            'Javascript',
            'jQuery'
        ]
    },
    {
        id: 4,
        title: 'Riot JS: Simple yet Powerful',
        date: 'March 26, 2019',
        author: 'AXeL',
        image: 'img/posts/riot-js.png',
        text: `
        <p>
            <a href="https://riot.js.org/" target="_blank">Riot</a> is a frontend javascript library that lets you build user interfaces with custom tags using simple and enjoyable syntax. It uses a virtual DOM similar to React but faster. <span class="bold-text">Riot</span> is very tiny compared to its competitors.
        </p>
        <p class="mgt-10">
            <p>What makes Riot so interesting?</p>
            <ul class="disc-list mgt-10">
                <li class="bold-text">Easy to learn/use</li>
                <li class="bold-text">Simple & minimalistic</li>
                <li class="bold-text">Small, but complete</li>
                <li class="bold-text">Stable & ready for production</li>
            </ul>
        </p>
        <p class="mgt-10">
            As a developer one of the main problems i face with new technologies is the learning curve, what i mean is that after spending time on learning something new there is no guarantee that you will find some projects to work on with what you just learned, so you may be just wasting time on learning something you won't use.
            This is why i'm trying to be more consistent when it comes to choices & this is why i chose Riot ;)
        </p>
        <p class="mgt-10">
            <p>Convinced & want to give it a try? here you go!</p>
            <iframe class="mgt-10" src="https://riot.js.org/examples/live-editor/"></iframe>
        </p>
        <p class="mgt-10">
            I recently introduced Riot to my portfolio, you will find the full source code <a href="https://github.com/AXeL-dev/portfolio" target="_blank">here</a> (note that this is not the best example of what you could do with riot).
        </p>
        `,
        categories: [
            'Front End',
            'Library'
        ],
        tags: [
            'Javascript',
            'Riot.js'
        ]
    },
    {
        id: 3,
        title: 'Dolibarr.. My opinion',
        date: 'March 25, 2019',
        author: 'AXeL',
        image: 'img/posts/dolibarr.png',
        text: `
        <p>
            <a href="https://www.dolibarr.org/" target="_blank">Dolibarr</a> is an opensource and free software package to manage companies, freelancers or foundations. It's basically a web application coded in javascript & PHP that you can use to handle your business on a local or remote server.
        </p>
        <p class="mgt-10">
            I've been working on Dolibarr for almost 3 years now and here is what i think about it.
        </p>
        <p class="mgt-10">
            <p>Let's start with the good part:</p>
            <ul class="disc-list mgt-10">
                <li><span class="bold-text">Free & opensource</span> (even if the most of external modules are paid)</li>
                <li class="bold-text">Simple installation</li>
                <li class="bold-text">Ergonomic & user friendly interface</li>
                <li class="bold-text">Extensible & customisable</li>
                <li><span class="bold-text">Growing audience</span> (dolibarr is widely used in some countries like France & Greece)</li>
            </ul>
        </p>
        <p class="mgt-10">
            <p>The worst part:</p>
            <ul class="disc-list mgt-10">
                <li><span class="bold-text">Bugs</span> (you can easily discover a bug just by playing with your browser address bar)</li>
                <li><span class="bold-text">Spaghetti code</span> (no wonder why there is so much bugs..)</li>
                <li><span class="bold-text">Poor documentation</span> (developer documentation is really old & outdated)</li>
                <li><span class="bold-text">Slow development</span> (even if dolibarr has seen very good changes in the last years)</li>
            </ul>
        </p>
        <p class="mgt-10">
            As a conclusion, i can say that a full-rewrite of dolibarr using some new web technologies is maybe required to get a clean & easy to understand base code. Also, providing a good documentation is fundamental, especially for beginners.
        </p>
        `,
        categories: [
            'ERP',
            'CRM'
        ],
        tags: [
            'PHP',
            'Dolibarr'
        ]
    },
    {
        id: 2,
        title: 'CodeIgniter 4: What\'s to come',
        date: 'March 25, 2019',
        author: 'AXeL',
        image: 'img/posts/codeigniter.png',
        text: `
        <p>
            <a href="https://www.codeigniter.com/" target="_blank">CodeIgniter</a> is one of the most popular PHP frameworks out there. Even though its activity & improvements have been too slow the last years, it stays simple, easy to learn, flexible & the most important it's blazing fast!
        </p>
        <p class="mgt-10">
            <p>Version 4 is a complete rewrite of the framework, so let's check what's new:</p>
            <ul class="disc-list mgt-10">
                <li>
                    <p class="bold-text">The welcome page got a pretty new design<p>
                    <img src="img/posts/codeigniter4-welcome.png" alt="CodeIgniter4" />
                </li>
                <li>
                    <p class="bold-text">A debug bar has been introduced also</p>
                    <img src="img/posts/codeigniter4-debugbar.png" alt="CodeIgniter4" />
                </li>
                <li>
                    <p class="bold-text">The error parser has a new nice look & got some improvements</p>
                    <img src="img/posts/codeigniter4-errorparser.png" alt="CodeIgniter4" />
                </li>
                <li class="bold-text">Introduction of namespaces</li>
                <li class="bold-text">PSR-4 autoloading</li>
                <li class="bold-text">Requires PHP > 7.0</li>
            </ul>
        </p>
        <p class="mgt-10">
            <span class="bold-text">Note</span>: version 4 is currently in a beta stage, wich means that it's not yet ready for production, therefore the codeigniter team promised a long time support for version 3.
        </p>
        `,
        categories: [
            'Back End',
            'Framework'
        ],
        tags: [
            'PHP',
            'CodeIgniter'
        ]
    },
    {
        id: 1,
        title: 'Get a free account on lynda.com',
        date: 'March 25, 2019',
        author: 'AXeL',
        image: 'img/posts/lynda.com.jpg',
        text: `
        <p>
            <a href="https://www.lynda.com/" target="_blank">Lynda.com</a> is an online learning platform offering educational training courses in the fields of business, software, technology, and creative skills. It is a subsidiary of Linkedin.
        </p>
        <p class="mgt-10">
            <p>You can get a free account by following those steps:</p>
            <ul class="mgt-10">
                <li><span class="bold-text">1</span>. Request a library card from <a href="https://know.freelibrary.org/MyResearch/register/policy" target="_blank">freelibrary.org</a> (or <a href="https://www.dclibrary.org/catalog/account/application" target="_blank">dclibrary.org</a>)</li>
                <li><span class="bold-text">2</span>. Accept the policy</li>
                <li><span class="bold-text">3</span>. Fill the registration form (for the Home Address i recommend you to look at <a href="https://libwww.freelibrary.org/locations/" target="_blank">locations</a>)</li>
                <li><span class="bold-text">4</span>. Check your mail after validation, and copy the login informations</li>
                <li><span class="bold-text">5</span>. Login to lynda.com with Organization Portal (<a href="https://www.lynda.com/signin/organization" target="_blank">Sign in with your organization portal</a>), type "freelibrary.org"</li>
                <li><span class="bold-text">6</span>. Fill your login informations from your mail</li>
            </ul>
        </p>
        <p class="mgt-10">
            If you don't have an email you can simply use <a href="https://temp-mail.org/" target="_blank">temp-mail.org</a>. You can also use <a href="https://www.fakenamegenerator.com/" target="_blank">fakenamegenerator.com</a> to get some fake personal informations (at your own risk). Happy Learning.
        </p>
        `,
        tags: [
            'e-learning'
        ]
    }
];
