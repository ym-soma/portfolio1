
// ニュース記事、フィルタリング
$(function () {
  $("button").click(function () {
    var target = $(this).attr("value");

    $(".list li").each(function () {
      $(this).animate({ "opacity": 0 }, 300, function () {
        $(this).hide();

        if ($(this).hasClass(target) || target == "all") {
          $(this).show();
          $(this).animate({ "opacity": 1 }, 300);
        }
      });
    });
  });
});

// ニュースのボタン、色変化
$(function () {
  $(".navi").click(function () {
    $(".navi").removeClass("selected");
    $(this).addClass("selected");
  });
});