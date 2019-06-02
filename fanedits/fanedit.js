// Image comparison (requires jQuery)
	// Call & init
	function compareInit(){
	  $('.compare__slider').each(function(){
	    var cur = $(this);
	    // Adjust the slider
	    var width = cur.width()+'px';
	    cur.find('.compare__resize img').css('width', width);
	    // Bind dragging events
	    drags(cur.find('.compare__handle'), cur.find('.compare__resize'), cur);
	  });
	} window.addEventListener('load',compareInit);

	// Update sliders on resize. 
	// Because we all do this: i.imgur.com/YkbaV.gif
	function compareResize(){
	  $('.compare__slider').each(function(){
	    var cur = $(this);
	    var width = cur.width()+'px';
	    cur.find('.compare__resize img').css('width', width);
	  });
	} window.addEventListener('resize',compareResize);

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
	    var minLeft = containerOffset + 10;
	    var maxLeft = containerOffset + containerWidth - dragWidth - 10;
	    
	    // Calculate the dragging distance on mousemove.
	    dragElement.parents().on("mousemove touchmove", function(e) {
	    	
	      // Check if it's a mouse or touch event and pass along the correct value
	      var moveX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
	      
	      var leftValue = moveX + posX - dragWidth;
	      
	      // Prevent going off limits
	      if ( leftValue < minLeft) {
	        leftValue = minLeft;
	      } else if (leftValue > maxLeft) {
	        leftValue = maxLeft;
	      }
	      
	      // Translate the handle's left value to masked divs width.
	      var widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
				
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
	  }).on('mouseup touchend touchcancel', function(){
	    dragElement.removeClass('draggable');
	    resizeElement.removeClass('resizable');
	  });
	}

// Form Submission (requires jQuery)
	function submitForm() {
		$("#form-submit").click(function (event) {
	        //stop submit the form, we will post it manually.
	        event.preventDefault();
	        // Get form
	        var form = $('#request-copy')[0];
			// Create an FormData object 
	        var data = new FormData(form);
	        // check host
	        let host = null;
	        if ( location.hostname.indexOf('local') ) {
	        	host = 'message_sender.php';
	        } else {
	        	host = '/test/fanedits/message_sender.php';
	        }
			// If you want to add an extra field for the FormData
	        data.append("CustomField", "This is some extra data, testing");
			// disabled the submit button
	        $("#form-submit").prop("disabled", true);
	        $.ajax({
	            type: "POST",
	            enctype: 'multipart/form-data',
	            url: host,
	            data: data,
	            processData: false,
	            contentType: false,
	            cache: false,
	            timeout: 600000,
	            success: function (data) {
	                $('#popup-container').html(data);
	                // console.log("SUCCESS : ", data);
	            },
	            error: function (e) {
	                $(".alert.error-message").text(e.responseText);
	                // console.log("ERROR : ", e);
	                $("#form-submit").prop("disabled", false);
	            }
	        });
	    });
	} window.addEventListener('load',submitForm);

