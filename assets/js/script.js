// スムーススクロール
$(function () {
  $("a[href^=#]:not([href=#])").click(function () {

    var target = $($(this).attr("href")).offset().top;

    $("html").animate({ scrollTop: target }, 500);

    return false;
  });
});


// ナビゲーション、ハンバーガーボタン
$(function () {
  // ハンバーガーボタンをクリックしたら
  $(".btn").click(function () {
    // ボタンにクラス付与
    $(this).toggleClass("active");
    // ナビにクラス付与
    $(".humberger").toggleClass("open");
    // 背景のクラス付与
    $(".nav_bg").toggleClass("huberger_bg");
  });

  // ナビのリンクをクリックしたら
  $(".humberger a").click(function () {
    // ボタンにクラス除去
    $(".btn").removeClass("active");
    // ナビにクラス除去
    $(".humberger").toggleClass("open");
    // 背景のクラス除去
    $(".nav_bg").removeClass("huberger_bg");
  });
});

$(function() {
  // 変数にクラスを入れる
  var btn = $('.totop');
  var bread = $('.crumb');

  //スクロールしてページトップから500に達したらボタンを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 500) {
      btn.addClass('arrival');
    }else{
      btn.removeClass('arrival');
    }
  });
  
  //スクロールしてページトップから100に達したらボタンを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 200) {
      bread.addClass('none');
    }else{
      bread.removeClass('none');
    }
  });

  //スクロールしてトップへ戻る
  btn.on('click',function () {
    $('html').animate({
      scrollTop: 0
    });
  });
});
