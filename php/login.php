<?php
require 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $contraseña = $_POST['contrasena'];

    // Verificar si el correo y la contraseña coinciden en la base de datos
    $sql = "SELECT * FROM usuarios WHERE email = :email";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($row) {
        $hashContraseña = $row['contraseña'];

        if (!empty($contraseña) && password_verify($contraseña, $hashContraseña)) {
            // Inicio de sesión exitoso
            header('Location: http://localhost/H-Y-D-R-A/curso/Curso.html');
            exit();
        } else {
            // Contraseña incorrecta
            header('Location: http://localhost/H-Y-D-R-A/login.html');
            exit();
        }
    } else {
        echo "Usuario no encontrado. Por favor, ingresa tus credenciales.";
    }
}
?>
