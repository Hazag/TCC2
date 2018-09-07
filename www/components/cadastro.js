// This is a JavaScript file
$(document).on("click", "login01", function() {
    var parametros={ 
        "nome": $("#nomeCadastro").val(),
        "email": $("#emailCadastro").val(),
        "senha": $("#senhaCadastro").val(),
        "cSenhaCadastro": $("#confirmeSenhaCadastro").val()
    };

    $.ajax({
      type:"post",
      url:"https://tcc-nicollepereira.c9users.io/login.php",
      data:parametros,
      success: function(data){
        navigator.notification.alert(data);
        $("#nomeCadastro").val(""),
        $("#emailCadastro").val(""),
        $("#senhaCadastro").val(""),
        $("#confirmeSenhaCadastro").val("")
      },
      error:function(data){
        navigator.notification.alert("erro"+data);
      }

    });
});
