
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
	 * the line. This is also important and will break the 
	 * page.
	 * 
	 * The Hint & Puzzle are separated by a pipe "|" 
	 * character.
	 * 
	 * The Hint will appear exactly as written.
	 * 
	 * The Puzzle is a string of characters representing 
	 * every space on the board. 52 total characters are 
	 * available across 4 rows (12, 14, 14, 12). This 
	 * script will center the characters on each line as 
	 * deliniated by you.
	 * 
	 * A caret "^" should be used as a line break. If 
	 * you use a caret as the first character, then the 
	 * top line will be empty. If any lines are TOO long 
	 * for the row they are in, the puzzle will not load.
	 * Trial & error FTW.
	 * 
	 * Also note that double-quotes - " - *can* be used in
	 * the puzzle, but MUST be escaped with a backslash "\"
	 * first. The same is true of the pipe character and
	 * the caret, for whatever that's worth.
	 * 
	 * Finally, any character that is NOT a letter will be
	 * revealed as soon as the puzzle loads.
	*******************************************************/
	puzzles[1] = "Values|^Kids, God,^Relationships,^Integrity";
	puzzles[2] = "What Character Matters|^Practice^what you^preach^";
	puzzles[3] = "Our Goal|Nobody^gets hurt and^everybody gets^home";
	puzzles[4] = "Rule to Live By|^Two workers^at all times^";
	puzzles[5] = "What's Appropriate|Touch^Kids' Lives,^nothing^else";
	puzzles[6] = "When You're Out of Your Depth|^Tag in,^Don't tap out^";
	puzzles[7] = "HINT|a^b^c";
	puzzles[8] = "HINT|^^^";
	puzzles[9] = "HINT|^^^";
	puzzles[0] = "HINT|^^^";
	//This last one cannot be loaded, I simply use it as a placeholder to build new puzzles with
	puzzles[10] = "HINT|^^^";

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
const $rows = [];
	  $rows[0] = [...document.getElementById('row1').getElementsByClassName('letter')];
	  $rows[1] = [...document.getElementById('row2').getElementsByClassName('letter')];
	  $rows[2] = [...document.getElementById('row3').getElementsByClassName('letter')];
	  $rows[3] = [...document.getElementById('row4').getElementsByClassName('letter')];
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
        // document.removeChild(this);
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

function lineFiller(_line,_index) {
	let line = [..._line];
	console.log('A',line);
	let row = $rows[_index];
	console.log('B',row);
	let offset = parseInt((row.length - line.length) / 2);
	console.log('C',offset);
	// for (offset; offset <= row.length; offset++) {
	while (line.length > 0) {
		console.log('CC',offset, row.length);
		let character = line[0].toUpperCase();
		console.log('D',character);
		if ( character == ' ') {
			row[offset].innerHTML = '';
			line.splice(0,1);
		} else if ( !letters.includes(character) ) {
			row[offset].innerHTML = character;
			row[offset].classList.add('selected');
			line.splice(0,1);
		} else if ( letters.includes(character) ) {
			row[offset].innerHTML = character;
			line.splice(0,1);
		}
		offset++;
	}
}

function puzzleLoader(_puzzle) {
	playAudio(audioReveal);
	puzzleWiper();
	let thisHint = puzzles[_puzzle].split("|")[0];
	$hint.innerHTML = thisHint;
	let thisPuzzle = puzzles[_puzzle].split("|")[1];
	let theLines = thisPuzzle.split("^");
	theLines.forEach ( (line,index) => {
		console.log("AA", line, index);
		if ( line.length > 0 ) {
			lineFiller(line, index);
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
