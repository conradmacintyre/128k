const commonPhrases = [
    'Let\'s Go!',
    'Checkpoint City',
    'It\'s a beautiful city',
    'NOOOO!',
    'YEESS!',
    'Dave says nonsense word(s)',
    'Dave hollers random noises',
    'Take care',
    'Hello my friends!',
    'Smack! Dat! Axe!',
    'Dave laughs at this own demise',
    'Zoom in on Dave\'s face',
    'Dave makes a face',
    'Fire (it) up!'
];
const uncommonPhrases = [
    'Gird up!',
    'Progress City',
    'Lore',
    'Learning!',
    'When I speak, I die',
    'Big dumb / brain!',
    'Dave mentions another streamer',
    'Dave breaks out in song',
    'New Jersey / Trolled',
    'He who waits, dies',
    'It\'s not a troll level unless...',
    'Well endowed',
    '*Food-coloured* Pipe',
    'Dave mentions his college days',
    'Boom-Boom',
    'P/Clutch Daddy',
    'DGR Guarantee',
    'Wait... what?',
    'Gouda / Cheddar / Cheese',
    '...look like an idiot...',
    'Ya boy / Makin\' plays',
    'Gamer / gaming'
];
const rarePhrases = [
    '...take our first clear',
    'Why do I talk?',
    'Gird thy loins!',
    'Fill thine horn (with oil)!',
    'Hot garbage',
    'Dave leaves the frame',
    'Dave lowers the green screen',
    'Holy rip!',
    'YOLO Bolo',
    'Rapscallion',
    'One more shot at the title',
    'Momma\'s nectar',
    'Dave wears a cheese hat'
];

let slots = [];

console.log(slots[2]);

(function slotFiller() {
    let phrases = [...commonPhrases];
    phrases.push(rarePhrases[Math.floor(Math.random() * rarePhrases.length)]);
    while (phrases.length < 25) {
        let uncommonPhrase = Math.floor(Math.random() * uncommonPhrases.length);
        console.log(uncommonPhrase, uncommonPhrases.length);
        phrases.push(uncommonPhrases[uncommonPhrase]);
        uncommonPhrases.splice(uncommonPhrase,1);
    }
    slots = [...phrases];
})();

console.log(slots[2]);

const winCombos = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25],
    [1,6,11,16,21],
    [2,7,12,17,22],
    [3,8,13,18,23],
    [4,9,14,19,24],
    [5,10,15,20,25],
    [1,7,13,19,25],
    [5,9,13,17,21]
];
let squares = [...document.getElementsByClassName('bingo-square')];
let bingoCalled = false;
let blackoutCalled = false;

function doBingo() {
    console.log('dobingo called');
    if ( !bingoCalled ) {
        bingoCalled = true;
        document.getElementById('bingo').classList.add('animate');
    }
}

function doBlackout() {
    console.log('dobblackout called');
    if ( !blackoutCalled ) {
        blackoutCalled = true;
        document.getElementById('blackout').classList.add('animate');
    }
}

function winYet() {
    let blackout = true;
    winCombos.forEach( (combo) => {
        let bingo = true;
        combo.forEach( (square) => {
            if ( squares[square-1].classList.contains('checked') ) {
                // do nothing
            } else {
                bingo = false;
                blackout = false;
            }
        });
        console.log(bingo);
        bingo ? doBingo() : null;
    });
    console.log(blackout);
    blackout ? doBlackout() : null;
}

function classToggle(_el) {
    _el.classList.contains('checked') ? _el.classList.remove('checked') : _el.classList.add('checked');
    winYet();
}

// Init
function initBingo() {
    squares.forEach( (el) => {
        if ( !el.classList.contains('free-space') ) {
            let phrase = Math.floor( Math.random() * slots.length );
            el.innerHTML = slots[phrase];
            slots.splice(phrase, 1);
        }
        el.addEventListener( 'click', () => {
            classToggle(el);
        });
    });
} document.addEventListener( 'load', initBingo() );
/**/