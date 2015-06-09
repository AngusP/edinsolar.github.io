/** Alter #site-nav classes based on vertical scroll position **/

$(document).ready(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() > ($(this).height() - 50)){
			$('#site-nav').addClass('woosh');
		} else {
			$('#site-nav').removeClass('woosh');
		}
	});
});

