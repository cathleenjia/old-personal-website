var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
});
// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});  


$('.grid').masonry({
  itemSelector: 'grid-about-item',
  transitionDuration: '0.025s'
});

$('.grid').masonry({
  itemSelector: 'grid-project-item',
  transitionDuration: '0.025s'
});

$('.project-gallery-grid').masonry({
  itemSelector: 'grid-item',
  transitionDuration: '0.025s'
});

$(document).ready(function(){


    $(".slidingDivHome").hide();
	$(".show_hide_home").show();
	
	$('.show_hide_home').click(function(){
	$(".slidingDivHome").slideToggle();
	});
  
    $(".slidingDivAbout").hide();
	$(".show_hide_about").show();
	
	$('.show_hide_about').click(function(){
	$(".slidingDivAbout").slideToggle();
	});

});

(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery

 function nocontext(e) {
        var clickedTag = (e==null) ? event.srcElement.tagName : e.target.tagName;
        if (clickedTag == "IMG")
          return false;
      }
      document.oncontextmenu = nocontext;
