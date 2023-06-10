// Espera a que el documento HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Agrega un evento de clic a la imagen al hacer clic en ella
    var image = document.querySelector(".about-image img");
    image.addEventListener("click", function() {
      // Redirecciona a la página deseada al hacer clic en la imagen
      window.location.href = "ruta-de-destino.html"; // Reemplaza "ruta-de-destino.html" con la URL a la que deseas redirigir al hacer clic en la imagen
    });
  });
  