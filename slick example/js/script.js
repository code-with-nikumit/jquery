$(document).ready(function() {
    $('.multiple-items').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
    });
    $('.items-box').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,

    });
    $(' .variable-width').slick({
        dots: true,

        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });

    $('.lazy').slick({
        dots: false,
        lazyLoad: ' onedimand ',
        slidesToShow: 3,
        slidesToScroll: 1
    });
    $('.fade').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });


});