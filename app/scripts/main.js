$(function() {
  var openSection;
  //set the header text to the navIcon's section
  $( ".category-header" ).click(function() {
    openSection = $(this).attr('name');
  });
//    //moves down the page the first time a section is clicked
//    $( ".navIcon" ).one( "click", function() {
//        var n = $(document).height();
//        $('html, body').animate(
//            { scrollTop: 500 }, 500);
//    });
  //attaches the fastClick plugin to the body, improving mobile responsiveness
  FastClick.attach(document.body);
  //toggles the animation class for the sidebar
  $("#aside-toggle").click(function() {
    $("header, main").toggleClass("show-aside");
  });
//  //Header Scroll Effect
//  $('.category-headers').waypoint(function(direction) {
//    $("#headerText").text(openSection);
//    if (direction === "up"){
//      $("#headerText").text("");
//      $("#header-holder").removeClass().addClass("clean");
//    }
//    else{
//      $("#header-holder").removeClass().addClass("headerScroll");
//    }
//  });
});

