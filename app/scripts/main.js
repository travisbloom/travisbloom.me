$(function() {
  'use strict';
    //attaches the fastClick plugin to the body, improving mobile responsiveness
  FastClick.attach(document.body);
  //set the header text to the navIcon's section
  $( '.category-header' ).click(function() {
    //what section was clicked
    var section = $(this).attr('name');
    //capitalize the first letter and add it to the header section span
    $('#section-text').html(section[0].toUpperCase() + section.slice(1));
  });
  //moves down the page the first time a section is clicked
  $( '.category-header' ).one( 'click', function() {
      $('html, body').animate(
          { scrollTop: 550 }, 500
      );
  });
 //show header items on scroll
  $('#categories-container').waypoint({
    handler: function() {
      $('nav').toggleClass('scrolling');
    }
  });
  //toggles the animation class for the sidebar
  $('#aside-toggle').click(function(e) {
    e.preventDefault();
    $('nav, main').toggleClass('show-aside');
  });

  //add the sidebar event to swipes
  $(document.body).on('swipeleft', function() {
    if ($('main').hasClass('show-aside')) {
      $('nav, main').removeClass('show-aside');
    }
  });

  $(document.body).on('swiperight', function() {
    if (!$('main').hasClass('show-aside')) {
      $('nav, main').addClass('show-aside');
    }
  });
});