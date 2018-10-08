(function($){
    $(window).mousemove(function(event){
        var x = event.clientX;var y = event.clientY;
        $('.x').text(x);$('.y').text(y);
        if(y > 500){      
           $('footer').css({background:'blue'});
        } else {
            $('footer').css({background:'yellow'});
        }
    });
}(jQuery));