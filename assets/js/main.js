(function($){
    "use strict";
    
    /*==========================================
    * TABLE OF CONTENTS - main.js
    * --------------------------------------
    * 01. Owl Carousel
        01.1 Home Slider
    * 02. Wow activation
    * 03. About Us CountUp with wayPoint js
    * 04. owlCarousel
        04.1 Recent blog post carousel
    * 05. Isotope Filter 
    * 06. Isotope Magnific Popup Activation
    * 07. About page image gallery magnificPopup
    * 08. Recent Blog Post carousel
    * 09. Recent Testimonial carousel
    * 10. Logo Carousel
    * 11. Project detail Carousel
    * 12. Progress Bar
    * 13. Light Slider
    * 14. Ease Scrolling effects
    * =========================================== */
    
    /*-----------------
    Active Owl 
    -------------------*/
    $('.uh-home-slider').owlCarousel({
        autoplay:true,
        items:1,
        loop: true,
        dots:true,
        animateOut: 'slideOutDown',
        animateIn: 'slideInDown',
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1    
            }
        }
    })
    /*-----------------
    wow js activation
    -------------------*/
    new WOW().init();
    // CountUp js Options
    var options = {
      useEasing : true, 
      useGrouping : true, 
      separator : ',', 
      decimal : '.',
    };
    // About Us count up with waypoint js
    if ($('#about-counters').length) {
        var projectsNumber = $('#projects').data('number');
        var clientsNumber = $('#clients').data('number');
        var membersNumber = $('#members').data('number');
        var awardsNumber = $('#awards').data('number');
        var projects = new CountUp("projects", 0, projectsNumber, 0, 5, options);
        var clients = new CountUp("clients", 0, clientsNumber, 0, 5, options);    
        var members = new CountUp("members", 0, membersNumber, 0, 5, options);
        var awards = new CountUp("awards", 0, awardsNumber, 0, 5, options);
        var aboutUsCountup = new Waypoint({
            element: document.getElementById('about-counters'),
            handler: function(direction) {    
                if (direction === 'down') {
                    
                    projects.start();
                    clients.start();
                    members.start();
                    awards.start();
                }
            },
            offset: '95%'
        })
    }
    // Sortable Masonary with Filters For Isotope
    if ($('.sortable-masonry').length) {
        var winDow = $(window);
        // Needed variables
        var $container = $('.sortable-masonry .items-container');
        var $filter = $('.filter-btns');
        $container.imagesLoaded(function(){
            $container.isotope({
                filter: '*',
                masonry: {
                    columnWidth: 0
                },
                animationOptions: {
                    duration: 500,
                    easing: 'linear'
                }
            });
        });
        
        // Isotope Filter 
        $filter.find('li').on('click', function () {
            var selector = $(this).attr('data-filter');
            try {
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 500,
                        easing: 'linear',
                        queue: false
                    }
                });
            } catch (err) {
                
            }
            return false;
        });
        winDow.on('resize', function () {
            var selector = $filter.find('li.active').attr('data-filter');
            
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
        });
        var filterItemA = $('.filter-btns li');
        filterItemA.on('click', function () {
            var $this = $(this);
            if (!$this.hasClass('active')) {
                filterItemA.removeClass('active');
                $this.addClass('active');
            }
        });
    }
    // Isotope Magnific Popup Activation
    if($('.item-filter-container').length){
        $('.item-filter-container').magnificPopup({
            delegate: '.filter-zoom', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery: {
                enabled: true
            },
            // other options
        });
    }
    // About page image gallery magnificPopup
    if($('.about-img-gallery').length){
        $('.about-img-gallery').magnificPopup({
            delegate: '.gallery-zoom', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery: {
                enabled: true
            },
            // other options
        });
    }
    // Recent Blog Post carousel
    if($('.recent-blog-carousel').length){
        $('.recent-blog-carousel').owlCarousel({
            autoplay: true,
            animateIn: true,
            items: 3,
            loop: true,
            margin: 15,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            navContainer: '.blog-carousel-nav',
            responsiveClass: true,
            responsive: {
                0:{
                    items: 1,
                    loop: true,
                    nav: true
                },
                600:{
                    items: 2,
                    loop: true,
                    nav: true
                },
                1000:{
                    items: 3,
                    nav: true,
                    loop: true
                }
            }
        });
    }
    // Recent Testimonial carousel
    if($('.testimonial-carousel').length){
        $('.testimonial-carousel').owlCarousel({
            autoplay: true,
            animateIn: true,
            items: 2,
            loop: true,
            margin: 15,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            navContainer: '.testimonial-carousel-nav',
            responsiveClass: true,
            responsive: {
                0:{
                    items: 1,
                    loop: true,
                    nav: true
                },
                600:{
                    items: 1,
                    loop: true,
                    nav: true
                },
                1000:{
                    items: 2,
                    nav: true,
                    loop: true
                }
            }
        });
    }
    // Logo Carousel
    if($('.logo-carousel').length){
        $('.logo-carousel').owlCarousel({
            loop: true,
            margin: 45,
            items:6,
            nav: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            dots: false,
            autoplay:true,
            responsive: {
                0:{
                    items:2
                },
                480:{
                    items:4
                },
                768:{
                    items:5
                },
                1000:{
                    items:6
                }
            }
        });
    }
    // Project detail Carousel
    if($('.project-detail-carousel').length){
        $('.project-detail-carousel').owlCarousel({
            loop: true,
            margin: 0,
            items:4,
            nav: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            dots: false,
            autoplay:true,
            responsive: {
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                768:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        });
    }
    // Progress Bar
    function aboutPageProgressFunc(){
        $(".uh-progress").each(function(){
            var pBar = $(this).children('.progress').children('.progress-bar');
            var info = $(this).children('.progress-info').children('.prog-percent');
            var progPercent = pBar.attr('aria-valuenow');
            
            pBar.animate({width: progPercent + '%'}, { "duration": 1000, "easing": "linear" });
            
            info.prop('Counter',0).animate(
                {
                    Counter: progPercent 
                }, 
                {
                    'duration': 1000,
                    'easing': 'linear',
                    step: function(now){
                        info.html(Math.ceil(now)+'%');
                    }
                }
            );
        });
    }
    if($('#skills').length){
        var aboutPageProgress = new Waypoint({
            element: document.getElementById('skills'),
            handler: function(direction) {    
                if (direction === 'down') {
                    aboutPageProgressFunc()
                }
            },
            offset: '85%'
        })
    }
    // Light Slider
    if($('#imageGallery').length){
        $('#imageGallery').lightSlider({
            gallery:true,
            item:1,
            loop:true,
            thumbItem:4,
            slideMargin:0,
            galleryMargin: 20,
            thumbMargin: 30,
            enableDrag: false,
            currentPagerPosition:'left',
        });  
    }
    
})(jQuery);