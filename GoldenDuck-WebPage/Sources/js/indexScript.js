/* ---------------------------------- Jquery ---------------------------------- */

$(document).ready(function(){  
    irArriba();
    var altura = $('#section').offset().top;
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > altura) {
            $('.menu').addClass('active');
        }else{
            $('.menu').removeClass('active');
        }
    })
});

function irArriba(){
    $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
    $(window).scroll(function(){
    if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(300); }else{ $('.ir-arriba').slideUp(300); }
    });
    $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
    if($(this).scrollTop() > 0){ $('.ir-arriba').css}
}