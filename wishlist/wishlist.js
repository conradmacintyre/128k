// Returns different content based on input
function amLookingFor( _item, _value ) {
	if ( _value == false ) {
		return `<span class="${_item.toLowerCase()} need">${_item}</span>`;
	} else if ( _value == true ) {
		return `<span class="${_item.toLowerCase()} have">${_item}</span>`;
	} else if ( _value == null ) {
		return ``;
	}
}

function outputStatus( _game ) {
	let checks = [ _game.checklistCart, _game.checklistDisc, _game.checklistManual, _game.checklistBox, _game.checklistMap, _game.checklistFoam, _game.checklistSleeve, _game.checklistPoster, _game.checklistRegcard, _game.checklistInsert ];
	let status = null;
	function statusUpdate( _state ) {
		if ( _state == true && ( status == true || status == null ) ) {
			status = true;
		} else if ( _state == true && ( status == false || status == 'incomplete' ) ) {
			status = 'incomplete';
		}  else if ( _state == false && ( status == false || status == null ) ) {
			status = false;
		}  else if ( _state == false && ( status == true || status == 'incomplete' ) ) {
			status = 'incomplete';
		} 
	}
	checks.forEach( _item => {
		if ( _item == true ) {
			statusUpdate(true);
		} else if ( _item == false ) {
			statusUpdate(false);
		}
	});

	if ( status == true ) {
		return `<div class="price own">OWN</div>`;
	} else if ( status == false) {
		return `<div class="price">$${_game.price}</div>`;
	} else {
		return `<div class="price incomplete">INCOMPLETE</div>`;
	}
}

// Builds the tables
function buildWishlistTable(_platform) {
	window[_platform].forEach( game => {
		let newCard = document.createElement('div'); 
		newCard.setAttribute('id', game.title.toLowerCase());
		newCard.setAttribute('class', _platform + '-card card');
		let html = `
		 		<div class="info ${_platform}" data-bgimg="${game.boxArt}">
					<div class="specs">
						<span class="title">${game.title}</span>
						<a class="popup-link image-popup" data-content="${game.title.replace(/\s+/g, '')}-${game.platform}-modal">
							<img src="images/image.png">
							<div id="${game.title.replace(/\s+/g, '')}-${game.platform}-modal" class="popup-content">
								<img src="${game.boxArt}">
							</div>
						</a>
					</div>`
					+outputStatus( game )
				+`</div>
				<!--a href="${game.imageLink}" class="image-link">Image</a-->
				<!--a href="${game.ebayLink}" class="ebay-link">eBay</a-->
				<div class="checklist">`
					// This should be a loop
					+amLookingFor( 'Cart', game.checklistCart )
					+amLookingFor( 'Disc', game.checklistDisc )
					+amLookingFor( 'Manual', game.checklistManual )
					+amLookingFor( 'Box', game.checklistBox )
					+amLookingFor( 'Map', game.checklistMap )
					+amLookingFor( 'Foam', game.checklistFoam )
					+amLookingFor( 'Sleeve', game.checklistSleeve )
					+amLookingFor( 'Poster', game.checklistPoster )
					+amLookingFor( 'Registration Card', game.checklistRegcard )
					+amLookingFor( 'Insert', game.checklistInsert )
				+`</div>
		 	</tr>
		`;
		newCard.innerHTML = html;
		document.getElementById( _platform + '-cards' ).appendChild(newCard);
	});
}

// Loop through the platforms
function platformLooper() {
	window.platforms.forEach( platform => {
		if ( window[platform] ) {
			buildWishlistTable( platform );
		}
	});
} platformLooper();






