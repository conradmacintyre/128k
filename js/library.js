// library.js

// Billboard
function initBillboard() {
	const billboards = document.querySelectorAll('[data-billboard]');
	billboards.forEach( billboard => {
		const slides = [...billboard.getElementsByClassName('billboard-slide')];
		const interval = parseInt(billboard.getAttribute('data-billboard')) * 1000;
		slides.forEach( slide => {
			let bgImg = slide.getAttribute('data-bgimg');
			slide.style.backgroundImage = 'url('+bgImg+')'
		});
		cycleActiveItem(slides,interval);
	});
} initBillboard();

function cycleActiveItem( array, interval ) {
	function cycle( array ) {
		for (let i=0; i<array.length; i++) {
			if ( array[i].classList.contains('active') ) {
				array[i].classList.remove('active');
				if ( i == array.length - 1 ) {
					array[0].classList.add('active');
				} else {
					array[i + 1].classList.add('active');
				}
				break;
			}
		}
	}
	let cycleTimer = setInterval(() => cycle( array ), interval);
}