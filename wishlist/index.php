<!doctype html>
<html>
<head>
	<meta charset="utf-8"/>
	<title>Marked in the browser</title>
	<link rel="stylesheet" type="text/css" href="index.css?v=1.0">
</head>
<body>
	<div class="header-nav-wrapper">
		<div class="header-nav-trigger" data-ts=".header-nav">MENU</div>
		<nav id="nav" class="header-nav" data-nav>
			<a href="#test">Test</a>
		</nav>
	</div>
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
		    return returnValue;
		}
	    //***********************
	  	// Field Populator
	  	//***********************
	    document.getElementById('content').innerHTML = marked(loadFile('wishlist.txt'));
	    //***********************
	  	// Nav Maker
	  	//***********************
	  	let headers = [...document.getElementsByTagName('H2')];
	  	console.log(headers);
	  	headers.forEach( header => {
	  		let link = document.createElement('a');
	  		link.textContent = header.textContent;
	  		link.href = '#' + header.id;
	  		document.getElementById('nav').appendChild(link);
	  	});
  	</script>
  	<script src="../_js/library.min.js"></script>
</body>
</html>