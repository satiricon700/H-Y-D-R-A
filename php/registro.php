<?php
session_start();

$servidor = "localhost";
$basedatos = "login";
$nombreUsuario = "root";
$contrasena = "";

try {
    $conexion = new PDO("mysql:host=$servidor;dbname=$basedatos", $nombreUsuario, $contrasena);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $emailForm = $_POST['email'];
        $contrasenaForm = $_POST['contraseña'];

        // Verificar si el correo y la contraseña coinciden en la base de datos
        $consulta = $conexion->prepare("SELECT * FROM usuarios WHERE email = :email");
        $consulta->bindParam(':email', $emailForm);
        $consulta->execute();

        if ($consulta->rowCount() > 0) {
            $usuario = $consulta->fetch(PDO::FETCH_ASSOC);
            $contrasenaHash = $usuario['contraseña'];

            // Verificar la contraseña hasheada
            if (password_verify($contrasenaForm, $contrasenaHash)) {
                // Inicio de sesión exitoso
                $_SESSION['usuario'] = $usuario['nombre']; // Guardar el nombre del usuario en la sesión
                header("Location: http://localhost/H-Y-D-R-A/Curso.html");
                exit();
            } else {
                echo "La contraseña es incorrecta.";
            }
        } else {
            echo "El correo electrónico no está registrado.";
        }
    } else if (isset($_SESSION['usuario'])) {
        // Si el usuario ya inició sesión, redirigir a una página específica
        header("Location: http://localhost/H-Y-D-R-A/Curso.html");
        exit();
    }
} catch (PDOException $ex) {
    echo "Error al registrar usuario: " . $ex->getMessage();
}
?>
