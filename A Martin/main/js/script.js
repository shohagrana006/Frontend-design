$(function ($) {
"use strict";
    
    var $fullMenu = $(".full-menu");
    var $btn      = $(".btt");
    
    // Preloader js start  
    $(window).on('load', function () {
        $('.preloader').delay().fadeOut(500);
    });
    // Preloader js end 

    // menu fix part start
    var navoff = $fullMenu.offset().top;

    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $fullMenu.addClass("stick-menu");
        } else {
            $fullMenu.removeClass("stick-menu");
        }
    });
    // menu fix part end 

    // bottom to top btn part start
    $btn.on('click', function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 1000);
    });

    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 150) {
            $btn.fadeIn();
        } else {
            $btn.fadeOut();
        }
    });
    // bottom to top btn part end
    
     //smooth scroll start
    $('a.scroll-btn[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .on('click', function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });
    //smooth scroll end
    
    // banner slider part start
    $('#banner-part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1500,
        fade: true,
        prevArrow: '<i class="fal fa-angle-left"></i>',
        nextArrow: '<i class="fal fa-angle-right"></i>',
    });
    // banner slider part end

    // counter part start
    $('.counter').counterUp({
        delay: 50,
        time: 2000
    });
    // counter part end
    
    // about video & work images part start
    $('.venobox').venobox();
    // about video & gallary images part end

    // textimonial slider part start
    $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<i class="fal fa-angle-left"></i>',
        nextArrow: '<i class="fal fa-angle-right"></i>',
    });
    // textimonial slider part end
    
    // mixitup part start
    var containerEl = document.querySelector('.filter');

    var mixer = mixitup(containerEl);
    // mixitup part end

    // clint slider part start
    $('.clint-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        prevArrow: '<i class="fas fa-chevron-left lft-arrw"></i>',
        nextArrow: '<i class="fas fa-chevron-right rght-arrw"></i>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    // clint slider part end
    
    
    // type js start
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings'
    });
    var typed = new Typed('#typed2', {
        stringsElement: '#typed-strings2'
    });
    // type js end

});
