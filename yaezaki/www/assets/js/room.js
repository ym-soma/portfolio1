
// ニュース記事、フィルタリング
$(function () {
  $(".j_room_slide_btn button").click(function () {
    var target = $(this).attr("value");

    $(".j_room_slide_img li,.j_room_slide_text li").each(function () {
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

$(function () {
  $(".jw_room_slide_btn button").click(function () {
    var target = $(this).attr("value");

    $(".jw_room_slide_img li,.jw_room_slide_text li").each(function () {
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