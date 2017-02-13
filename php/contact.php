<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TUIL Alexandre-CV Web</title>
    <!-- Fonts   -->
    <script src="https://use.fontawesome.com/455e4dec33.js"></script>
    <!-- CSS -->
    <!-- MAIN CSS -->
    <link rel="stylesheet" href="../css/contact.css" media="screen" title="no title">
</head>

<body>
<?php

	//define the receiver of the email
	define('TO_EMAIL','tuil_alexandre@hotmail.com');

	//define the subject of the email
	define('SUBJECT','Contact from your website');

	// Messages
	define('MSG_INVALID_NAME','Please enter your name.');
	define('MSG_INVALID_EMAIL','Please enter valid e-mail.');
	define('MSG_INVALID_MESSAGE','Please enter your message.');
	define('MSG_SEND_ERROR','Sorry, we can\'t send this message.');

	// Sender Info
	$name = trim($_POST['nom']);
	$email = trim($_POST['email']);
	$message = trim($_POST['message']);
	$err = "";

	// Check Info
	$pattern = "^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$^";
	if(!preg_match_all($pattern, $email, $out)) {
		$err = MSG_INVALID_EMAIL; // Invalid email
	}
	if(!$email) {
		$err = MSG_INVALID_EMAIL; // No Email
	}
	if(!$message) {
		$err = MSG_INVALID_MESSAGE; // No Message
	}
	if (!$name) {
		$err = MSG_INVALID_NAME; // No name
	}

	//define the headers we want passed. Note that they are separated with \r\n
	$headers = "From: ".$name." <".$email.">\r\nReply-To: ".$email."";

	if (!$err){

		//send the email
		$sent = mail(TO_EMAIL,SUBJECT,$message,$headers);

		if ($sent) {
				// If the message is sent successfully print
				echo "<div style='display:flex;flex-direction:column;justify-content:center;align-items:center;width:30%;height:10em;margin-top:15em;box-shadow:2px 2px 5px #0E8EC4;font-size:1.500em;'><p>Votre message a bien été envoyé!</p> <a href='../index.html' style='text-decoration: none;margin:5%;'><button style='width:100%;height:2.5em;padding:2%;border:none;border-radius:5%;font-size:1.125em;color:#fff;background-color:#0E8EC4;box-shadow:2px 2px 5px #0E8EC4;'>Retour au CV</button></a></div>";
			} else {
				// Display Error Message
				echo MSG_SEND_ERROR;
			}
	} else {
		echo $err; // Display Error Message
	}
?>
<!-- MAIN JS -->
<script type="text/javascript" src="js/custom.js"></script>
</body>
</html>
