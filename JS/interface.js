$(document).ready(function(){

  //  Mover elemento por la pag
$(".elemento").draggable();


//redimensionar
$(".elemento").resizable();

//seleccionar y ordenar
//$(".lista").selectable();
$(".lista").sortable();

//
$("#elemento-movido").draggable();
$("#area").droppable({
    drop:function(){
        console.log("has soltado algo dentro de el area");
    }
});

});

