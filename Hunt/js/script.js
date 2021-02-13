$(function ($) {

    // banner slider part start
    $('#banner-part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<i class="fas fa-arrow-left"></i>',
        nextArrow: '<i class="fas fa-arrow-right right-arr"></i>',
    });
    // banner slider part end

    // portfolio  part start
    $('.venobox').venobox(); //veno-box
    $('.portfolio-slde').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });
    // portfolio  part end

    // service slider part start
    $('.main-services').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<i class="fa fa fa-chevron-up ser-prev"></i>',
        nextArrow: '<i class="fa fa-chevron-down ser-next"></i>',
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
    });
    // service slider part end

    // testimonial slider part start
    $('.details-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.img-slide',
    });
    $('.img-slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.details-slide',
        prevArrow: '<i class="fa fa fa-chevron-up slidPrv4"></i>',
        nextArrow: '<i class="fa fa-chevron-down slidNext4"></i>',
        vertical: true,
        verticalSwiping: true,
        centerPadding: '0px',
        centerMode: true,
        focusOnSelect: true,
    });
    // testimonial slider part end

    // counter slider part start
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });
    // counter slider part end

    // team slider part start
    $('.team-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
    });
    // team slider part end

    // patner slider part start
    $('.ptnr-slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });
    // patner slider part end

    // sticky menu slider part start
    var navoff = $(".full-menu").offset().top;
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $(".full-menu").addClass("sticky-menu");
        } else {
            $(".full-menu").removeClass("sticky-menu");
        }

    });
    // sticky menu slider part end

    // bottom to top slider part start
    $(".btt").click(function () {
        $("html, body").animate({
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
    // bottom to top slider part end

    // smooth scroll part start
    $('.full-menu .navbar-nav a[href*="#"]')
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
    // smooth scroll part end

    // banner slider part start
    // banner slider part end







})
