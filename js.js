$(document).ready(function(){
	var a = $('.nav-link');
	a.click(function(){
	    var section = $(this).attr('href');
	    $('html, body').animate({
	      scrollTop: $(section).offset().top
	    }, 1000);
	});
});