const slots = [
    'Let\'s Go!',
    'Checkpoint City',
    'It\'s a beautiful city',
    'Progress City',
    'Gaining the lore',
    'Learning!',
    'Why do I talk?',
    'When I speak, I die',
    'Gird up!',
    'Gird thy loins!',
    'Fill thine horn (with oil)!',
    'NOOOO!',
    'YEESS!',
    'Big dumb!',
    'Smack! Dat! Axe!',
    'Dave leaves the frame',
    'Dave lowers the green screen',
    'Dave mentions another streamer',
    'Holy rip!',
    'New Jersey / Trolled',
    'He who waits, dies',
    'It\'s not a troll level unless...',
    'Dave breaks out in song',
    // 'Not like this!',
    'Well endowed', //firebar(s)!',
    'YOLO Bolo',
    'Right is always right',
    'Rapscallion',
    'Dave says nonsense word(s)',
    'Dave hollers random noises', //
    'Dave makes a face', //
    // 'Dave mentions hate of Boom-Boom',
    'Boom-Boom',
    'Clutch Daddy',
    'DGR Guarantee',
    'Excited skewer',
    'One more shot at the title',
    // 'Dang-flabbit!',
    '...take our first clear',
    'Momma\'s nectar',
    'Dave wears a cheese hat',
    'Gouda / Cheddar / Cheese',
    'Dave laughs at this own demise',
    '...look like an idiot...',
    'Ya boy / Makin\' plays',
    'Gamer / gaming',
    'Fire (it) up!'
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