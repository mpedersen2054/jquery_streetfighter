
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
    playHadoukenSound();
    ryuReady.hide();
    ryuThrowing.show();
    hadouken.finish().show()
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
    ryuThrowing.hide();
    ryuReady.show();
  });

});

function playHadoukenSound () {
  var hadoukenSound = $('#hadouken-sound')[0];

  hadoukenSound.volume = 0.5;
  hadoukenSound.load();
  hadoukenSound.play();
}
