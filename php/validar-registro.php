<?php
$conexion = mysqli_connect("localhost", "root", "", "hydra");

if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}

$email = $_GET['email']; 

$sql = "SELECT * FROM usuarios WHERE email = '$email'";
$resultado = mysqli_query($conexion, $sql);

if (mysqli_num_rows($resultado) > 0) {
    echo "Correo en uso"; // El correo ya está en uso
} else {
    echo "Correo disponible"; // El correo está disponible
}

mysqli_close($conexion);
?>
