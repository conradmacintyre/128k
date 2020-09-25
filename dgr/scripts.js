const commonPhrases = [
    'Baby!',
    'Checkpoint City',
    'Dave dies right after CP',
    'Dave makes random noises',
    'Dave laughs at this own demise',
    'Dave makes a face',
    'Dave says a non-swear',
    'Fire (it) up!',
    'Hello my friends!',
    'It\'s a beautiful city',
    'Ohhhhhh',
    'Let\'s Go!',
    'NOOOO!',
    'Smack! Dat! Axe!',
    'Take care',
    'YEESS!',
    'Zoom in on Dave(\'s face)'
];

const uncommonPhrases = [
    'And then I spoke',
    'Big dumb / brain!',
    'Boom-Boom',
    'Cheese / Gouda / Cheddar',
    'Clench / Clenched / Clencher',
    'Dave breaks out in song',
    'Dave mentions his college days',    
    'Dave says nonsense word(s)',
    'Dave wears a hat',
    'DGR Guarantee',
    'Fifty-fifty / 50%',
    '*Food-coloured* Pipe',
    'Gamer / gaming',
    'It\' Christmas',
    'Hot ding-dong',
    'I (don\'t) understand',
    'Learning!',
    'P/Clutch Daddy',
    'Progress City',
    'The pioneers...',
    'Uncle DGR',
    'Wait... what?',
];

const rarePhrases = [
    'Dave leaves the frame',
    'Dave lowers the green screen',
    'Dave mentions another streamer',
    'Every hole is a chance for glory',
    'Fill thine horn (with oil)!',
    'Gird',
    'Holy rip!',
    'Hot garbage',
    'Lore',
    'Look like an idiot',
    'New Jersey',
    'No level left uncleared',
    'One more shot at the title',
    'Rapscallion',
    'Well endowed',
    'When I speak, I die',
    'Why do I talk?',
    'Ya boy / Makin\' plays',
    'YOLO Bolo'
];

// Bingo Slots Array-Maker
let slots = [...commonPhrases];
slots.push(rarePhrases[Math.floor(Math.random() * rarePhrases.length)]);
while (slots.length < 24) {
    let phraseNumber = Math.floor(Math.random() * uncommonPhrases.length);
    slots.push(uncommonPhrases[phraseNumber]);
    uncommonPhrases.splice(phraseNumber,1);
}

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
            if ( squares[square-1].classList.contains('checked') ) {
                // do nothing
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