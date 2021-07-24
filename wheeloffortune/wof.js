/** EDITOR'S NOTES - EDITING **************************
 * This can be edited with any text editor, but if
 * you can use one that has Syntax Highlighting, that
 * will make mistakes much harder. There are many 
 * wonderful free editors like Atom, VS Code, or 
 * Sublime Text. The filetype for this document is
 * JavaScript.
 * 
 * Either way, edit with care, and if possible make a 
 * backup of this file so you can rollback if something
 * goes *really* sideway.
 * 
 * Happy puzzling!
*******************************************************/

const puzzles = [];
	/** EDITOR'S NOTES - PUZZLE CONFIG ********************
	 * The Puzzle is configured in a two-part equation,
	 * as you can see below.
	 * 
	 * The first part is the assignment of the puzzle to 
	 * a number key (the part in square brackets). It's
	 * best if you don't mess with this part.
	 * 
	 * The second part (after the equals sign) is the text 
	 * you read on screen. NOTE that the whole thing is 
	 * wrapped in double-quotes. These are critical, and 
	 * the page will break without them.
	 * 
	 * Also make a note of the semi-colon at the end of 
	 * the line. This is also important and can break the 
	 * page.
	 * 
	 * The Hint & Puzzle are separated by a pipe character.
	 * 
	 * The Hint will appear exactly as written.
	 * 
	 * The Puzzle is a string of characters representing 
	 * every space on the board. 52 total characters are 
	 * available across 4 rows (12, 14, 14, 12). This 
	 * script simply fills in the characters in order from 
	 * the top-left to the bottom-right.
	 * 
	 * Because it is difficult to track the number of blank
	 * spaces used, I have set each of " ", "*", and "+" to
	 * render as a blank space so that the empty spaces can
	 * be more easily tracked.
	 * 
	 * Also note that double-quotes - " - *can* be used in
	 * the puzzle, but MUST be escaped with a backslash "\"
	 * first.
	 * 
	 * Finally, any character that is NOT a letter will be
	 * revealed as soon as the puzzle loads.
	*******************************************************/
	puzzles[1] = "Sequels Assemble!|************+++AVENGERS:++*Infinity War*++++++++++++";
	puzzles[2] = "Perry the Platypus!?|Semi-Aquatic**Egg-Laying*****Mammal of*****Action***";
	puzzles[3] = "We Are All Canucks|*The Weeknd,++++Justin++++***Bieber,****+++& Drake++";
	puzzles[4] = "Probably Definitely Not Hoaxes|****The*****++Loch Ness+++**Monster &***++Ogopogo+++";
	puzzles[5] = "Canadian Confections|*Caramilk,**Coffee Crisp, Crispy Crunch  & Crunchie";
	puzzles[6] = "And Then There Were 3|************+Lucy, Alice++***& Daisy****++++++++++++";
	puzzles[7] = "Matthew, Mark, Luke & John|************+++++The++++++***Gospels****++++++++++++";
	puzzles[8] = "Expanding Ice|************+++Seattle++++***\"KRACKEN***++++++++++++";
	puzzles[9] = "Fusion|**The*best**+++place to+++*spend friday*++nights!+++";
	puzzles[0] = "Sing Along|************+++You Came+++***(Lazarus)**++++++++++++";
	//This last one cannot be loaded, I simply use it as a placeholder to build new puzzles with
	puzzles[10] = "HINT|************++++++++++++++**************++++++++++++";

/** EDITOR'S NOTES - AUDIO FILES **********************
 * These are the audio files used. You can change 
 * these files if you like. Just replace the file or 
 * update the filename to point to the new one.
 * 
 * Note the double-quotes and trailing semi-colon!
 * 
 * Paths are relative to THIS file.
*******************************************************/
const audioLetter = "ding.mp3"
const audioNoLetter = "buzz.mp3";
const audioReveal = "reveal.mp3";
const audioSolve = "solve.mp3";

/** EDITOR'S NOTES - STOP HERE ***************************
 * This song is about editing past this line and it's
 * called, "Don't You Do It!".
 * 
 * Feel free to poke around at your own risk, but 
 * don't be surprised if you break things messing about
 * down here. :)
*******************************************************/
const numbers = ["1","2","3","4","5","6","7","8","9","0"];
const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const $letters = [...document.getElementsByClassName('letter')];
const $hint = document.getElementById('hint');
const $used = document.getElementById('used');

document.addEventListener('keydown', processInput);

function processInput(e) {
  let char = e.key.toUpperCase();
  if ( numbers.includes(char) ) {
  	puzzleLoader(char);
  } else if ( letters.includes(char) ) {
  	letterReveal(char);
  } else if ( char == "!" ) {
  	puzzleReveal();
  } else if ( char == "," || char == "." ) {
  	playAudio(audioNoLetter);
  } else if ( char == "?" || char == "/" ) {
  	showInstructions();
  } else {
  	window.console && console.log(`${char} is not a valid input.`);
  }
}

function showInstructions() {
	document.getElementById('instructions').classList.toggle('display');
}

function playAudio(_file){
    let audio = document.createElement("audio");
    audio.src = _file;
    audio.addEventListener("ended", function () {
        document.removeChild(this);
    }, false);
    audio.play();   
}

function puzzleWiper() {
	$hint.innerHTML = '';
	let $letters = [...document.getElementsByClassName('letter')];
	$letters.forEach( $letter => {
		$letter.innerHTML = '';
		$letter.classList.remove('selected');
		$letter.classList.remove('solved');
	});
	[...$used.children].forEach( $span => {
			$span.classList.remove('selected');
	});
}

function puzzleLoader(_puzzle) {
	playAudio(audioReveal);
	puzzleWiper();
	let thisHint = puzzles[_puzzle].split("|")[0];
	$hint.innerHTML = thisHint;
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
	playAudio(audioSolve);
	$letters.forEach( $letter => {
  		$letter.classList.add('solved');
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
		playAudio(audioLetter);
	} else {
		playAudio(audioNoLetter);
	}
	[...$used.children].forEach( $span => {
		if ( $span.textContent == _char ) {
			$span.classList.add('selected');
		}
	});
}
