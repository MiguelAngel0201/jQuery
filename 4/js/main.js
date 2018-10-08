$(function($){
    $(window).scroll(function(){        
        var scrollX = $(window).scrollLeft();
        $('.x').text(scrollX);
    });
}(jQuery));