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
					<a href="#nes-cards">NES</a>
					<a href="#snes-cards">SNES</a>
					<a href="#n64-cards">N64</a>
					<a href="#ngc-cards">GCN</a>
					<a href="#wii-cards">Wii</a>
					<a href="#wiiu-cards">Wii U</a>
					<a href="#nsw-cards">Switch</a>
					<a href="#atari-cards">7800</a>
					<a href="#gen-cards">Genesis</a>
					<a href="#ps1-cards">PS1</a>
					<a href="#ps2-cards">PS2</a>
					<a href="#ps3-cards">PS3</a>
					<a href="#ps4-cards">PS4</a>
				</nav>
			</div>
		</header>

		<div class="billboard">
			<div class="billboard-slide active" data-bgimg="https://i0.wp.com/dudeliving.com/wp-content/uploads/2014/11/video-game-room.jpg">
				<h1>Wishlist</h1>
				<p>Meet me on the Rainbow Road...</p>
			</div>
		</div>

		<section class="cards nes-cards" id="nes-cards"></section>
		<section class="cards atari-cards" id="atari-cards"></section>
		<section class="cards gen-cards" id="gen-cards"></section>
		<section class="cards snes-cards" id="snes-cards"></section>
		<section class="cards ps1-cards" id="ps1-cards"></section>
		<section class="cards n64-cards" id="n64-cards"></section>
		<section class="cards ps2-cards" id="ps2-cards"></section>
		<section class="cards ngc-cards" id="ngc-cards"></section>
		<section class="cards ps3-cards" id="ps3-cards"></section>
		<section class="cards wii-cards" id="wii-cards"></section>
		<section class="cards ps4-cards" id="ps4-cards"></section>
		<section class="cards wiiu-cards" id="wiiu-cards"></section>
		<section class="cards nsw-cards" id="nsw-cards"></section>

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