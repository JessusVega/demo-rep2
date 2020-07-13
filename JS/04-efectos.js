$(document).ready(function(){

    var caja = $('#caja');
    var mostrar= $('#mostrar');
    var ocultar= $('#ocultar');

    mostrar.hide();
    ocultar.click(function(){

        caja.fadeOut('slow');

        $(this).hide();
        mostrar.show();
    });

    mostrar.click(function(){
        caja.fadeIn('slow');

        $(this).hide();
        ocultar.show();
    });

    $('#todoenuno').click(function(){
        $('#caja').slideToggle('fast');
    });

    $('#animar').click(function(){
        caja.animate({
                marginLeft:'35%',
                fontSize:'40px',
                height: '110px'
        }, 'slow')
            .animate({
                borderRadius:'900px',
                marginTop:'80px'
            },'slow')
            .animate({
                borderRadius:'0px',
                marginLeft:'0px'
            },'slow')

    });
})