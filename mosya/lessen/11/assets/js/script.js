// ナビゲーション、ハンバーガーボタン
$(function () {
	// ハンバーガーボタンをクリックしたら
	$(".top__button").click(function () {
		// ボタンにクラス付与
		$(this).toggleClass("active");
		// ナビにクラス付与
		$(".nav-group").toggleClass("open");
		// 背景のクラス付与
		$(".nav__background").toggleClass("background");
	});

	// ナビのリンクをクリックしたら
	$(".nav-group a").click(function () {
		// ボタンにクラス除去
		$(".top__button").removeClass("active");
		// ナビにクラス除去
		$(".nav-group").removeClass("open");
		// 背景のクラス除去
		$(".nav__background").removeClass("background");
	});

	// 背景エリアをクリックした時にメニューを閉じる
	$(".nav__background").click(function () {
		// ボタンにクラス除去
		$(".top__button").removeClass("active");
		// ナビにクラス除去
		$(".nav-group").removeClass("open");
		// 背景のクラス除去
		$(".nav__background").removeClass("background");
	});

	// スムーススクロール
	$("a[href^='#']:not([href='#'])").click(function () {
		// ＃は""or''で囲まないとエラーになる

		// ターゲットの位置取得
		var target = $($(this).attr("href")).offset().top;
		
		// 移動
		$("html,body").animate({ scrollTop: target }, 500);
		return false;
	});

});


// フェードイン
$(function () {
	$(window).scroll(function () {
		const windowHeight = $(window).height();
		const scroll = $(window).scrollTop();

		$(".fadein").each(function () {
			const targetPosition = $(this).offset().top;
			if (scroll > targetPosition - windowHeight + 200) {
				$(this).addClass("is-fadein");
			}
		});
	});
});


// slickの設定
$(function () {
	$('.scroll-list').slick({
		centerMode: true, //センターに配置
		centerPadding: "10%", //端っこの幅
		slidesToShow: 3, //何個並べるか
		arrows: false, //左右ボタン削除
		variableWidth: true //子要素の幅を設定できる
	});
});