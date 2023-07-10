// validaciones.js

// Función para validar la fortaleza de la contraseña
function validarContrasena(contrasena) {
    // Verificar si la contraseña es débil (menos de 6 caracteres)
    if (contrasena.length < 6) {
      return "La contraseña debe tener al menos 6 caracteres";
    }
  
    // Verificar si la contraseña contiene caracteres especiales
    var caracteresEspeciales = /[@#$%^&+=]/;
    if (!caracteresEspeciales.test(contrasena)) {
      return "La contraseña debe contener al menos un carácter especial (@, #, $, %, ^, &, +, =)";
    }
  
    // La contraseña es válida
    return "";
  }
  
  // Función para validar el formato del correo electrónico
  function validarEmail(email) {
    var formatoValido = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!formatoValido.test(email)) {
      return "El correo electrónico no tiene un formato válido";
    }
  
    // El correo electrónico es válido
    return "";
  }
  
  // Función para manejar la validación del formulario
  function validarFormulario() {
    // Obtener los valores del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("contraseña").value;
  
    // Realizar validaciones
    var errores = [];
  
    if (contraseña.length > 0) {
      var resultadoContrasena = validarContrasena(contraseña);
      if (resultadoContrasena !== "") {
        errores.push(resultadoContrasena);
      }
    }
  
    if (email.length > 0) {
      var resultadoEmail = validarEmail(email);
      if (resultadoEmail !== "") {
        errores.push(resultadoEmail);
      }
    }
  
    // Mostrar errores o enviar el formulario
    if (errores.length > 0) {
      // Mostrar los mensajes de error
      var mensajeError = "Se encontraron los siguientes errores:\n";
      for (var i = 0; i < errores.length; i++) {
        mensajeError += "- " + errores[i] + "\n";
      }
      alert(mensajeError);
    } else {
      // Enviar el formulario
      document.getElementById("registroForm").submit();
    }
  }
  