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
		<link rel="stylesheet" type="text/css" href="../index.css?v=1.0">
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

		<section class="design-thoughts" id="design-thoughts">
			<table>
				<tbody id="wishlist-table">
					
				</tbody>
			</table>
		</section>

		<script>
			const games = {
				'contra': {
					'title': 'Contra',
					'box-art': 'url',
					'publisher': 'Konami',
					'release-year': '1987',
					'platform': 'NES',
					'image-link': 'http://classicgamesblog.com/wp-content/uploads/2012/07/Contra-NES-Complete-in-Box-Front.jpg',
					'ebay-link': 'ebay.ca',
					'checklist-cart': true,
					'checklist-box': true,
					'checklist-manual': true,
					'checklist-foam': true,
					'checklist-sleeve': true,
					'checklist-poster': null,
					'checklist-regcard': null,
					'price': '101'
				}
			}

			// Constructs wishlist Table
				//Builds the HTML structure from our JSON Obj
				function buildWishlistTable() {
					//Loop through the array of games
					Object.keys(games).forEach( game => {
						let html = `<tr id="Contra">
								 		<td class="box-art">Box Art</td>
										<td class="game-info">
											<span class="title">${games[title]}</span>
											<span class="publisher">${games[publisher]}</span>
											<span class="release-year">1987</span>
											<span class="platform">Nintendo Entertainment System</span>
											<span class="image-link">Contra</span>
											<span class="ebay-link">Contra</span>
										</td>
										<td class="checklist">
											<span class="cart"></span>
											<span class="box"></span>
											<span class="manual"></span>
											<span class="foam"></span>
											<span class="sleeve"></span>
											<span class="poster"></span>
										</td>
										<td class="price">101</td>
								 </tr>`
						;
						let wishlistTable = document.getElementById('wishlist-table');
						wishlistTable.appendChild(html);
					}
				)} buildWishlistTable();
		</script>
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
	</body>
</html>