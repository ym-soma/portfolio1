// ナビゲーションの設定
$(function () {
  // 変数にnavの初期位置を代入
  var navPos = $("header .pc").offset().top;

  // ブラウザをスクロール時の処理
  $(window).scroll(function () {


    // スクロール量とnavの初期位置を比較
    if ($(window).scrollTop() > navPos) {

      // 条件を満たした：navをブラウザ上部に固定
      $("header .pc ul ").css("position", "fixed");
      $("header .pc .home").css("opacity", "0");
      $("header .pc .home").css("transition", "transform .5s, opacity .5s, visibility .5s");
      $("header .fadein_logo").css("position", "fixed");
      $("header .fadein_logo").css("opacity", "1");
      $("header .fadein_logo").css("transition", "transform 2s, opacity 2s, visibility 2s");

    } else {
      // 条件を満たしてない：通常の位置へと戻る
      $("header .pc ul").css("position", "absolute");
      $("header .pc .home").css("opacity", "1");
      $("header .pc .home").css("transition", "transform 1.5s, opacity 1.5s, visibility 1.5s");
      $("header .fadein_logo").css("position", "absolute");
      $("header .fadein_logo").css("opacity", "0");
      $("header .fadein_logo").css("transition", "transform .2s, opacity .2s, visibility .2s");
    }
  });
});

// navをホバー時の設定
$(function () {
  $(".pc li a").hover(
    function () {
      $(this).css("opacity", ".5");
    },
    function () {
      $(this).css("opacity", "1");
    });
});

// ナビゲーションロゴのフェードイン
$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $(".fadein_logo").each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 200) {
        $(this).addClass("fadein_logo2");
      } else {
        $(this).removeClass("fadein_logo2");
      }
    });
  });
});

// スライド画像の設定
$(function () {
  // 画像の枚数
  var count = $(".slide li").length;

  // 現在表示されている画像
  var current = 1;

  // 次に表示する画像
  var next = 2;

  // フェードイン/アウトのインターバル
  // 何秒ごとに切り替えるか
  var interval = 3000;

  // フェードイン/アウトのスピード
  var duration = 500;

  // タイマー用の変数
  var timer;

  // 1番目の写真以外は非表示
  $(".slide li:not(:first-child)").hide()

  // 3000ミリ秒ごとにslideTimerを実行
  timer = setInterval(slideTimer, interval);

  function slideTimer() {

    // 現在の画像をフェードアウト
    $(".slide li:nth-child(" + current + ")").fadeOut(duration);

    // 次の画像をフェードイン
    $(".slide li:nth-child(" + next + ")").fadeIn(duration);

    current = next;

    next = ++next;

    if (next > count) {
      next = 1;
    }

    // targetクラス削除
    $(".btn li a").removeClass("target");

    // 現在のボタンにtarget追加
    $(".btn li:nth-child(" + current + ") a").addClass("target");
  }

  // ボタンをクリックしたときの処理
  $(".btn li a").click(function () {

    // テキスト内容を変数nextに代入
    next = $(this).html();

    // タイマーを停止して再スタート
    clearInterval(timer);
    timer = setInterval(slideTimer, interval);

    // 初回の開始タグ
    slideTimer();

    // aタグのリンクに飛ばない処置
    return false;

  });

});

// スムーススクロールの設定
$(function () {
  // totopをクリックしたときの動作
  $(".totop").click(function () {
    // 一番上に0.5秒で戻る
    $("html,body").animate({ scrollTop: 0 }, 500);

    return false;
  });
});


// 携帯サイトのナビゲーションの設定
$(function () {
  var dis = 640;

  $("button").click(
    function () {
      $("header .phone").animate({ "marginLeft": "+=" + dis + "px" }, 700);
      dis *= -1;
    });
});


$(function () {
  $('.phone .home a').hover(function () {
    $(this).text('ホーム');
  }, function () {
    $(this).text('Home');
  });
  $('.phone .menu a').hover(function () {
    $(this).text('menu');
  }, function () {
    $(this).text('メニュー');
  });
  $('.phone .consept a').hover(function () {
    $(this).text('consept');
  }, function () {
    $(this).text('コンセプト');
  });
  $('.phone .shop a').hover(function () {
    $(this).text('shop');
  }, function () {
    $(this).text('店舗情報');
  });
  $('.phone .news a').hover(function () {
    $(this).text('news');
  }, function () {
    $(this).text('お知らせ');
  });
  $('.phone .reserved a').hover(function () {
    $(this).text('reserved');
  }, function () {
    $(this).text('お問い合わせ&予約');
  });
});



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

