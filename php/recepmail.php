<?php
// lancement de la requête (on impose aucune condition puisque l'on désire obtenir la liste complète des propriétaires
	$hostname = "tuilalexzutuil.mysql.db";
	$user     = "tuilalexzutuil";
	$password = "Monkeybd1904";
	$nom_base_donnees = "tuilalexzutuil";

	// Connexion au serveur MySQL
	$conn = mysqli_connect($hostname, $user, $password, $nom_base_donnees) or die(mysqli_error());
$sql = 'SELECT * FROM msgcv';

// on lance la requête (mysqli_query) et on impose un message d'erreur si la requête ne se passe pas bien (or die)

$req = mysqli_query($conn, $sql);
if (!$req)
	echo 'Erreur SQL !<br />'.$sql.'<br />'.mysqli_error());
?>

		<table>
			<tr>
				<th>Nom</th>
				<th>Email</th>
				<th>Message</th>
			</tr>

<?php
// on va scanner tous les tuples un par un
echo 'ici ok';
while ($data = mysqli_fetch_array($req, MYSQLI_ASSOC)) {
	// on affiche les résultats
	echo 'Nom : '.$data['nom'].'<br />';
	echo 'Email : '.$data['email'].'<br />';
	echo 'Message : '.$data['message']'<br />';
}

mysqli_free_result ($req);
mysqli_close ();

?>
