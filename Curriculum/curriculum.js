 // jquery == $

var inicia=function(){
  var nuevo=function(){
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
      $("#foto").attr("src",data.results[0].picture.large);
      $("#nombre").html(data.results[0].name.title+" "+data.results[0].name.first+" "+data.results[0].name.last);
      $("#localizacion").html("Street:"+data.results[0].location.street+"<br>"
        +"City:"+data.results[0].location.city+"<br>"
        +"State:"+data.results[0].location.state+"<br>"
        +"Postcode:"+data.results[0].location.postcode);
      $("#email").html("Email:"+data.results[0].email);
      $("#login").html("Username:"+data.results[0].login.username+"<br>"
        +"Password:"+data.results[0].login.password+"<br>"
        +"Salt:"+data.results[0].login.salt+"<br>"
        +"MD5:"+data.results[0].login.md5+"<br>"
        +"Sha1:"+data.results[0].login.sha1+"<br>"
        +"Sha256:"+data.results[0].login.sha256);
      $("#dob").html("Dob:"+data.results[0].dob);
      $("#registered").html("Registered:"+data.results[0].registered);
      $("#phone").html("Phone:"+data.results[0].phone);
      $("#cell").html("Cel:"+data.results[0].cell);
      $("#id").html("Name:"+data.results[0].id.name+"<br>"
        +"Value:"+data.results[0].id.value);
      $("#picture").html("Large:"+data.results[0].picture.large+"<br>"
        +"Medium:"+data.results[0].picture.medium+"<br>"
        +"Thumbnail:"+data.results[0].picture.thumbnail);
      $("#nat").html("NAT:"+data.results[0].nat);
      $("#info").html("Seed:"+data.results[0].info.seed+"<br>"
        +"Results:"+data.results[0].info.results+"<br>"
        +"Page:"+data.results[0].info.page+"<br>"
        +"Version:"+data.results[0].info.version);



    //alert(data.results[0].name.first+" "+data.results[0].name.last)
    //console.log(data);
        }
    });
  }
  //alert("Lista la pagina");
  //JSON= JavaScript Object Notation
  

    $("#btnNuevo").on("click",nuevo);
}
//Iniciamos JQuery
//Cuando la pagina esta lista
//Ejecuta la funcion inicia
$(document).ready(inicia);