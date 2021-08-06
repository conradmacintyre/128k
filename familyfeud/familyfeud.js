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

const boards = {}
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
	boards.a = "Name a reason people prefer summer to winter|Warm Weather=39|Lighter Clothes=17|More Acivities=15|Beach=12|Fun=8|No Snow=4|Swimming=3|Happier=2";
	boards.b = "Besides eating, name something people do during their lunch break|Sleep/Nap=34|Exercise=18|Read=16|Shop=13|Go to Bank=11|Talk on Phone=8";
	boards.c = "Name a phrase that starts with \"Happy\"|Birthday=38|New Year=18|Anniversary=14|Days=11|Meal=10|Go Lucky=9";
	boards.d = "Name something specific people make reservations for|Dinner=35|Hotel=32|Airplane=20|Tours=6|Vacation=3|Car Rental=2|Cruise=2";
	boards.e = "Name an occupation bad drivers should avoid|Trucking=32|Bus Driver=28|Taxi Driver=21|Delivery Driver=6|Race Car=4|Ambulance=4|Chauffer=3|Heavy Equip.=2";
	boards.f = "Name something that's filtered|Water=50|Coffee=27|Air=10|Gasonline=5|Vacuum=4|Pool=4";
	boards.g = "Name the most annoying thing other drivers do on the road|No turn Signal=31|Cut you off=30|Drive too slow=13|Tailgating=12|Talk on cell phone=10|Speed=4";
	boards.h = "Name something associated with vampires|'Twilight'=33|Blood/bloodsucker=29|Garlic=9|Bat=7|Cape=7|Dracula=5|Fangs=4";
	boards.i = "Name a type of bear|Grizzly=27|Polar=22|Panda=21|Teddy=10|Brown=4|Black=3";
	boards.j = "Name a country with a lot of ice|Iceland=45|Russia=22|Canada=10|Greenland=9|Norway=5|Antarctica=4|Alaska=2";
	boards.k = "Name a superhero member of the Justice League|Batman=31|Superman=29|Wonder Woman=28|Aquaman=5|The Flash=4|Cyborg=2";
	boards.l = "Name a country with a name that starts with the letter A|Australia=26|Afghanistan=21|America=18|Albania=13|Algeria=6|Argentina=4|Armenia=2";
	boards.m = "Name a reason a person might be running|Exercise=36|Catch bus or train=26|Catch other person=13|Get somewhere=9|Sport/game=6|Escape/being chased=5|Broke the law=3";
	boards.n = "Name a part of your body that you might say has an 'ache'|Head=34|Stomach=33|Back=11|Tooth=7|Muscle=6|Knee=3|Ear=2";
	boards.o = "Name Marvel’s Avengers|Captain America=22|Iron Man=22|Black Panther=20|The Hulk=15|Thor=15|Black Widow=9|Spiderman=3|Hawkeye=3";
	boards.p = "Name an Occupation That Begins With the Letter “J”|Janitor=62|Judge/Justice=19|Jeweler=5|Jockey=4|Journalist=4|Juggler=3";
	boards.q = "Name Something You See Outside That Would Make You Want to Stay Inside|Bad Weather/Tornado=71|Bear/Animal=13|Zombies=3|Apocalypse=2|Fire/Smoke=2|Bad Celebrities=2";
	boards.r = "Where do kids nowadays spend most of their time?|Room/bed=28|School=22|Internet=16|Mall=12|Friend's house=10|Park=4|Work=4";
	boards.s = "Name a reason a person might wake up at 2:00 in the morning|Bathroom=24|Baby/child=19|Bad dream=16|Heard a noise=13|Hot/cold=12|Hungry/thirsty=6|Work=4|Itchy=2";
	boards.t = "Name a country that speaks Spanish|Spain=38|Mexico=24|United States=10 |Cuba=10|Argentina=4|Costa Rica=3|Chile=3|Colombia=3|Guatemala=2";
	boards.u = "Name a Harry Potter character|Harry Potter=52|Hermione=16|Ron=14|Fred/George=5|Newt Scamander=5|Dumbledore=3|Snape=2|Hagrid=2";
	boards.v = "Tell me a type of gun that doesn't shoot bullets|Nail gun=23|Stun gun=21|Water gun=18|BB gun=14|Biceps/muscles=8|Paintball gun=2|Son of a gun=2";
	boards.w = "";
	boards.x = "";
	boards.y = "";
	boards.z = "";

/** EDITOR'S NOTES - AUDIO FILES **********************
 * These are the audio files used. You can change 
 * these files if you like. Just replace the file or 
 * update the filename to point to the new one.
 * 
 * Note the double-quotes and trailing semi-colon!
 * 
 * Paths are relative to THIS file.
*******************************************************/
const audioCorrect = "correct.mp3";
const audioIncorrect = "incorrect.mp3";

/** EDITOR'S NOTES - STOP HERE ***************************
 * This song is about editing past this line and it's
 * called, "Don't You Do It!".
 * 
 * Feel free to poke around at your own risk, but 
 * don't be surprised if you break things messing about
 * down here. :)
*******************************************************/
const positions = ["1","2","3","4","5","6","7","8"];
const $board = document.getElementById('board');
const $hint = document.getElementById('hint');
const $total = document.getElementById('total');
let errors = 0;
let points = 0;

document.addEventListener('keydown', processInput);

function processInput(e) {
	let character = e.key.toLowerCase();
	if ( boards.hasOwnProperty(character) ) {
		boardLoader(character);
	} else if ( positions.includes(character) ) {
		revealAnswer(character);
	} else if ( character == "," || character == "." ) {
		fireError();
	} else if ( character == "?" || character == "/" ) {
		showInstructions();
	}
}

function showInstructions() {
	document.getElementById('instructions').classList.toggle('display');
}

function textFitter(_element) {
	let $inner = _element;
	let $wrapper = $inner.parentNode;
	let innerWidth = $inner.clientWidth;
	let wrapperWidth = $wrapper.clientWidth - 40;
	if ( innerWidth > wrapperWidth ) {
		$inner.style.transform = 'scaleX('+(wrapperWidth/innerWidth)+')';
	}
}

function boardLoader(_value) {
	resetBoard();
    let content = boards[_value].split('|');
    let hintLoaded = false;
    content.forEach( (_value,_index) => {
    	if ( _index == 0 ) {
    		$hint.innerHTML = content[_index];
    	} else if ( _index < 9 ) {
    		let text = _value.split('=')[0];
    		let value = _value.split('=')[1];
    		let $el = document.getElementById('answer-'+_index);
    		$el.classList.add('loaded');
    		$el.getElementsByClassName('text')[0].innerHTML = text;
    		$el.getElementsByClassName('value')[0].innerHTML = value;
    		textFitter($el.getElementsByClassName('text')[0]);
    	}
    });
}

function resetBoard() {
	errors = 0;
	points = 0;
	$total.innerHTML="00";
	$hint.innerHTML='';
	[...document.getElementsByClassName('answer')].forEach( _el => {
		_el.classList.remove('loaded');
		_el.classList.remove('revealed');
	});
	[...document.getElementsByClassName('text')].forEach( _el => {
		_el.innerHTML='';
	});
	[...document.getElementsByClassName('value')].forEach( _el => {
		_el.innerHTML='';
	});
}

function updatePoints(_value) {
    points += parseInt(_value);
    $total.innerHTML = points;
}

function revealAnswer(_number) {
	let $answer = document.getElementById('answer-'+_number);
	if ( !$answer.classList.contains('revealed') && $answer.classList.contains('loaded') ) {
		let value = parseInt($answer.getElementsByClassName('value')[0].textContent);
		updatePoints(value);
		$answer.classList.add('revealed');
		playAudio(audioCorrect);
	}
}

function fireError() {
	errors += 1;
    if (errors < 4) {
        document.getElementById('error-'+errors).classList.remove('hide');
        document.getElementById('errors').classList.remove('hide');
	    setTimeout( function(){
	        document.getElementById('errors').classList.add('hide');
	    }, 1000 );
		playAudio(audioIncorrect);
    }
}

function playAudio(_file){
    let audio = document.createElement("audio");
    audio.src = _file;
    audio.addEventListener("ended", function () {
        document.removeChild(this);
    }, false);
    audio.play();   
}







