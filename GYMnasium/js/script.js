$(function ($) {

    // banner slider part start
    $('#banner-part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        dots: true,
        prevArrow: '<i class="fal fa-angle-left"></i>',
        nextArrow: '<i class="fal fa-angle-right"></i>',
    });
    // banner slider part end

    // about video & gallary images part start
    $('.venobox').venobox();
    // about video & gallary images part end

    // team slider part start
    $('.team-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1000,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    // team slider part end

    // testimonial slider part start
    $('.test-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1000,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    // testimonial slider part end

    // counter slider part start
    $('.counter').counterUp({
        delay: 10,
        time: 2000,
    });
    // counter slider part end

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

    // menu fix part start
    var navoff = $(".full-menu").offset().top;

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $(".full-menu").addClass("stick-menu");
        } else {
            $(".full-menu").removeClass("stick-menu");
        }
    });
    // menu fix part end 

    // bottom to top part start

    $(".btt").click(function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 1500);
    });



    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 150) {
            $(".btt").fadeIn();
        } else {
            $(".btt").fadeOut();
        }
    });


    // bottom to top part end


    //smooth scroll start
    $('.full-menu a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
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






});
