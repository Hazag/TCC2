// This is a JavaScript file	
var tipo;

$(document).on("click", "#capitulo", function(){
  tipo = $("#capitulo").val();
  $("#capitulo").css("color","blue");
  $("#pagina").css("color","gray");
});

$(document).on("click", "#pagina", function(){
  tipo = $("#pagina").val();
  $("#capitulo").css("color","gray");
  $("#pagina").css("color","blue");
});



$(document).on("click","#novanota", function() {

    var parametros={ 
        "nome":$("#nome").val(),
        "tipo":tipo,
        "titulo":$("#titulo").val(),
        "nota":$("#txtareaNota").val(),
        "referente":$("#nr").val(),
    
    };
    
 
    $.ajax({
      type:"post",
      url:"https://tcc-nicollepereira.c9users.io/nota.php",
      data:parametros,
      success: function(data){
        navigator.notification.alert(data);
        $("#nome").val(""),
       $("#button").val(""),
        $("#titulo").val(""),
       $("#txtareaNota").val(""),
       $("#nr").val("")
      },
      error:function(data){
        navigator.notification.alert("erro"+data);
         
      }

    });
});
$(document).ready(function(){
  $("#demo").on("hide.bs.collapse", function(){
    $(".btn").html(' Expandir');
  });
  $("#demo").on("show.bs.collapse", function(){
    $(".btn").html(' Retrair');
  });

   $("#demo2").on("hide.bs.collapse", function(){
    $(".btn2").html(' Expandir');
  });
  $("#demo2").on("show.bs.collapse", function(){
    $(".btn2").html(' Retrair');
  });
});


