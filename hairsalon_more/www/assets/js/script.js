// ニュース記事
$(function () {

  //#accordionの中の.report_title要素がクリックされたら
  $('#accordion .report_title').click(function () {

    //クリックされた.report_titleに隣接する.report_textが開いたり閉じたりする。
    $(this).next('.report_text').slideToggle();
    $("#accordion .report_text").toggleClass("click");

    // 矢印の向き変更
    $(this).toggleClass("open", 300);

  });
});

// スタイル画像
$(function () {
  // style_contentのli要素にdivを追加
  $(".style_content li").append("<div>");

  // style_contentのdiv要素に画像のキャプションを追加する
  $(".style_content div").each(function () {

    // 親liの子供imgのalt属性をpタグに入れ込む
    $(this).html("<p>" + $(this).parent().children("img").attr("alt") + "</p>");
  });


  $(".style_content li").hover(function () {

    // divを0.3秒でフェードイン
    $(this).children("div").stop().fadeIn(300);

    // キャプションのテキスト位置
    $(this).children("div").children("p").stop().animate({ "top": 0 }, 300);
  }, function () {
    // divを0.3秒でフェードイン
    $(this).children("div").stop().fadeOut(300);

    // キャプションのテキスト位置
    $(this).children("div").children("p").stop().animate({ "top": "10px" }, 300);

  });

});


// ナビゲーション固定
if (!navigator.userAgent.match(/(iPhone|Android)/)) {
  $(function () {
    var navPos = $(".top").offset().top;


    $(window).scroll(function () {
      if ($(window).scrollTop() > navPos) {
        $(".top").css("position", "fixed");
        $(".top").css("padding-top", "0");
        $(".top,.btn").css("transition", ".5s");
        $(".btn").css("margin-top", "0");

      } else {
        $(".top").css("position", "absolute");
        $(".top").css("padding-top", "2.5rem");
        $(".top,.btn").css("transition", ".5s");
        $(".btn").css("margin-top", "2.5rem");

      }

    });
  });
}

// ハンバーガーボタン
$(function () {
  // ハンバーガーボタンをクリックしたら
  $(".btn").click(function () {
    // ボタンにクラス付与
    $(this).toggleClass("active");
    // ナビにクラス付与
    $("nav").toggleClass("open");
    // 背景のクラス付与
    $(".nav_bg").toggleClass("huberger_bg");
  });

  // ナビのリンクをクリックしたら
  $("nav a").click(function () {
    // ボタンにクラス除去
    $(".btn").removeClass("active");
    // ナビにクラス除去
    $("nav").toggleClass("open");
    // 背景のクラス除去
    $(".nav_bg").removeClass("huberger_bg");
  });
});


// フェードイン
$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $(".fadein_right").each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fadein");
      }
    });
    $(".fadein_left").each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fadein");
      }
    });
    $(".fadein_top").each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 150) {
        $(this).addClass("is-fadein");
      }
    });
    $(".fadein_bottom").each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 50) {
        $(this).addClass("is-fadein");
      }
    });
  });
});


// 順番にフェードイン
$(window).scroll(function () {
  $('.fadein').each(function () {
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight + 200) {
      $(function () {
        $('.fadein').each(function (i) {
          $(this).delay(i * 200).queue(function () {
            $(this).addClass('is-fadein');
          });
        });
      });
    }
  });
});


$(function () {
  var headerHight = 100;
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - headerHight;
    $("html, body").animate({ scrollTop: position }, 550, "swing");
    return false;
  });
});