function familyFeud() {
	console.log('TEST');
			
	var $puzzle = $('#puzzle');
	var errors = 0;
    var points = 0;
    var $total = $('#total');
	        
	function updateTotal(num) {
        window.console && console.log(num);
        points += parseInt(num);
        total.innerText = points;
    }
    
    function puzzleLoader(num) {
        num -= 1;
        var $answers = $puzzle.find('.answer');
        var puzzle = puzzles[num];
        
        points = 0;
        errors = 0;
        
        $('.error').addClass('hide');
        $('.number').addClass('nonum').removeClass('open');
        updateTotal(0);
        $answers.each(function(i){
	    	var $this = $(this);
			var puzTxt = puzzle[i+1].split('|');
			if (puzTxt[0] != "") {
				$this.find('.number').removeClass('nonum');
	    	}
			$this.find('.text').text(puzTxt[0]);
			$this.find('.value').text(puzTxt[1]);
        });
        $puzzle.find('.question').text(puzzle[0]);
    }
    
    function revealAnswer(num) {
       	$puzzle.find('.answer').each(function(){
	        var $this = $(this);
	    	if ( $this.find('.char').text() == num ) {
		    	$this.find('.number').addClass('open');
		    	console.log( $this.find('.value').text() );
		    	updateTotal( $this.find('.value').text() );
	    	}
        });
    }
    
    function fireError() {
        errors += 1;
        if (errors < 4) {
	        $('.error' + errors).removeClass('hide');
	    }
        $('.errors').removeClass('hide');
        setTimeout( function(){
	        $('.errors').addClass('hide');
        }, 2000 );
    }
	
	$(window).keypress(function(e) {
		console.log(e, "TEST2");
	    if (e.which !== 0) {
	        
	        var character = String.fromCharCode(e.which);
	        // Load puzzles
			if ( character == '!' ) {
				puzzleLoader(1);
			} else if ( character == '@' ) {
				puzzleLoader(2);
			} else if ( character == '#' ) {
				puzzleLoader(3);
			} else if ( character == '$' ) {
				puzzleLoader(4);
			} else if ( character == '%' ) {
				puzzleLoader(5);
			} else if ( character == '^' ) {
				puzzleLoader(6);
			} else if ( character == '&' ) {
				puzzleLoader(7);
			} else if ( character == '*' ) {
				puzzleLoader(8);
			} else if ( character == '(' ) {
				puzzleLoader(9);
			// Reveal Answers
			} else if ( character == '1' ) {
				revealAnswer(1);
			} else if ( character == '2' ) {
				revealAnswer(2);
			} else if ( character == '3' ) {
				revealAnswer(3);
			} else if ( character == '4' ) {
				revealAnswer(4);
			} else if ( character == '5' ) {
				revealAnswer(5);
			} else if ( character == '6' ) {
				revealAnswer(6);
			} else if ( character == '7' ) {
				revealAnswer(7);
			} else if ( character == '8' ) {
				revealAnswer(8);
			// Fire error
			} else if ( character == 'x' ) {
				fireError();
			}
	    }
	});
} document.addEventListener( 'load', familyFeud() );