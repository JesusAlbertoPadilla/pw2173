<?php
	function conectaBD(){
		//servidor, ususario, contraseña, bd
		$conexion= mysqli_connect("localhost", "root", "", "pw2173");
		return $conexion;
	}
?>