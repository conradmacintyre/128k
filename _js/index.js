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



//================================
//! AJAX form submission
//================================
// I would like to make this into vanilla JS.

function submitForm() {
	$('#form-submit').click(function(e) {
		e.preventDefault();
		$.ajax({
			url: '/validator.php',
			type: 'post',
			dataType: 'text',
			data: $('form.contact').serialize(),
			success: function(data) {
				if (data.length <= 15) {
					$('#form-submit').html(data);
					$('.message-container').html("");
				} else {
					$('.message-container').html(data);
				}
			}
		});
	});
} window.addEventListener('load', () => submitForm());