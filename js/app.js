
$(document).ready(function () {

  $('.ryu').on('mouseenter', function () {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .on('mouseleave', function () {
    $('.ryu-still').show();
    $('.ryu-ready').hide();
  });

});
