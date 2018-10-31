//entrando no sistema através de usuario e senha
$(document).on("click","#login01", function(evt){
    //parametros para serem usados no post
     var parametros = {
                "senha" : $("#senhaLogin").val(),
                "email" : $("#nomeLogin").val()
    };
    //ajax para fazer a verificação do e-mail e senha.
    $.ajax({
      type:"post",
      url:"https://tcc-nicollepereira.c9users.io/conecta.php",
      data:parametros,
      success: function(data){
        if(data == "1"){
          
          $(location).attr('href','biblioteca.html');
        }else{
          navigator.notification.alert("Usuário ou senha invalidos");
        }
        
      }
    });
} );




$(document).on("click","#login01", function(evt){
    //parametros para serem usados no post
     var parametros = {
                "email" : $("#nomeLogin").val()
    };
    //ajax para fazer a verificação do e-mail e senha.
    $.ajax({
      type:"post",
      url:"https://tcc-nicollepereira.c9users.io/conecta1.php",
      data:parametros,
      success: function(data){
          localStorage.setItem('dados',data);
          //navigator.notification.alert(localStorage.getItem('dados'));
      }
      
    });
} );



