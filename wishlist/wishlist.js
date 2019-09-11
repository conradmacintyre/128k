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

function outputPrice( _item ) {
	if ( _item == true ) {
		return `<div class="price own">OWN</div>`;
	} else {
		return `<div class="price">$${_item}</div>`;
	}
}

// Builds the tables
function buildWishlistTable(_platform) {
	window[_platform].forEach( game => {
		let newCard = document.createElement('div'); 
		newCard.setAttribute('id', game.title.toLowerCase());
		newCard.setAttribute('class', _platform + '-card card');
		let html = `
		 		<div class="info" data-bg-img="${game.boxArt}">
		 			<img src="${game.boxArt}">
					<div class="specs">
						<span class="title">${game.title}</span>
						<span class="publisher">${game.publisher}</span>
						<span class="release-year">${game.releaseYear}</span>
					</div>`
					+outputPrice( game.price )
				+`</div>
				<!--a href="${game.imageLink}" class="image-link">Image</a-->
				<!--a href="${game.ebayLink}" class="ebay-link">eBay</a-->
				<div class="checklist">`
					
					+amLookingFor( 'Cart', game.checklistCart )
					+amLookingFor( 'Disc', game.checklistDisc )
					+amLookingFor( 'Manual', game.checklistManual )
					+amLookingFor( 'Box', game.checklistBox )
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






