// Randomize BGs for info-items
	var bgArray = [
		'a_faraizl',
		'a_otoole',
		'b_crane',
		'it-cave-tcc',
		'it-deadlights-tcc',
		'it-georgie-tcc',
		'it-mike-tcc',
		'it-plate-tcc',
		'j_brandis'
	];
	var itemArray = document.getElementsByClassName('info__image');
	if (itemArray.length > 0 && bgArray.length > itemArray.length) {
		for (i=0; i<itemArray.length; i++) {
			var img = Math.floor(Math.random() * bgArray.length);
			itemArray[i].style.backgroundImage = "url(images/" + bgArray[img] + ".jpg)";
			bgArray.splice(img,1);
		}
	} else {
		window.console && console.log('There are not enough images defined to ');
	}

// Image comparison
	// Call & init
	console.log("PRE");

	function compareInit(){
		console.log("RUN");
	  $('.compare__slider').each(function(){
	    var cur = $(this);
	    // Adjust the slider
	    var width = cur.width()+'px';
	    cur.find('.compare__resize img').css('width', width);
	    // Bind dragging events
	    drags(cur.find('.compare__handle'), cur.find('.compare__resize'), cur);
	  });
	}addPageLoad_Handler(compareInit);

	// Update sliders on resize. 
	// Because we all do this: i.imgur.com/YkbaV.gif
	function compareResize(){
	  $('.compare__slider').each(function(){
	    var cur = $(this);
	    var width = cur.width()+'px';
	    cur.find('.compare__resize img').css('width', width);
	  });
	}addResize_Handler(compareResize);

	function drags(dragElement, resizeElement, container) {
		
	  // Initialize the dragging event on mousedown.
	  dragElement.on('mousedown touchstart', function(e) {
	    
	    dragElement.addClass('draggable');
	    resizeElement.addClass('resizable');
	    
	    // Check if it's a mouse or touch event and pass along the correct value
	    var startX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
	    
	    // Get the initial position
	    var dragWidth = dragElement.outerWidth(),
	        posX = dragElement.offset().left + dragWidth - startX,
	        containerOffset = container.offset().left,
	        containerWidth = container.outerWidth();
	 
	    // Set limits
	    minLeft = containerOffset + 10;
	    maxLeft = containerOffset + containerWidth - dragWidth - 10;
	    
	    // Calculate the dragging distance on mousemove.
	    dragElement.parents().on("mousemove touchmove", function(e) {
	    	
	      // Check if it's a mouse or touch event and pass along the correct value
	      var moveX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
	      
	      leftValue = moveX + posX - dragWidth;
	      
	      // Prevent going off limits
	      if ( leftValue < minLeft) {
	        leftValue = minLeft;
	      } else if (leftValue > maxLeft) {
	        leftValue = maxLeft;
	      }
	      
	      // Translate the handle's left value to masked divs width.
	      widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
				
	      // Set the new values for the slider and the handle. 
	      // Bind mouseup events to stop dragging.
	      $('.draggable').css('left', widthValue).on('mouseup touchend touchcancel', function () {
	        $(this).removeClass('draggable');
	        resizeElement.removeClass('resizable');
	      });
	      $('.resizable').css('width', widthValue);
	    }).on('mouseup touchend touchcancel', function(){
	      dragElement.removeClass('draggable');
	      resizeElement.removeClass('resizable');
	    });
	    e.preventDefault();
	  }).on('mouseup touchend touchcancel', function(e){
	    dragElement.removeClass('draggable');
	    resizeElement.removeClass('resizable');
	  });
	}


