$(function () {
    $("#tabs").tabs();
});


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1100:{
                items:2
            }
        }
    });
});