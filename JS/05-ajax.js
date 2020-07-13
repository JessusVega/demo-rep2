$(document).ready(function(){

/*     $('#datos').load("https://reqres.in/");
 */

    //Get y post

$.get("https://reqres.in/api/users",{page: 2},function(response){
    
    response.data.forEach((element,index) =>{
        $("#datos").append("<p>"+element.first_name + " " + element.last_name +"</p>")
    });
   });

 
   $("#formulario").submit(function(e){
    e.preventDefault();
    
    var usuario = {
        name: $('input[name="name"]').val(),
        web: $('input[name="web"]').val()
    };
    
    $.ajax({
        type: 'POST',
        url: $(this).attr("action"),
        data: usuario,
        beforeSend: function(){
            console.log("enviando...")
        },
        success: function(response){
            console.log(response);
        },
        error: function(){
            console.log("Ha ocurrido un error")
        },
        timeout: 1000
    
    
    })
    
    return false; 
       
});
/* 
  $.post($(this).attr("action"), usuario, function(response){
        console.log(response);
    }).done(function(){
        alert("usuario añadido correctamente");
    });

const url = "https://reqres.in/api/users"
    const getUserCreate = response => console.log(response)
 
$('#formulario').on('submit', function (event) {
     event.preventDefault()
     let dataForm = $(this).serializeArray()
        
     $.post(url,dataForm,getUserCreate)
}); */



});
  