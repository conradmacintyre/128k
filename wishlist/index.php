<!doctype html>
<html>
<head>
	<meta charset="utf-8"/>
	<title>Conrad's Wishlist</title>
	<link rel="stylesheet" type="text/css" href="index.css?v=1.0">
</head>
<body>
	<header class="header">
		<div class="header-nav-wrapper">
			<div class="header-nav-trigger" data-ts=".header-nav">MENU</div>
			<nav id="nav" class="header-nav" data-nav></nav>
		</div>
	</header>
	<div id="content" class="content"></div>
	<script src="../_js/marked.min.js"></script>
	<script>
	  	//***********************
	  	// File Importer
	  	//***********************
		function loadFile(fileToLoad) {
			let request = new XMLHttpRequest();
		    request.open("GET", fileToLoad, false);
		    request.send(null);
		    let returnValue = request.responseText;
		    // console.log(returnValue);
		    return returnValue;
		}

	    //***********************
	  	// Content Populator
	  	//***********************
	    document.getElementById('content').innerHTML = marked(loadFile('wishlist.txt'));

	    //***********************
	  	// Nav Maker
	  	//***********************
	  	function navMaker() {
	  		let headers = [...document.getElementsByTagName('H2')];
		  	// console.log(headers);
		  	headers.forEach( header => {
		  		let link = document.createElement('a');
		  		link.textContent = header.textContent;
		  		link.href = '#' + header.id;
		  		document.getElementById('nav').appendChild(link);
		  	});
	  	} window.addEventListener('load', () => navMaker());

	  	//***********************
	  	// Linker
	  	//***********************
	  	function itemLinker() {
	  		// This should be an  array
	  		const mgQ = 'https://www.mostlygames.ca/advanced_search_result.php?keywords=';
	  		const wvQ = 'https://www.willowvideogames.com/?eCommerceSearch=';
	  		const clQ = 'https://vancouver.craigslist.org/search/vga?query=';
	  		const fbQ = 'https://www.facebook.com/marketplace/105471749485955/search/?query=';
	  		const ebQ = 'https://www.ebay.ca/sch/i.html?_nkw=';
	  		let games = [...document.querySelectorAll('H3 + ul li')];
	  		games.forEach(game => {
	  			let q = game.innerText.split(',')[0].split('(')[0].replace(':','').replace(/ /g,'+').replace(/&/g,'and');
	  			// This should be a loop
	  			let links = ' &mdash; [';
	  			links += `<a href="${mgQ}${q}">MG</a> | `;
	  			links += `<a href="${wvQ}${q}">WV</a> | `;
	  			links += `<a href="${clQ}${q}">CL</a> | `;
	  			links += `<a href="${fbQ}${q}">FB</a> | `;
	  			links += `<a href="${ebQ}${q}">EB</a>`;
	  			links += ']';
	  			game.innerHTML += links;
	  		});
	  	} window.addEventListener('load', () => itemLinker());
  	</script>
  	<script src="../_js/library.min.js"></script>
</body>
</html>