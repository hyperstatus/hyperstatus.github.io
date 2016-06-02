// Ignore this...it just centers the "page content here" text"
$(function() {
  var setContentHeight = function() {
    var height = $(window).outerHeight(true) - $('#custom-footer').outerHeight(true) - $('#custom-header').outerHeight(true);
  
    $('.page-content').css('height',(height + 'px'));
  }
  setContentHeight();
  $(window).on('resize', function() {
    setContentHeight();});
});