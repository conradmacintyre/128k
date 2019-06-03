
//Basic Functionality
	var hide = function(el) {
		el.classList.remove('active');
		el.classList.add('non-active');
	};

	var addId = function(el) {
		el.classList.add('active');
		el.onclick = function(){
			hide(this)
		};
	};

	var answers = document.getElementsByClassName('answer');
	var len = answers.length;
	for (var i=0; i<len; i++) {
		answers[i].onclick = function(){
			addId(this)
		};
	}

//Show answer key
	var q = window.location.search;
	if ( q.length > 0 ) {
		q = q.split("?")[1].split("&");
		var _qL = q.length;
		for (var _i=0; _i<_qL; _i++) {
			var _param = q[i],
				_key = _param.split("=")[0],
				_val = _param.split("=")[1]
			;
			if ( _key === 'answerkey' && _val === 'true') {
			    document.body.classList.add('answerkey');
			}
		}
	}

// Columns
	var _macgyver = {
		category: "MacGyver",
		questions: [
			{
				a: "He was MacGyver's long-time friend and pilot, played by Bruce McGill",
				q: "Who is Jack Dalton?"
			},
			{
				a: "He is MacGyver's boss at the Phoenix Foundation, but they met working for the DXS.",
				q: "Who is Peter Thornton?"
			},
			{
				a: "This man was MacGyver's recurring nemesis, played by Michael Des Barres.",
				q: "Who is Murdoc?"
			},
			{
				a: "In the season 7 episode \"Good Knight, MacGyver\" we learn that this is MacGyver's first name.",
				q: "What is Angus?"
			},
			{
				a: "MacGyver was filmed in these two cities during it's seven-year run.",
				q: "What are Vancouver and Los Angeles?"
			}
		]
	}
	var _pixar = {
		category: "Pixar",
		questions: [
			{
				a: "In this film Cruz proved she is not just a trainer.",
				q: "What is \"Cars 3\"?"
			},
			{
				a: "This garbage cleaning robot finds the first signs of new life.",
				q: "Who is Wall-E?"
			},
			{
				a: "An elderly man tries to keep a promise to his dead wife by turning his house into an improvised airship in this Pixar classic.",
				q: "What is \"Up\"?"
			},
			{
				a: "This movie teaches us that laughter is 10 times more powerful than screams.",
				q: "What is \"Monsters, Inc.\"?"
			},
			{
				a: "A small-town western sheriff and a man from space eventually become friends in this 1995 film.",
				q: "What is \"Toy Story\"?"
			}
		]
	}

// Puzzels
	var puzzle_0 = [_macgyver,_macgyver,_macgyver,_macgyver,_macgyver];
	var puzzle_1 = [_macgyver,_pixar,_macgyver,_pixar,_macgyver];
	var puzzle_2 = [_macgyver,_macgyver,_macgyver,_macgyver,_macgyver];
	var puzzle_3 = [_macgyver,_macgyver,_macgyver,_macgyver,_macgyver];
	var puzzle_4 = [_macgyver,_macgyver,_macgyver,_macgyver,_macgyver];
	var puzzle_5 = [_macgyver,_macgyver,_macgyver,_macgyver,_macgyver];
	var puzzle_6 = [_macgyver,_macgyver,_macgyver,_macgyver,_macgyver];
	var puzzle_7 = [_macgyver,_macgyver,_macgyver,_macgyver,_macgyver];
	var puzzle_8 = [_macgyver,_macgyver,_macgyver,_macgyver,_macgyver];
	var puzzle_9 = [_macgyver,_macgyver,_macgyver,_macgyver,_macgyver];

// Build the HTML of the page
var puzzleWrap = document.getElementById('puzzle');
console.log("pretest");
function buildTable() {
	// Reset the table
	console.log("test");
	puzzleWrap.innerHTML = "";
	document.addEventListener('keydown', (_e) => {
	  const _keyName = _e.key;
	  console.log('keydown event\n\n' + 'key: ' + _keyName);
	});
	        
	        // var $character = String.fromCharCode(e.which);
	        
	        //This can be much, much better
			// if ( $character == '1' ) {
			// 	$('.puzzle').removeClass('selected');
			// 	$('.letter').removeClass('selected');
			// 	$('.used span').removeClass('selected');
			// 	$puzzle = $('.p1');
			// 	$puzzle.addClass('selected');
			// 	$('.hint').text( $puzzle.attr('data-hint') );
			// } else if ( $character == '2' ) {
			// }
}

buildTable();
/*
<div class="column">
		<div class="column__heading"></div>
		<div class="column__row">
			<span class="column__answer"></span>
			<span class="column__value"></span>
			<span class="column__question"></span>
		</div>
		<div class="column__row">
			<span class="column__answer"></span>
			<span class="column__value"></span>
			<span class="column__question"></span>
		</div>
		<div class="column__row">
			<span class="column__answer"></span>
			<span class="column__value"></span>
			<span class="column__question"></span>
		</div>
		<div class="column__row">
			<span class="column__answer"></span>
			<span class="column__value"></span>
			<span class="column__question"></span>
		</div>
		<div class="column__row">
			<span class="column__answer"></span>
			<span class="column__value"></span>
			<span class="column__question"></span>
		</div>
	</div>
*/
