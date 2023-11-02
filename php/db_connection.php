<?php
// datos establecidos
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'hydra';

// Creamos la conexion
try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  echo "Error de conexión: " . $e->getMessage();
  die();
}
?>
