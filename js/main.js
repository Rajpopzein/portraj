$(document).ready(function () {
    var typed = new Typed('#typed', {
        strings: ["Hello There", "I am Rajkumar", "A UI / Web Developer", "A Photographer"],
        typeSpeed: 40,
        backSpeed: 40,
        backDelay: 1000,
        loop: true
    });

    $('.menu').click(function () {
        $('.navbar nav ul li').toggleClass('active');
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('.nbr').addClass('black');
            $('.logo').addClass('logo_black');
            $('.navbar nav ul li a').addClass('nav-item_black');
            $('.toggler').addClass('logo_black')
        } else {
            $('.nbr').removeClass('black');
            $('.logo').removeClass('logo_black');
            $('.navbar nav ul li a').removeClass('nav-item_black');
            $('.toggler').removeClass('logo_black');
        }
    })
    //scroll 
    var scrollClick = $('.nav-item');
    scrollClick.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1500);
    });
    //link switch
    //hash is resprsending id

});