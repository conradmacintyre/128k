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
		    console.log(returnValue);
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
		  	console.log(headers);
		  	headers.forEach( header => {
		  		let link = document.createElement('a');
		  		link.textContent = header.textContent;
		  		link.href = '#' + header.id;
		  		document.getElementById('nav').appendChild(link);
		  	});
	  	} window.addEventListener('load', () => navMaker());
  	</script>
  	<script src="../_js/library.min.js"></script>
</body>
</html>