<!-- Header
Billboard
About Me
My Projects
Contact Form
Footer -->

<html>
	<head>
		<title>128k.ca | I Make Things</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="index.css?v=1.0">
	</head>
	<body>
		<header class="header" sticky>
			<a class="header-logo" href="/index.php">128k.ca</a>
			<div class="header-nav-wrapper">
				<div class="header-nav-trigger" data-ts=".header-nav">MENU</div>
				<nav class="header-nav" data-nav>
					<a href="#about-me">About Me</a>
					<a href="#projects">My Projects</a>
					<a href="#design-thoughts">Thoughts on Design</a>
					<a href="#contact-me">Contact Me</a>
				</nav>
			</div>
		</header>

		<div class="billboard">
			<div class="billboard-slide active" data-bgimg="https://i0.wp.com/dudeliving.com/wp-content/uploads/2014/11/video-game-room.jpg">
				<h1>Wishlist</h1>
				<p>Meet me on the Rainbow Road...</p>
			</div>
		</div>

		<section class="wishlist-cards" id="wishlist-cards">
			<!-- Populated with JS -->
		</section>

		<!-- Back to top -->
		<a href="jacascript:void(0);" class="backtotop"></a>
		
		<!-- Popup container -->
		<div id="popup-bg" class="popup-bg">
			<div id="popup-wrap" class="popup-wrap">
				<span id="popup-close" class="popup-close"></span>
				<div id="popup-container" class="popup-container"> </div>
			</div>
		</div>		

		<!-- Call Javascript -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
		<script src="../_js/library.min.js"></script>
		<script src="games-list.min.js"></script>
		<script src="wishlist.min.js"></script>
	</body>
</html>