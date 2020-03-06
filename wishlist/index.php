<!doctype html>
<html>
<head>
	<meta charset="utf-8"/>
	<title>Conrad's Wishlist</title>
	<link rel="stylesheet" type="text/css" href="index.css?v=1.0">
</head>
<body>
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
	  	// Content Populator
	  	//***********************
	    document.getElementById('content').innerHTML = marked(loadFile('wishlist.txt'));
  </script>
</body>
</html>