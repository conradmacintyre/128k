const minefield = document.getElementById('minefield');
let bombPercentage = 10;
let totalBombs = 0;
const tileSize = 35;
let minefieldColumns = 0;
let minefieldRows = 0;
let totalTiles = 0;
let bombArray = [];

function minefieldStats() {
	let stats = minefield.getBoundingClientRect();
	minefieldColumns = parseInt(stats.width / tileSize);
	minefieldRows = parseInt(stats.height / tileSize);
	totalTiles = minefieldColumns * minefieldRows;
	totalBombs = parseInt(totalTiles / bombPercentage);
}

function makeMine(num,col,row) {
	let tile = document.createElement('span');
	tile.className = `tile col-${col} row-${row}`;
	tile.id = `tile-${num}`; 
	tile.setAttribute('data-col',col);
	tile.setAttribute('data-row',row);
	minefield.append(tile);
}

function setBombs() {
	totalBombs = parseInt(totalTiles / 100 * bombPercentage);
	let i = 1;
	while (i <= totalBombs) {
		let random = Math.floor(Math.random() * totalTiles);
		if ( bombArray.indexOf(random) == -1 ) {
			bombArray.push(random);
			i++
		}
	}
	bombArray.forEach(num => {
		document.getElementById('tile-' + num).classList.add('bomb');
	});
}

function setTouches() {
	let tiles = document.getElementsByClassName('tile');
	[...tiles].forEach( tile => {
		let row = parseInt(tile.getAttribute('data-row'));
		let col = parseInt(tile.getAttribute('data-col'));
		let bombTouches = 0;
		let preCol = col-1;
		let postCol = col+1;
		let preRow = row-1;
		let postRow = row+1;
		let neighbourTiles = [
			'.col-' + preCol  + '.row-' + preRow,
			'.col-' + col     + '.row-' + preRow,
			'.col-' + postCol + '.row-' + preRow,

			'.col-' + preCol  + '.row-' + row,
			'.col-' + postCol + '.row-' + row,

			'.col-' + preCol  + '.row-' + postRow,
			'.col-' + col     + '.row-' + postRow,
			'.col-' + postCol + '.row-' + postRow
		];
		neighbourTiles.forEach(neighbourTile => {
			let theTile = document.querySelectorAll(neighbourTile);
			if (theTile.length > 0) {
				if (theTile[0].classList.contains('bomb') ) {
					bombTouches++
				}
			}
		});
		if ( !tile.classList.contains('bomb') && bombTouches > 0) {
			tile.classList.add('touch');
			tile.setAttribute('data-touches',bombTouches);
			tile.innerText = bombTouches;
		} else if ( !tile.classList.contains('bomb') && bombTouches == 0) {
			tile.classList.add('empty');
		}
	});
}

function bombBlown(el) {
	console.log('Bomb Blown');
	el.classList.add('show');
}

function addFlag(el) {
	console.log(el,'flagged');
	el.classList.toggle('flagged');
}

function sprawl(el) {
	console.log('nothing here');
	let tile = el;
	let tileSet = [tile];
	console.log('A',tileSet);
	while (tileSet.length > 0) {
		let thisTile = tileSet[0];
		tileSet.splice(0,1);
		console.log('B',tileSet);
		let row = parseInt(tile.getAttribute('data-row'));
		let col = parseInt(tile.getAttribute('data-col'));
		let preCol = col-1;
		let postCol = col+1;
		let preRow = row-1;
		let postRow = row+1;
		let neighbourTiles = [
			'.col-' + preCol  + '.row-' + preRow,
			'.col-' + col     + '.row-' + preRow,
			'.col-' + postCol + '.row-' + preRow,
			'.col-' + preCol  + '.row-' + row,
			'.col-' + postCol + '.row-' + row,
			'.col-' + preCol  + '.row-' + postRow,
			'.col-' + col     + '.row-' + postRow,
			'.col-' + postCol + '.row-' + postRow
		];
		neighbourTiles.forEach(neighbourTile => {
			let theTile = document.querySelectorAll(neighbourTile);
			if (theTile.length > 0) {
				if (
					(theTile[0].classList.contains('empty') && !theTile[0].classList.contains('show'))
					||
					(theTile[0].classList.contains('touch') && !theTile[0].classList.contains('show'))
				) {
					console.log('C',tileSet);
					tileSet.push(theTile[0]);
					console.log('D',tileSet);
					theTile[0].classList.add('show');
				}
			}
		});
	}
}

function revealTile(el, dur) {
	if ( el.classList.contains('bomb') ) {
		bombBlown(el); 
	} else if ( el.classList.contains('touch') ) {
		sprawl(el);
	} else if ( el.classList.contains('empty') ) {
		sprawl(el);
	}
}

function findClickDuration(el) {
	let element = el;
	let holdDuration = -1;
	el.addEventListener('mousedown', () => {
		holdDuration = setTimeout(function() {
	    	addFlag(element);
	  	}, 800);
	});
	el.addEventListener('mouseup', () => {
		if (holdDuration >=0 && holdDuration < 800) {
			revealTile(element, holdDuration);
		}
		clearTimeout(holdDuration);
		holdDuration = -1;
	});
	el.addEventListener('mouseleave', el => {
		if (holdDuration >=0 && holdDuration < 800) {
			revealTile(element, holdDuration);
		}
		clearTimeout(holdDuration);
		holdDuration = -1;
	});
}

function interactiveTile() {
	let tiles = document.getElementsByClassName('tile');
	[...tiles].forEach( tile => findClickDuration(tile) );
}

function fieldBuilder() {
	// First calculate stuff
	minefieldStats();
	// Then build stuff
	let i = 1;
	let col = 0;
	let row = 0;
	while (i <= totalTiles) {
		col < minefieldColumns ? col++ : col = 1;
		col == 1 ? row++ : null;
		makeMine(i,col,row);
		i++;
	}
	// Set Bombs
	setBombs();
	//Set Touches
	setTouches();
	// Hook Up Tiles
	interactiveTile();
} window.addEventListener('load', () => fieldBuilder());





