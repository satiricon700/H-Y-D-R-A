<?php

require 'db_connection.php';
// Verificar si se ha enviado el formulario de registro
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $edad = $_POST['edad'];
    $email = $_POST['email'];
    $contraseña = $_POST['contraseña'];

    // Realizar cualquier validación adicional que necesites

    // Hashear la contraseña
    $hashContraseña = password_hash($contraseña, PASSWORD_DEFAULT);

    // Guardar los datos en la base de datos (aquí asumimos que ya has configurado la conexión a la base de datos)

    // Redireccionar al formulario de inicio de sesión
    header('Location: http://localhost/H-Y-D-R-A/Curso.html');
    exit();
}
?>
