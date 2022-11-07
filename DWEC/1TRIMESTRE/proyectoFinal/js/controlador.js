var listaPreguntas = new Array(0);
var preguntas = ["RESPUESTA1", "RESPUESTA2", "RESPUESTA3"];

listaPreguntas.push(preguntas[0]);
listaPreguntas.push(preguntas[1]);
listaPreguntas.push(preguntas[2]);

console.log(listaPreguntas);
console.info($("input").data);

$("h1").addClass("titulo");
$("h1").removeClass("titulo").addClass("nuevoTitulo");

var boton = document.getElementById("boton");
boton.addEventListener("click", function () {
  $("#opcion2").css("color", "red");
});

// $("*") -- todo
/*
$("#hola") <- etiqueta con id hola
$(".hola") <- etiqueta con clase hola
$("div") <- elemento

*/
