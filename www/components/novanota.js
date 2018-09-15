1// This is a JavaScript file
$(document).on("click", "#nota", function() {
    var parametros={ 
        "nome":$("#nome").val(),
        "pagina":$("#pagina").val(),
        "capitulo":$("#capitulo").val(),
        "titulo":$("#titulo").val(),
        "nota":$("#txtareaNota").val()
    };
    $.ajax({
      type:"post",
      url:"https://tcc-nicollepereira.c9users.io/nota.php",
      data:parametros,
      success: function(data){
        navigator.notification.alert(data);
        $("#nome").val(""),
        $("#pagina").val(""),
        $("#capitulo").val(""),
        $("titulo").val(""),
       $("txtareaNota").val("")
      },
      error:function(data){
        navigator.notification.alert("erro"+data);
      }

    });
   
});


