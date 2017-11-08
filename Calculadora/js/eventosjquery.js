// jquery == $

var inicia=function(){
	//alert("Lista la pagina");
	//JSON= JavaScript Object Notation
	$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
  	alert(data.results[0].name.first+" "+data.results[0].name.last)
    //console.log(data);
  }
});
}
//Iniciamos JQuery
//Cuando la pagina esta lista
//Ejecuta la funcion inicia
$(document).ready(inicia);