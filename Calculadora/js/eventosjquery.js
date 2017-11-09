// jquery == $

var inicia=function(){
	var nuevo=function(){
		$.ajax({
  			url: 'https://randomuser.me/api/',
  			dataType: 'json',
  			success: function(data) {
  		$("#nombre").html(data.results[0].name.title+" "+data.results[0].name.first+" "+data.results[0].name.last);
  		$("#localizacion").html("Street:"+data.results[0].location.street+"<br>"
  			+"City:"+data.results[0].location.city+"<br>"
  			+"State:"+data.results[0].location.state+"<br>"
  			+"Postcode:"+data.results[0].location.postcode);
  		$("#email").html("Email:"+data.results[0].email);
  		$("#login").html("Login:"data.results[0].login);


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