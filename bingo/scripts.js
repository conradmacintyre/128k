const slots = [
    'Charged with an "Air"',
    'Big and Strong"',
    'Talking to him before the game',
    '"Get up ball" caught on the track',
    '"Get up, ball!"',
    'Pat echos Buck',
    'He\'s an athlete',
    '(pause) "chew and chew"',
    '...try to do too much...',
    'Mookie Betts',
    'Soft hands',
    '"You know who he reminds me of?"',
    'He\'s a ballplayer',
    'The shift is bad',
    'Makes up dugout convo',
    'Pat loves opposing player',
    '"Well it sure is"',
    'Welcome to the big leagues',
    '2015 ALCS',
    'Start the runner here?',
    'Mocks own playing days',
    'Aaron Judge',
    'This one\'s gonna go!',
    '(hoarse laugh)',
    'On the corner',
    'Good lookin\' pitch',
    'Yankees',
    'He\'s a ballplayer',
    'Gold Glove'
];
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
    if ( !bingoCalled ) {
        bingoCalled = true;
        document.getElementById('bingo').classList.add('animate');
    }
}

function doBlackout() {
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
            if ( bingo != true && !squares[square-1].classList.contains('checked') ) {
                // null
            } else {
                bingo = false;
                blackout = false;
            }
        });
        bingo ? doBingo() : null;
    });
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
            classToggle(this);
        });
    });
} document.addEventListener( 'load', initBingo() );