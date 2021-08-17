/*------------------------------  elenco Botão -----------------------------------------------*/
$(document).ready(function () {
    $(".click-target").click(function () {
        $(this).parent().next(".hidden-content").slideToggle("slow");
    });
});


/*------------------------------  fim ------------------------------------------------------*/

/*------------------------  carrossel infinito -----------------------------------------------*/

$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

/*------------------------------    fim        -----------------------------------------------*/