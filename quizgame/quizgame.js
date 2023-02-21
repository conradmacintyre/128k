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
	"title": "Random 60s",
	"darkColor": "#2f1b19",
	"lightColor": "#ea449d",
	"accentColor": "#296fbb",
	"font": "Helvetica, Helvetica Neue, Futura, Verdana, sans-serif",
	"bgImage": "1960s.jpg",
	"questions": [
		"Who had a US top ten hit with the song \"When Will I Be Loved\" in 1960?|Linda Ronstadt|Roy Orbison|Ricky Nelson|*The Everly Brothers|everly-brothers.jpg",
		"What ship ran aground on the shore of \"an uncharted desert isle\" marooning its crew on \"Gilligan's Island\"? |S.S. Gilligan| S.S. Seaman|S.S. Mariner|*S.S. Minnow|ss-minnow.jpg",
		"The first NFL Super Bowl was played in January of this year. |1966|*1967|1968|1965|superbowl-1967.jpg",
		"Recorded in 1964, which Beatle's hit song has the lyric - \"You know I work all day to get you money to buy you things\"? |*A Hard Day's Night| We Can Work it Out|I Want to Hold Your Hand|Can't Buy Me Love|beatles.jpg",
		"The first worldwide dance craze, what 1960s dance was inspired by rock and roll music and specifically Chubby Checker? |The Monster Mash|*The Twist|The Hully Gully|Mashed Potato|chubby-checker.jpg",
		"Which of the following James Bond movies was NOT released during the sixties? |*The Man with the Golden Gun| Goldfinger|From Russia with Love|Thunderball|golden-gun.jpg",
		"What sitcom series followed the adventures of seven castaways as they attempted to survive after being shipwrecked on an island? |The Avengers| Days of our Lives|*Gilligan's Island|Green Acres|gilligans-island.jpg",
		"On the TV sitcom \"Beverly Hillbillies\", what was granny's name? |Pearly Jane|Liza Jane|Hattie Louise|Daisy May Moses|granny.jpg",
		"What color is Captain Kirk's tunic in most of the Star Trek episodes? |*Green|Gold|Blue|Red|kirks-tunic.jpg",
		"Who whistled the opening theme on \"The Andy Griffith Show\"? |Toots Thielmans| Bob Keeshan|*Earle H. Hagen|Frank Sinatra|andy-griffith.jpg",
		"Which show, that first aired on November 23 1963, is still airing new episodes today?|Lost in Space|Get Smart|*Doctor Who|The Flintstones|doctor-who.jpg",
		"In 1962, this company opened its first store.|Piggly Wiggly  |K-Mart|Gold Circle|*Wal-Mart|wal-mart.jpg",
		"This astronaut became the first American to orbit the earth in 1962.|Neil Armstrong |Yuri Gagarin|Norton Juster|*John Glenn|john-glenn.jpg",
		"This actress won an Academy Award for Best Actress in 1964 for her portayal of Mary Poppins.|Sophia Loren |Kim Stanley|Debbie Reynolds|*Julie Andrews|julie-andrews.jpg",
		"This author wrote the all-time great book To Kill A Mockingbird, published in 1960.|Madeleine L'Engle | Roald Dahl |*Harper Lee |Sylvia Plath|harper-lee.jpg"
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
const $last = document.getElementById('last-question');
const $question = document.getElementById('questionContent');
const $answers = document.getElementsByClassName('answer');
const $answer1 = document.getElementById('answer-1');
const $answer2 = document.getElementById('answer-2');
const $answer3 = document.getElementById('answer-3');
const $answer4 = document.getElementById('answer-4');
let bgImage;
let quizLoaded = false;
let correctAnswer = undefined;
let guesses = 0; //Can be used for cheeky replies
let quiz = JSON.parse(JSON.stringify(defaultQuiz));

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
	} else if ( character == "?" || character == "/" ) {
		showInstructions();
	}
}

function loadQuiz() {
	if ( !quizLoaded || confirm('You already have a puzzle loaded. Reload?') ) { 
		quizLoaded = true;
		correctAnswer = undefined;
		document.title = quiz.title;
		$title.innerHTML = quiz.title;
		$done.classList.add('hide');
		$last.classList.remove('show');
		loadStyles(quiz);
		nextQuestion();
	}
} loadQuiz();

function loadStyles(values) {
	let styles = `
		:root {
		  --white: ${values.lightColor};
		  --black: ${values.darkColor};
		  --accent: ${values.accentColor};
		  --font: ${values.font};
		}	
	`;
	const head = document.head;
	let overrideStyles = document.createElement('style');
	head.appendChild(overrideStyles);
	overrideStyles.type = 'text/css';
	overrideStyles.appendChild(document.createTextNode(styles));
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
		if ( questionArray[5] ) {
			document.body.style.backgroundImage = "url('" + questionArray[5] + "')";
		}
		if (quiz.questions.length == 1) {
			$last.classList.add('show');
		}
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

function dropHandler(ev) {
	// Prevent default behavior (Prevent file from being opened)
  	ev.preventDefault();
  	document.getElementById('drop-zone').classList.add('hide');
	let fileList = ev.dataTransfer.files;
	[...fileList].forEach(file => {
		if ( file.type.indexOf('image') > -1) {
			setImage(file);
		} else if ( file.type.indexOf('text') > -1) {
			parseGameText(file);
		} else {
			alert('Invalid file type. Upload a properly formatted .txt game file, or a .jpg, .jpeg, or .png file to use a background image.');
		}
	});
}

function parseGameText(file) {
	const reader = new FileReader();
	reader.addEventListener('load', (event) => {
		let textString = event.target.result;
		quiz = JSON.parse(textString);
		loadQuiz();
		quizLoaded = true;
	});
	reader.readAsText(file);
}


function setImage(file) {
	const reader = new FileReader();
	reader.addEventListener('load', (event) => {
		bgImage = event.target.result;
		document.body.style.backgroundImage = `url(${bgImage})`;
	});
	reader.readAsDataURL(file);
}

function dragOverHandler(ev) {
  ev.preventDefault();
  // Get this to style the DROP ZONE!
  document.getElementById('drop-zone').classList.remove('hide');
}




