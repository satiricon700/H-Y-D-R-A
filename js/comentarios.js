document
  .getElementById("formulario-comentario")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    // Obtén los valores del formulario
    var nombre = document.getElementById("nombre").value;
    var comentario = document.getElementById("comentario").value;

    // Crea un nuevo elemento de comentario
    var nuevoComentario = document.createElement("div");
    nuevoComentario.innerHTML =
      "<h4>" + nombre + "</h4><p>" + comentario + "</p>";

    // Agrega el nuevo comentario al contenedor de comentarios
    var contenedorComentarios = document.getElementById("comentarios");
    contenedorComentarios.appendChild(nuevoComentario);

    // Limpia los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("comentario").value = "";
  });
