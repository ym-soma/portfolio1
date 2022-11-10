
// ハンバーガーボタン
$(function(){
  $(".hamburger").click(function(){
    $(".nav").slideToggle(200);
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