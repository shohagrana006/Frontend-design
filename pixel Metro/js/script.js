$(function ($) {
    //banner slider part
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        fade: true,
        speed: 1000,
        prevArrow: '<i class="far fa-arrow-circle-left"></i>',
        nextArrow: '<i class="far fa-arrow-circle-right"></i>',
    });

    // mixitup latest work
    var containerEl = document.querySelector('.filter');

    var mixer = mixitup(containerEl);

    // sticky menu 
    var navoff = $(".full-menu").offset().top;

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $(".full-menu").addClass("sticky-menu");
        } else {
            $(".full-menu").removeClass("sticky-menu");
        }
    });

    // bottom to top button
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 150) {
            $(".ttb").fadeIn();
        } else {
            $(".ttb").fadeOut();
        }
    });

    $(".ttb").click(function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 1500);
    });

});
