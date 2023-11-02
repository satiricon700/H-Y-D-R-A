<?php
require 'db_connection.php';

// Declarar el array de errores
$errores = array();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $contraseña = $_POST['contrasena'];

    // Validaciones
    // ... (resto del código de validación)

    // Si no hay errores, procede con el registro
    if (empty($errores)) {
        // Hashear la contraseña
        $hashContraseña = password_hash($contraseña, PASSWORD_DEFAULT);

        // Guardar los datos en la base de datos
        $stmt = $conn->prepare("INSERT INTO usuarios (nombre, email, contraseña) VALUES (?, ?, ?)");
        $stmt->execute([$nombre, $email, $hashContraseña]);

        // Redireccionar al formulario de inicio de sesión
        header('Location: http://localhost/H-Y-D-R-A/html/login.html');
        exit();
    }
}

// Si no hay errores, muestra los mensajes de error
if (!empty($errores)) {
    echo "<div class='errores'>";
    foreach ($errores as $error) {
        echo "<p>$error </p>";
    }
    echo "</div>";
}
?>
