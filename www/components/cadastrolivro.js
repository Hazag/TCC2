// This is a JavaScript file
$(document).on("click","#cadastrarlivro", function() {
    var parametros={ 
        "nomeLivro":$("#nomeLivro").val(),
        "paginasLivro": $("#paginasLivro").val(),
        "autorLivro": $("#autorLivro").val(),
        "edicaoLivro": $("#edicaoLivro").val(),
         "anoEdicaoLivro": $("#anoEdicaoLivro").val(),
         "editorLivro": $("#editorLivro").val(),
       "segunda": $("#c1").val(),
         "terca": $("#c2").val(),
         "quarta": $("#c3").val(),
         "quinta": $("#c4").val(),
         "sexta": $("#c5").val(),
         "sabado": $("#c6").val(),
         "domingo": $("#c7").val(),
        "dataInicio": $("#negritoDcss").val(),
         "datatermino": $("#negritoDcss23").val()
      
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
        $("#editorLivro").val("")
        $("#negritoDcss").val(""),
        $("#negritoDcss23").val(""),
      $("#c1").val(""),
        $("#c2").val(""),
        $("#c3").val(""),
        $("#c4").val(""),
        $("#c5").val(""),
        $("#c6").val(""),
        $("#c7").val("")
      },
      error:function(data){
        navigator.notification.alert("erro"+data);
      }

    });
});


