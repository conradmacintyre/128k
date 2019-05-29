<?php 


	
	//Store the email/output message & set default to no errors
	$message = "";
	$successMessage = "<p>Success!</p>";
	$errorMessage = "";
	$error = false;	
	
	//Check for empty fields
	if ( !isset( $_POST['email'] ) ) {
		$error = true;
		$errorMessage .= "<p>I'll need your email address.</p>";
	}
	if ( !isset( $_POST['fileToUpload'] ) ) {
		$error = true;
		$errorMessage .= "<p>You'll need to upload the required image.</p>";
	}
	
	//Validate the inputs
	if ( $error == false ) {
		$email = trim( $_POST['email'] );
		if ( !filter_var( $email, FILTER_VALIDATE_EMAIL ) ) {
		    $error = true;
			$errorMessage .= "<p>I'll need a valid email address.</p>";
		}

		// check to make sure character length is over 2
		if ( !exif_imagetype( isset( $_POST['fileToUpload'] ) ) ){
			$error = true;
			$errorMessage .= "<p>I'll need a valid image type. I suggest JPEG or PNG.</p>";
		}
		
	}
	
	if ( $error == false ) {

		$imageFile = $_FILES["fileToUpload"]["tmp_name"];

		$imgEncoded = base64_encode(file_get_contents( $imageFile ));
		
		// Email to Case Ware
		$to = "conrad@128k.ca";
		
		$subject = "128k.ca Contact Form Submission";
		
		// Message for Website Administrator
		$message .= "<p>Please send a link for ";
		$message .= "(<span style='font-weight:bold'>" . $email . "</span>),";
		$message .= "<img alt='Embedded Image' src='data:image/png;base64,$imgEncoded' />";
		
		
		$headers = "From:no-reply@conradmacintyre.com\r\n";
		$headers .= "Reply-To:" . $contactEmail . "\r\n";
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=utf-8\r\n";
		$headers .= "X-Mailer: PHP \r\n";
		
		// mail($to,$subject,$message,$headers);	
		
		// return $successMessage;
		echo $successMessage;
	
	} else {
	
		// return $errorMessage;
		echo $errorMessage;
	
	}
?>