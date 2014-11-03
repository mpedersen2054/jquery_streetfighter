
$(document).ready(function () {
  
  var ryuStill = $('.ryu-still'),
      ryuReady = $('.ryu-ready'),
      ryuThrowing = $('.ryu-throwing'),
      hadouken = $('.hadouken');

  $('.ryu').on('mouseenter', function () {
    ryuStill.hide();
    ryuReady.show();
  })
  .on('mouseleave', function () {
    ryuStill.show();
    ryuReady.hide();
  })
  .on('mousedown', function () {
    // play hadouken sound
    ryuReady.hide();
    ryuThrowing.show();
    hadouken.show();
    // animate hadouken to the right of the screen
  })
  .on('mouseup', function () {
    ryuThrowing.hide();
    ryuReady.show();
  });

});
