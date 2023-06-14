$(function () {
    $("#tabs").tabs();
});
<<<<<<< HEAD


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        navText: [ '', ' ' ],
=======
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout:2000,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        navText: [ '', ' ' ],
        nav: false,
        dots: true,

>>>>>>> origin/master

        responsive:{
            0:{
                items:1
            },
            768:{
<<<<<<< HEAD
                items:2
            },
            1100:{
                items:2
            }
        }
    });
});
=======
                items:1
            },
            1100:{
                items:1
            }
        }
    });
});
>>>>>>> origin/master
