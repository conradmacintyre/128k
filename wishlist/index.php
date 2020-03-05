<!doctype html>
<html>
<head>
	<meta charset="utf-8"/>
	<title>Marked in the browser</title>
</head>
<body>
	<div id="content"></div>
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
  </script>
</body>
</html>