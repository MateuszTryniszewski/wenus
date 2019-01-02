//menu
var scrollState = 0;
var navClasses = document.getElementById('main-nav');
var scrollTop = function() {
  return window.scrollY;
};
var scrollDetect = function(home, down, up) {
  // Current scroll position
  var currentScroll = scrollTop();
  if (scrollTop() === 0) {
    home();
  } else if (currentScroll > scrollState) {
    down();
  } else {
    up();
  }
  scrollState = scrollTop();
};
function homeAction() {
    navClasses.classList.remove('scroll');
}
function downAction() {
  navClasses.classList.add('hidden');
  navClasses.classList.remove('scroll');

}
function upAction() {
  navClasses.classList.add('scroll');
  navClasses.classList.remove('hidden');
}
window.addEventListener("scroll", function() {
  scrollDetect(homeAction, downAction, upAction);
});
//menu end


window.sr = ScrollReveal();
sr.reveal('img,h1,h2,p,ul,li,address', {
    reset: false,
    delay: 200,
    distance: '50px',
    origin: 'right'
});


// scroll reveal


// //jquery code
// //menu - scroll effect
$(document).ready(function() { 
	$('a[href^="#"]').on('click', function(event) {
		var target = $( $(this).attr('href') );
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top - 80 
			}, 500);
		}
	});
});

$(function(){ 
  var navMain = $(".navbar-collapse"); // avoid dependency on #id
  // "a:not([data-toggle])" - to avoid issues caused
  // when you have dropdown inside navbar
  navMain.on("click", "a:not([data-toggle])", null, function () {
      navMain.collapse('hide');
  });
});

//preloader 
$(window).on('load', function () {
  $("#loader-wrapper").fadeOut();
});

