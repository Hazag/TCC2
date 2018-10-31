// This is a JavaScript filesdddrr
$(document).on("click","#cadastrarlivro", function() {
  var d = new Date();
dataInicio = (d.toLocaleString()); 

  var c = new Date();
datatermino = (c.toLocaleString());  
if( $("#c1").is(":checked")) {
        segunda=1;
    } else {
       segunda=0;
    }
   
    if(  $("#c2").is(":checked")) {
        terca=1;
    } else {
        terca=0;
    }
    
    if( $("#c3").is(":checked")) {
        quarta=1;
    } else {
        quarta=0;
    }
     if( $("#c4").is(":checked")) {
        quinta=1;
    } else {
        quinta=0;
    }
     if( $("#c5").is(":checked")) {
        sexta=1;
    } else {
        sexta=0;
    }
     if( $("#c6").is(":checked")) {
        sabado=1;
    } else {
      sabado=0;
    }
     if( $("#c7").is(":checked")) {
       domingo=1;
    } else {
        domingo=0;
    }


    if( $("#r1").is(":checked")) {
       numeroPaginas ="Paginas";
    } else if ($("#r2").is(":checked")){
        numeroPaginas ="Capitulos";
    }else{
      numeroPaginas ="Concluido";
      }


    var parametros={ 
        "nomeLivro":$("#nomeLivro").val(),
        "paginasLivro": $("#paginasLivro").val(),
        "autorLivro": $("#autorLivro").val(),
        "edicaoLivro": $("#edicaoLivro").val(),
         "anoEdicaoLivro": $("#anoEdicaoLivro").val(),
         "editorLivro": $("#editorLivro").val(),
         "segunda": segunda,
         "terca": terca,
         "quarta":quarta,
         "quinta": quinta,
         "sexta": sexta,
         "sabado": sabado,
         "domingo": domingo,
        "dataInicio": $("#negritoDcss").val(),
         "datatermino":$("#negritoDcss23").val(),
         "numeroPaginas":numeroPaginas,
            
    };

 
    
    $.ajax({
      type:"post",
      url:"https://tcc-nicollepereira.c9users.io/cadastrolivro.php",
      data:parametros,
      success: function(data){
        navigator.notification.alert(data);
        $("#nomeLivro").val(""),
        $("#paginasLivro").val(""),
        $("#autorLivro").val(""),
        $("#edicaoLivro").val(""),
        $("#anoEdicaoLivro").val(""),
        $("#editorLivro").val(""),
        $("#negritoDcss").val(""),
        $("#negritoDcss23").val(""),
        $("#c1").val(""),
        $("#c2").val(""),
        $("#c3").val(""),
        $("#c4").val(""),
        $("#c5").val(""),
        $("#c6").val(""),
        $("#c7").val(""),
        $("#radio").val("")
      },
      error:function(data){
        navigator.notification.alert("erro"+data);
      }

    });
        
});

  



