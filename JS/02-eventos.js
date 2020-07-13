$(document).ready(function(){

    //Mouseover y Mouseout
    var caja = $('#caja');

    caja.mouseover(function(){
        $(this).css("background","red");
    });

    caja.mouseout(function(){
        $(this).css("background", "blue");
    });


    //focus y blur
    var nombre = $('#nombre');
    var datos = $('#datos');

    nombre.focus(function(){
        $(this).css("border","2px solid green");
    });

    nombre.blur(function(){
        $(this).css("border","1px dashed #ccc");
        datos.text($(this).val()).show();
    });

    //Mousedown y mouseup
    datos.mousedown(function(){
        $(this).css("border","2px dashed gray");
    });
    datos.mouseup(function(){
        $(this).css("border","2px dashed black");
    });

    //Mousemove
    $(document).mousemove(function(){
        $('body').css("cursor","none");
        $('#sigueme').css("left",event.clientX)
                     .css("top",event.clientY);
    });
})