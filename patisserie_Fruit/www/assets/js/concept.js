//コンセプトページの写真fadein

$(function(){
    //フェードイン
    $(window).scroll(function(){
      $(".fadein_concept").each(function(){
        var scroll = $(window).scrollTop(); //スクロール位置の取得
        var offset = $(this).offset().top; //fadeinさせる要素の上からの位置
        var windowHeight = $(window).height(); //ウィンドウの高さ
        if(scroll > offset - windowHeight + 200){
          $(this).addClass("scrollIn");
        }
      });
    });
  
  });
  