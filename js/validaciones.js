function validarFormulario() {
    var nombre = document.forms[0].nombre.value;
    var email = document.forms[0].email.value;
    var contrasena = document.forms[0].contrasena.value;
    var errores = [];
  
    // Validación de nombre: Debe contener entre 3 y 12 caracteres
    if (nombre.length < 3 || nombre.length > 12) {
      window.alert("El nombre debe tener entre 3 y 12 caracteres.");
    }
    if (!/^[a-zA-Z0-9 ]{3,12}$/.test(nombre)) {
      window.alert("El nombre debe tener entre 3 y 12 caracteres y no debe contener caracteres especiales.");
    }
  
    // Validación de correo electrónico: Debe tener entre 10 y 30 caracteres y ser una dirección de correo válida
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      window.alert("El correo electrónico no es válido.");
    }
  
    // Validación de contraseña: Debe tener entre 4 y 18 caracteres
    if (!/^[a-zA-Z0-9]{4,18}$/.test(contrasena)) {
      window.alert("La contraseña debe tener entre 4 y 18 caracteres.");
    }
  
  
    // Validación de correo electrónico: Debe tener entre 10 y 30 caracteres
    if (email.length < 10 || email.length > 30) {
      window.alert("El correo electrónico debe tener entre 10 y 30 caracteres.");
    }
  
    // Validación de contraseña: Debe tener entre 4 y 18 caracteres
    if (contrasena.length < 4 || contrasena.length > 18) {
      window.alert("La contraseña debe tener entre 4 y 18 caracteres.");
    }
  
    if (errores.length > 0) {
      var mensajeError = "Errores: \n";
      for (var i = 0; i < errores.length; i++) {
        mensajeError += "- " + errores[i] + "\n";
      }
      alert(mensajeError);
      return false;
    }
  
    return true;
  }