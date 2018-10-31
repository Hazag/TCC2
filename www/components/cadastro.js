1// This is a JavaScript file
$(document).on("click", "#login01", function() {
  
  if($("#senhaCadastro").val()==$("#confirmeSenhaCadastro").val()){
     if($("#nomeCadastro").val() =='' || $("#emailCadastro").val() =='' || $("#senhaCadastro").val() ==''  || $("#confirmeSenhaCadastro").val() =='')
  {
alert("Cadastro incompleto");
  }
  else
  {
    var parametros={ 
        "nome": $("#nomeCadastro").val(),
        "email": $("#emailCadastro").val(),
        "senha": $("#senhaCadastro").val()
    };
    $.ajax({
      type:"post",
      url:"https://tcc-nicollepereira.c9users.io/cadastro.php",
      data:parametros,
      success: function(data){
        navigator.notification.alert(data);
        $("#nomeCadastro").val(""),
        $("#emailCadastro").val(""),
        $("#senhaCadastro").val("")
      },
      error:function(data){
        navigator.notification.alert("erro"+data);
      }

    });
  }
    
  }else{
    navigator.notification.alert("As senhas não coincidem");
  }
    

    
});


