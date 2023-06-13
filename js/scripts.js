$(function () {
    $("#tabs").tabs();
});
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        navText: [ '', ' ' ],
        nav: false,
        dots: true,


        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1100:{
                items:1
            }
        }
    });
});
