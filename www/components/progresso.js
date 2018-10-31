// This is a JavaScript file
$(function(){

    $(".atualizar").click(function(){
        var $nome = $("#nome").val();
        var $ptotal = $(".ptotal").text();
        var progresso =0;
        $ptotal = parseInt($ptotal);
        progresso = $nome/$ptotal*100;
        $(".statuss").css("width,"+progresso+"%");



    });

});
