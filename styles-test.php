<!DOCTYPE html>

<html lang="en-ca">
	<head>
		<title>128k.ca | Creativity. Endeavored.</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="A creative professional for hire with experience in web development, video editing, and print.">
		<link href="https://fonts.googleapis.com/css?family=Ubuntu:400,400i,700&display=swap" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="test-styles.css?v=1.0">
	</head>
	<body>

		<header class="header" id="header">
			<a class="header-logo" href="/index.php">128k.ca</a>
			<div class="header-nav-wrapper">
				<div class="header-nav-trigger" data-ts=".header-nav">MENU</div>
				<nav class="header-nav" data-nav>
					<a href="#forms">Forms</a>
				</nav>
			</div>
		</header>

		<div class="wrapper contact-wrapper animate-in" data-st  id="contact">
			<section class="contact">
				<h2>Forms</h2>
				<form class="test-form" name="test-form" method="post">
					<label class="label-name" for="form-name">Name:</label>
					<input class="input-name" required type='text' name='name' id='form-name' value='' placeholder="Name">
					<input type="button">
					<input type="checkbox">
					<input type="color">
					<input type="date">
					<input type="datetime-local">
					<input type="email">
					<input type="file">
					<input type="hidden">
					<input type="image">
					<input type="month">
					<input type="number">
					<input type="password">
					<input type="radio">
					<input type="range">
					<input type="reset">
					<input type="search">
					<input type="submit">
					<input type="tel">
					<input type="text">
					<input type="time">
					<input type="url">
					<input type="week">
				</form>
			</section>
		</div>

		<footer>
			<p>&copy; 2014<?php if ( date("Y") > 2014 ) { echo "-".date("Y"); } ?>, <a href="email" user="conrad" domain="128k.ca">Conrad MacIntyre</a>.</p>
		</footer>

		<!-- Back to top -->
		<a href="#header" class="backtotop">▲</a>

		<!-- Popup container -->
		<div id="popup-bg" class="popup-bg">
			<div id="popup-wrap" class="popup-wrap">
				<span id="popup-close" class="popup-close"></span>
				<div id="popup-container" class="popup-container"> </div>
			</div>
		</div>

		<!-- Call Javascript -->
		<script>
			
		</script>
		<script src="_js/library.min.js"></script>
		<!--script src="_js/index.min.js"></script-->
	</body>
</html>