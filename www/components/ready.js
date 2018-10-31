
window.onload = function() {
navigator.notification.alert(localStorage.getItem('dados'));




   /*
   var codigoSelecionado = localStorage.getItem('dados'); 
   $.ajax({
      type:"get",
      url:"https://tcc-nicollepereira.c9users.io/listarLivros.php",
      data: "codigo="+codigoSelecionado,
      dataType:"json",
      success: function(data){
            $.each(data.livros, function(i, dados){
                $("#titulo").val(dados.titulo);
                $("#autor").val(dados.autor);
                $("#isbn").val(dados.isbn);
                $("#ano option[value="+dados.ano+"]").attr('selected','selected');
            });
        },
       error:function(data){
           navigator.notification.alert("Erro: "+data);
       }
    });
*/


};