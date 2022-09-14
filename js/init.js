(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space




$('.carousel').carousel();
setInterval(function() {
  $('.carousel').carousel('next');
}, 2000); // every 2 seconds

$(document).ready(function(){
  $('.sidenav').sidenav();
});


$(document).ready(function(){
  $('.slider').slider();
});