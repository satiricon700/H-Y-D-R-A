const formulario = document.querySelector('form');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, números, guion y guion bajo
  password: /^.{4,12}$/, // 4 a 12 caracteres.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const campos = {
  usuario: false,
  password: false,
  correo: false,
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case 'nombre':
      validarCampo(expresiones.usuario, e.target, 'usuario');
      break;

    case 'contrasena':
      validarCampo(expresiones.password, e.target, 'password');
      break;

    case 'email':
      validarCampo(expresiones.correo, e.target, 'correo');
      verificarCorreoDisponible(e.target.value);
      break;
  }
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
    campos[campo] = true;
  } else {
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
    campos[campo] = false;
  }
};

const verificarCorreoDisponible = (email) => {
  fetch('validar-registro.php', {
    method: 'POST',
    body: new URLSearchParams({ email }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((response) => response.text())
    .then((data) => {
      if (data === 'Correo en uso') {
        alert('Este correo electrónico ya está en uso. Por favor, elige otro.');
        document.getElementById('floatingInputEmail').value = ''; // Limpia el campo de correo
      }
    })
    .catch((error) => {
      console.error('Error al verificar el correo:', error);
    });
};

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const terminos = document.getElementById('terminos');
  if (campos.usuario && campos.password && campos.correo && terminos.checked) {
    formulario.reset();

    document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
    setTimeout(() => {
      document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
    }, 5000);

    document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
      icono.classList.remove('formulario__grupo-correcto');
    });
  } else {
    document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
  }
});
