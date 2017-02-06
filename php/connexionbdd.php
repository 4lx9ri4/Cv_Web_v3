<?php
	// On définit les 4 variables nécessaires à la connexion MySQL :
	$hostname = "tuilalexzutuil.mysql.db";
	$user     = "tuilalexzutuil";
	$password = "Monkeybd1904";
	$nom_base_donnees = "tuilalexzutuil";

	// Connexion au serveur MySQL
	$conn = mysqli_connect($hostname, $user, $password, $nom_base_donnees) or die(mysqli_error());

?>