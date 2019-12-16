<?php 

class ajaxValidate {

	function formValidate() {
	
	//Store the email/output message & set default to no errors
	$message = "";
	$successMessage = "<p>Success!</p>";
	$errorMessage = "";
	$error = false;	
	
	//If any required fields are not filled out, return error and continue
	if( !isset($_POST['name']) ) {
		$error = true;
		$errorMessage .= "<p>I'll need your name.</p>";
	}
	
	if( !isset($_POST['email']) ) {
		$error = true;
		$errorMessage .= "<p>I'll need your email address.</p>";
	}
	
	if( !isset($_POST['text']) ) {
		$error = true;
		$errorMessage .= "<p>What did you want me to do?</p>";
	}
	
	//If there are no errors, set some variables & check them out
	if ($error == false) {
		$name = trim($_POST['name'	]);
		$email= trim($_POST['email']);
		$text	= trim($_POST['text'	]);
	
		// check to make sure character length is over 2
		if(strlen($name) < 2){
			$error = true;
			$errorMessage .= "<p>I'll need your name.</p>";
		}
		
		if(strlen($email) < 2){
			$error = true;
			$errorMessage .= "<p>I'll need your email address.</p>";
		}
		
		if(strlen($text) < 2){
			$error = true;
			$errorMessage .= "<p>What did you want me to do?</p>";
		}
	}
	
	if ($error == false) {
		
		// Email to Case Ware
		$to = "conrad@128k.ca";
		
		$subject = "128k.ca Contact Form Submission";
		
		// Message for Website Administrator
		$message .= "<p>There was an email from <span style='font-weight:bold'>" . $name . "</span>";
		$message .= "(<span style='font-weight:bold'>" . $email . "</span>),";
		$message .= "who said, \"" . $text . "</p>";
		
		$headers = "From:no-reply@conradmacintyre.com\r\n";
		$headers .= "Reply-To:" . $contactEmail . "\r\n";
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=utf-8\r\n";
		$headers .= "X-Mailer: PHP \r\n";
		
		mail($to,$subject,$message,$headers);	
		
		return $successMessage;
	
	} else {
	
		return $errorMessage;
	
	}
	
	} //End function

}
 
$ajaxValidate = new ajaxValidate;

echo $ajaxValidate->formValidate();
?>