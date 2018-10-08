$(document).ready(function(){
    $("#Crear").click(function(){
    //$(selector).clonar.adjuntar      
        
     $("#Again").clone().appendTo("#Despues");
    });   
}); 

//.appendTo  & .appent($())   adjuntar
//.preppendTo & .prepent($()) preceder
//.insertAfter()
//.insertBefore()
//.clone
//$()