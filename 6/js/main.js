(function($){
$(document).ready(function(){
    a = 1;
    var input = '<div id="input'+a+'"><label for="data'+a+'">Data</label><br><input type="text" id="data'+a+'"><input type="button" class="'+a+'" value="más"></div>';
    $('#dataInputs').append(input);
    var data = [];
    $('[value="más"]').click(function(){
        if(a<8 && a>0){
            a++;
            input = '<div id="input'+a+'"><label for="'+a+'">Data</label><br><input type="text" id="'+a+'"><input type="button" class="menos" value="x" id="'+a+'"></div>';
            $('#dataInputs').append(input);
            $('.menos').click(function(){
                a--;
                var nInput = $(this).attr('id');parseInt(nInput);
                $('#input'+nInput).remove();
                alert(a)
            });
        } else {
            alert(a);
        }
        $('[type="submit"]').click(function(){
            for(i=1;i<=a;i++){  
                data[i]=$('data'+a).val();
            }
            $.each(data.filter(data!==Boolean && data!==undefined && data!==null && val!==''),function(i,valor){
                data[i]=valor;
                $('#putValues').append(valor);
            });
            
        });
    });
});
}(jQuery));