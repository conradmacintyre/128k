//================================
//! Convert email links
//================================
function emailLinks(){
	let emailLinks = document.querySelectorAll('[href=email');
	emailLinks.forEach( link => {
		let user = link.getAttribute('user');
		let domain = link.getAttribute('domain');
		link.setAttribute('href','mailto:' + user + '@' + domain);
	});
} window.addEventListener('load', () => emailLinks());
