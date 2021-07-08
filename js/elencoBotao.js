/*------------------------------  elenco Botão -----------------------------------------------*/

$('.abrir-modal').click(function(){
	$('.modal').toggleClass('active');
	var condicao = $('.modal').hasClass('active');
	if(condicao) {
		$(this).text('Fechar Modal');
	} else {
		$(this).text('Abrir Modal');
	}
});
/*------------------------------  fim ------------------------------------------------------*/

/*------------------------  carrossel infinito -----------------------------------------------*/

$(document).ready(function(){
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
