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

/** EDITOR'S NOTES - PUZZLE CONFIG ********************
 * The boards are configured in a two-part equation,
 * as you can see below.
 * 
 * The first part (to the left of the equals sign)
 * assigns the board to a specific letter. This is the 
 * letter that will be used to load this specific 
 * board during the game. This has been designed to 
 * support up to 26 boards.
 * 
 * The seconc part (to the right of the equals sign) is
 * a text "string" that contains all the data to build 
 * and score the board. NOTE the surrounding 
 * double-quotes and the semi-colon at the end of the
 * line.
 * 
 * Each section is separated by a pipe character "|".
 * 
 * The first part MUST be the Hint text. Then a pipe 
 * character.
 * 
 * Then the answers, each separated by a pipe 
 * character. The values for each answer MUST come 
 * after the answer itself AND be separated by an 
 * equals sign.
 * 
 * Also note that double-quotes - " - *can* be used in
 * the puzzle, but MUST be escaped with a backslash "\"
 * first.
*******************************************************/
const defaultQuiz = {
	title: "PumpkinFest",
	primaryColor: "black",
	secondaryColor: "orange",
	questions: [
		"Which continent do pumpkins NOT grow on?|Africa|*Antartica|Asia|Europe",
		"Where is the pumpkin capital of the world?|Varna, Bulgaria|Chilliwack, BC|Mixco, Guatemala|*Morton, Illinois",
		"In what country did pumpkin carving originate?|*Ireland|America|Bulgaria|Russia",
		"What was the diameter of the largest pumpkin pie ever made?|3 Feet|4 Feet|*5 Feet|6 Feet",
		"Which of these did people used to think pumpkins would cure?|*Snake Bits|COVID 19|Tuberculosis|Rabies",
		"How much did the heaviest pumpkin ever weigh?|300 lbs|527 lbs|*1140 lbs|1372 lbs",
		"What percentage of pumpkin is water?|*90%|70%|50%|30%",
		"Where did pumpkins originate?|North America|*Central America|Europe|South America",
		"Which of these is NOT part of a pumpkin?|Ribs|*Spine|Seed Coat|Brains",
		"Which of these is NOT a pumpkin color?|Red|Blue|Green|*Purple",
		"Which of these can pumpkin lower?|Body Fat|Blood Pressure|*Cholesterol|Self Esteem",
		"Into which food group do pumpkins fit?|*Fruit|Veggie|Dairy|Meat",
		"How many millions of pounds of pumpkins were grown in 2005?|799|124|*496|654",
		"Which of these is NOT a type of pumpkin?|Spooktacular|Munchkin|Funny Face|*Pumptacular",
		"Which of these is NOT an ingredient in pumpkin pie?|Salt|Sugar|*Baking Soda|Flour",
		"What is the world record for fastest pumpkin carving?|*74.8 Seconds|55.2 Seconds|93.0 Seconds|45.5 Seconds",
		"How wide was the smallest pumpkin ever grown?|1/2 inch |*1/2 centimeter|1/2 foot|1/2 decimeter",
		"From what Greek word, meaning 'Large Melon' is the word Pumpkin derived?|Lepon|*Pepon|Mepon|Parthenon",
		"Which of these is known as the Pumpkin State?|New York|*New Hampshire|Illinois|Montana",
		"Which of these is Pastor Mike's favourite pumpkin food?|Pie|Loaf|*Scones|Seeds"
	]
}

/** EDITOR'S NOTES - AUDIO FILES **********************
 * These are the audio files used. You can change 
 * these files if you like. Just replace the file or 
 * update the filename to point to the new one.
 * 
 * Note the double-quotes and trailing semi-colon!
 * 
 * Paths are relative to THIS file.
*******************************************************/
const audioClear = "course-clear.mp3";
const audioCorrect = "you-got-it-dude.mp3";
const audioHallelujah = "hallelujah.mp3";
const audioBigBrain = "big-brain.mp3";
const audioIncorrect = "incorrect.mp3";
const audioPriceHorn = "price-horn.mp3";
const audioFogHorn = "fog-horn.mp3";


/** EDITOR'S NOTES - STOP HERE ***************************
 * This song is about editing past this line and it's
 * called, "Don't You Do It!".
 * 
 * Feel free to poke around at your own risk, but 
 * don't be surprised if you break things messing about
 * down here. :)
*******************************************************/
const $title = document.getElementById('title');
const $done = document.getElementById('all-done');
const $question = document.getElementById('questionContent');
const $answers = document.getElementsByClassName('answer');
const $answer1 = document.getElementById('answer-1');
const $answer2 = document.getElementById('answer-2');
const $answer3 = document.getElementById('answer-3');
const $answer4 = document.getElementById('answer-4');
let quizLoaded = false;
let correctAnswer = undefined;
let guesses = 0; //Can be used for cheeky replies
let quiz = {};

document.addEventListener('keydown', processInput);

function processInput(e) {
	let character = e.key.toLowerCase();
	if ( character == "a" ) {
		checkAnswer($answer1);
	} else if ( character == "b" ) {
		checkAnswer($answer2);
	} else if ( character == "c" ) {
		checkAnswer($answer3);
	} else if ( character == "d" ) {
		checkAnswer($answer4);
	} else if ( character == "n" ) {
		nextQuestion();
	} else if ( character == "l" ) {
		loadQuiz();
	} else if ( character == "?" || character == "/" ) {
		showInstructions();
	}
}

function loadQuiz() {
	if ( !quizLoaded || confirm('You already have a puzzle loaded. Reload?') ) { 
		quiz = JSON.parse(JSON.stringify(defaultQuiz));
		quizLoaded = true;
		correctAnswer = undefined;
		document.title = quiz.title;
		$title.innerHTML = quiz.title;
		$done.classList.add('hide');
		// Set primary color
		// Set secondary color
		// Set background image
		nextQuestion();
	}
}

function nextQuestion() {
	if (quizLoaded && quiz.questions.length > 0) {
		let randomQuestion = Math.floor(Math.random() * quiz.questions.length);
		let questionArray = quiz.questions[randomQuestion].split('|');
		quiz.questions.splice(randomQuestion,1);
		$question.innerHTML = questionArray[0];
		[...$answers].forEach( _el => _el.classList.remove('false','true') );
		guesses = 0;
		loadAnswer($answer1,questionArray[1]);
		loadAnswer($answer2,questionArray[2]);
		loadAnswer($answer3,questionArray[3]);
		loadAnswer($answer4,questionArray[4]);
	} else if (!quizLoaded) {
		alert("You'll need to load a quiz first. Press 'L' to load a quiz.");
	} else if (quiz.questions.length == 0) {
		$done.classList.remove('hide');
	// } else {
		// window.console && console.log("I don't know what's happening");
	}
}

function loadAnswer(answerNumber,answerValue) {
	if (answerValue.indexOf('*') > -1) {
		answerValue = answerValue.split('*')[1];
		correctAnswer = answerNumber;
	}
	answerNumber.innerHTML = answerValue;
}

function checkAnswer(value) {
	guesses++;
	if (value == correctAnswer) {
		// Add correct class
		value.classList.add('true');
		// Add incorrect classes
		[...$answers].forEach( _el => { if (_el != value ) { _el.classList.add('false') } } );
		// Play the correct sound
		switch (guesses) {
			case 1:
				playAudio(audioClear);
				break;
			case 2:
				playAudio(audioCorrect);
				break;
			case 3:
				playAudio(audioHallelujah);
				break;
			case 4:
				playAudio(audioBigBrain);
				break;
		}
	} else {
		value.classList.add('false');
		switch (guesses) {
			case 1:
				playAudio(audioIncorrect);
				break;
			case 2:
				playAudio(audioFogHorn);
				break;
			case 3:
				playAudio(audioPriceHorn);
				break;
		}
	}
}

function playAudio(_file){
    let audio = document.createElement("audio");
    audio.src = _file;
    audio.addEventListener("ended", function () {
        document.removeChild(audio);
    }, false);
    audio.play();   
}

function showInstructions() {
	document.getElementById('instructions').classList.toggle('display');
}







