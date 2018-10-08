(function($){//Definir que es código jQuery*
    $.fn.vscroll = function(){//Crear una funcion vscroll°
        var video = $(this);
        $(window).scroll(function(){
            var posicion = $(window).scrollTop();//Retornar número de pixeles desde inicio de página al final
            console.log(posicion);//Posición en cosola
            if(posicion >= 500) {
                video.css({position:'fixed',width:'20vw',height:'20vh'});//Dar estilos css deseados
            } else {
                video.css({position:'relative',width:'90vw',height:'90vh'});
            }
        });
    };
}(jQuery));//Definir que es código jQuery*
$('.video').vscroll();//Llamando función°