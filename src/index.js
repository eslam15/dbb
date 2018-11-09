import 'bootstrap'
import 'slick-carousel'
import './sass/main.scss'


$(document).ready(function() {
    // scroll function
    // $('body').scroll(function() {
    //     var $nav = $(".fixed-top");
    //     $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    // });
    // homepage slider
    $('.home-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.home-slider-nav'
    });
    $('.home-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.home-slider',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
    // stats slider
    $('.stats-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    });
    // clients slider
    $('.clients-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        centerMode: true,
        touchThreshold: 20,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // leadership slider
    $('.leadership-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.leadership-slider-nav'
    });
    $('.leadership-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.leadership-slider',
        dots: true,
        focusOnSelect: true,
        centerMode: true,
    });
    // awards slider
    $('.awards-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        touchThreshold: 20,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // services slider
    $('.services-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        touchThreshold: 20
    });
    // news slider
    $('.news-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        touchThreshold: 20,
        dots: true
    });
    // add class ie to body 
    if (navigator.appName == 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)) {
        $('body').addClass('ie');
    }
});