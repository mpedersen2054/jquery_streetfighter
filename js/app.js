(function($, document) {
  var $ryuStill = $('.ryu-still'),
      $ryuReady = $('.ryu-ready'),
      $ryuThrowing = $('.ryu-throwing'),
      $hadouken = $('.hadouken'),
      $ryuCool = $('.ryu-cool');

  $('.ryu').on('mouseenter', function () {
    $ryuStill.hide();
    $ryuReady.show();
  })
  .on('mouseleave', function () {
    $ryuStill.show();
    $ryuReady.hide();
  })
  .on('mousedown', function () {
    playHadoukenSound();
    $ryuStill.hide();
    $ryuReady.hide();
    $ryuThrowing.show();
    $hadouken.finish().show()
    .animate(
      {'left': '1100px'},
      500,
      function () {
        $(this).hide();
        $(this).css('left', '500px');
      }
    );
  })
  .on('mouseup', function () {
    $ryuThrowing.hide();
    $ryuReady.show();
  });

  $('body').on('keydown', function (e) {
    if (e.which == 88) {
      $ryuStill.hide();
      $ryuReady.hide();
      $ryuThrowing.hide();
      $hadouken.hide();
      $ryuCool.show();
    };
  })
  .on('keyup', function () {
    $ryuCool.hide();
    $ryuStill.show();
  });

})(jQuery, document);

function playHadoukenSound () {
  var hadoukenSound = $('#hadouken-sound')[0];

  hadoukenSound.volume = 0.5;
  hadoukenSound.load();
  hadoukenSound.play();
}
