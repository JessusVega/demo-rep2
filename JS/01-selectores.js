$(document).ready(function(){

    $("#rojo").css("background", "red")
              .css("color", "white");  

    $("#amarillo").css("background", "yellow")
              .css("color", "green");     
              
    $("#verde").css("background", "green")
              .css("color", "white");  

    var miClase = $(".zebra").css("padding","5px");
    
    $('.sin').click(function(){

        $(this).addClass('zebra');
    })


    //Etiquetas

    var parrafos = $('p').css("cursor","pointer");

    parrafos.click(function(){
      
        var that = $(this);

        if(!that.hasClass('grande')){
            that.addClass('grande');
       
        }else{
            that.removeClass('grande');
      
        }
    });

    //Atributos
    $('[title="google"]').css('background','#ccc');
    $('[title="facebook"]').css('background','blue');


});  