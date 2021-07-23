const puzzles = [];
	// Indented so this is human-readable
	puzzles[1] = "Sequels Assemble!|************+++AVENGERS:++*Infinity War*++++++++++++";
	puzzles[2] = "Perry the Platypus!?|Semi-Aquatic**Egg-Laying*****Mammal of*****Action***";
	puzzles[3] = "We Are All Canucks|*The Weeknd,++++Justin++++***Bieber,****+++& Drake++";
	puzzles[4] = "Probably Definately Not Hoaxes|****The*****++Loch Ness+++**Monster &***++Ogopogo+++";
	puzzles[5] = "Canadian Confections|*Caramilk,**Coffee Crisp, Crispy Crunch  & Crunchie";
	puzzles[6] = "And Then There Were 3|************+Lucy, Alice++***& Daisy****++++++++++++";
	puzzles[7] = "Matthew, Mark, Luke & John|************+++++The++++++***Gospels****++++++++++++";
	puzzles[8] = "Expanding Ice|************+++Seattle++++****KRACKEN***++++++++++++";
	puzzles[9] = "Fusion|**The*best**+++place to+++*spend friday*++nights!+++";
	puzzles[0] = "Sing Along|************+++You Came+++***(Lazarus)**++++++++++++";
	puzzles[10] = "HINT|************++++++++++++++**************++++++++++++"; //Don't change this, this is a placeholder
	
const boardLineSize = [12,14,14,12]; // Get this by parsing the HTML - NO Magic Numbers!
const boardSize = boardLineSize.reduce((a, b) => a + b, 0);
const numbers = ["1","2","3","4","5","6","7","8","9","0"];
const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const $puzzle = document.getElementById('puzzle');
const $row1 = document.getElementById('row1');
const $row2 = document.getElementById('row2');
const $row3 = document.getElementById('row3');
const $row4 = document.getElementById('row4');
const $letters = [...document.getElementsByClassName('letter')];
const $hint = document.getElementById('hint');
const $used = document.getElementById('used');
const audioLetter = new Audio('ding.mp3');
const audioNoLetter = new Audio('buzz.mp3');
const audioReveal = new Audio('reveal.mp3');
const audioSolve = new Audio('solve.mp3');

document.addEventListener('keydown', processInput);

function processInput(e) {
  let char = e.key.toUpperCase();
  if ( numbers.includes(char) ) {
  	puzzleLoader(char);
  } else if ( letters.includes(char) ) {
  	letterReveal(char);
  } else if ( char == "!" ) {
  	puzzleReveal();
  } else {
  	window.console && console.log (`${char} is not a valid input.`)
  }
}

function puzzleWiper() {
	$hint.innerHTML = '';
	let $letters = [...document.getElementsByClassName('letter')];
	$letters.forEach( $letter => {
		$letter.innerHTML = '';
		$letter.classList.remove('selected');
	});
	[...$used.children].forEach( $span => {
			$span.classList.remove('selected');
	});
}

function puzzleLoader(_puzzle) {
	audioReveal.play();
	// Clear out the old puzzle
	puzzleWiper();
	// Fill out the hint
	let thisHint = puzzles[_puzzle].split("|")[0];
	$hint.innerHTML = thisHint;
	// Build the puzzle
	let thisPuzzle = puzzles[_puzzle].split("|")[1];
	let thisLetters = [...thisPuzzle];
	$letters.forEach( $letter => {
		let character = thisLetters[0].toUpperCase();
		if ( character == ' ' || character == '*' || character == '+') {
			$letter.innerHTML = '';
			thisLetters.splice(0,1);
		} else if ( !letters.includes(character) ) {
			$letter.innerHTML = character;
			$letter.classList.add('selected');
			thisLetters.splice(0,1);
		} else if ( letters.includes(character) ) {
			$letter.innerHTML = character;
			thisLetters.splice(0,1);
		}
	});

}

function puzzleReveal() {
	audioSolve.play();
	$letters.forEach( $letter => {
  		$letter.classList.add('selected');
  	});
}

function letterReveal(_char) {
	let letterUsed = false;
	$letters.forEach( $letter => {
		if ( $letter.textContent == _char ) {
			$letter.classList.add('selected');
			letterUsed = true;
		}
	});
	if ( letterUsed ) {
		audioLetter.play();
	} else {
		audioNoLetter.play();
	}
	[...$used.children].forEach( $span => {
		if ( $span.textContent == _char ) {
			$span.classList.add('selected');
		}
	});
}
