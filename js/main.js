$(document).ready( function() {

	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

	FooterPopUp('.FAQ', '/pop_ups/FAQ.html', 300, 700);
	FooterPopUp('.about-me', '/pop_ups/about_me.html', 400, 720);
	FooterPopUp('.contact', '/pop_ups/contact_me.html', null, 500);

});

function FooterPopUp(element, content, height, width) {
	$(element).popup({
		content: content,
		height: height,
		width: width
	});
}
