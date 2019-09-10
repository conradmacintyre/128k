// Returns different content based on input
function amLookingFor( _item, _value ) {
	if ( _value == true ) {
		return `<span class="${_item.toLowerCase()} need">${_item}</span>`;
	} else if ( _value == false ) {
		return `<span class="${_item.toLowerCase()} have">${_item}</span>`;
	} else if ( _value == null ) {
		return ``;
	}
}

// Constructs wishlist Table
function buildWishlistTable() {
	window.games.forEach( game => {
		let newCard = document.createElement('div'); 
		newCard.setAttribute('id', game.title.toLowerCase());
		newCard.setAttribute('class', 'card');
		let html = `
		 		<div class="info" data-bg-img="${game.boxArt}">
		 			<img src="${game.boxArt}">
					<div class="specs">
						<span class="title">${game.title}</span>
						<span class="publisher">${game.publisher}</span>
						<span class="release-year">${game.releaseYear}</span>
						<span class="platform">${game.platform}</span>
						<span class="image-link"><a href="${game.imageLink}">View the Complete-in-box contents of ${game.title}</a></span>
						<span class="ebay-link"><a href="${game.ebayLink}">Find ${game.title} on eBay</a></span>
					</div>
					<div class="price">${game.price}</div>
				</div>
				<div class="checklist">`
					+amLookingFor( 'Cart', game.checklistCart )
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
		document.getElementById('wishlist-cards').appendChild(newCard);
	});
} buildWishlistTable();