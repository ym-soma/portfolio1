
// フェードイン
$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $(".fadein").each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fadein");
      }
    });
  });

  // 順番にフェードイン
  $(window).scroll(function () {
    $('.fadein_n').each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200) {
        $(function () {
          $('.fadein_n').each(function (i) {
            $(this).delay(i * 200).queue(function () {
              $(this).addClass('is-fadein');
            });
          });
        });
      }
    });
  });
  
});

