<?php 

class ajaxValidate {

	function formValidate() {
	
		//Store the email/output message & set default to no errors
		$emailMessage = "";
		$successMessage = "<h2>Success!</h2><p>The following message has been sent as part of your request. Please note that if your photo does not have the required information, your email will not be responded to.</p><hr>";
		$errorMessage = "";
		$error = false;	
	

		//Check for empty fields
		if ( !isset( $_POST['email'] ) ) {
			$error = true;
			$errorMessage .= "<p>I'll need your email address.</p>";
		}
		if ( !isset($_FILES['fileToUpload']) ) {
			$error = true;
			$errorMessage .= "<p>You'll need to upload the required image.</p>";
		}
		if ( !isset( $_POST['movie'] ) ) {
			$error = true;
			$errorMessage .= "<p>Please do not alter the code of the page.</p>";
		}
		
		//Validate the inputs
		if ( $error == false ) {

			$email = trim( $_POST['email'] );
			$email = htmlspecialchars($email);
			if ( !filter_var( $email, FILTER_VALIDATE_EMAIL ) ) {
			    $error = true;
				$errorMessage .= "<p>I'll need a valid email address.</p>";
			}
			
			if ( !exif_imagetype( $_FILES['fileToUpload']["tmp_name"] ) ){
				$error = true;
				$errorMessage .= "<p>I'll need a valid image type. I suggest JPEG or PNG.</p>";
			}
			
			$movie = htmlspecialchars($_POST['movie']);

			$textarea_unprocessed = trim($_POST['textarea']);
			if( strlen($textarea_unprocessed) > 0 ){
				$textarea = htmlspecialchars($textarea_unprocessed);
			}

		}
		
		if ( $error == false ) {

			$imgEncoded = base64_encode(file_get_contents( $_FILES["fileToUpload"]["tmp_name"] ));
			
			// Email to Case Ware
			$to = "conrad@128k.ca";
			
			$subject = "Request for a copy of " . $movie ;
			
			// Message for Website Administrator
			$emailMessage .= "<div>";
			$emailMessage .= "<p>Please send a link for <strong>" . $movie . "</strong>";
			$emailMessage .= " to <strong>" . $email . "</strong>.</p>";
			$emailMessage .= "<p>Here is the proof they own the original:</p>";
			$emailMessage .= "<p><img alt='Embedded Image' src='data:image/png;base64," . $imgEncoded . "' /></p>";
			if ( $textarea ) {
				$emailMessage .= "<p>With a special message of:</p><p>".$textarea."</p>";
			}
			$emailMessage .= "</div>";
			
			
			$headers = "From:no-reply@conradmacintyre.com\r\n";
			$headers .= "Reply-To:" . $contactEmail . "\r\n";
			$headers .= "MIME-Version: 1.0\r\n";
			$headers .= "Content-Type: text/html; charset=utf-8\r\n";
			$headers .= "X-Mailer: PHP \r\n";
			
			mail($to,$subject,$emailMessage,$headers);	
			
			return $successMessage . $emailMessage;
		
		} else {
		
			return $errorMessage;
		
		}
	} //End function

}
 
$ajaxValidate = new ajaxValidate;

echo $ajaxValidate->formValidate();
?>