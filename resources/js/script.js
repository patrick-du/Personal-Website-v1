$(document).ready(function() {

    /* STICKY NAV */
    $('.js--aboutme').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }    
    }, {
        offset: '70px;'
    });
    
    
    /* NAVIGATION SCROLL */
  
    $('a[href*="#"]').on('click', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 500, 'linear');
    });
    
    /* ANIMATIONS ON SCROLL */
    
});