// バリテーションの設定

// 予約
$(function () {
  // すべてのアラート文を非表示にする
  $(".alert").hide();

  // 送信ボタンクリック時の処理
  $(".submitBtn_1").click(function () {

    // チェック用の変数を用意
    var sendFlag = true; //入力がなければfalseに

    // 一行入力フィールド

    // ひら
    if (!$("#text_a").val()) {
      $(".textSection1 .alert").show();
      sendFlag = false; //入力がなければfalseに
    } else {
      $(".textSection1 .alert").hide();
    }
    if (!$("#text_b").val()) {
      $(".textSection1 .alert").show();
      sendFlag = false; //入力がなければfalseに
    } else {
      $(".textSection1 .alert").hide();
    }

    // かな
    if (!$("#text_c").val()) {
      $(".textSection2 .alert").show();
      sendFlag = false; //入力がなければfalseに
    } else {
      $(".textSection2 .alert").hide();
    }
    if (!$("#text_d").val()) {
      $(".textSection2 .alert").show();
      sendFlag = false; //入力がなければfalseに
    } else {
      $(".textSection2 .alert").hide();
    }

    // メール
    if (!$("#text_e").val()) {
      $(".textSection3 .alert").show();
      sendFlag = false; //入力がなければfalseに
    } else {
      $(".textSection3 .alert").hide();
    }

    // 電話
    if (!$("#text_f").val()) {
      $(".textSection4 .alert").show();
      sendFlag = false; //入力がなければfalseに
    } else {
      $(".textSection4 .alert").hide();
    }

    // 生年月日
    if (!$("#text_g").val()) {
      $(".textSection5 .alert").show();
      sendFlag = false; //入力がなければfalseに
    } else {
      $(".textSection5 .alert").hide();
    }

    // ラジオボタンのチェック
    var radioChk = $('input[name="radio"]:checked').length;
    if (radioChk == 0) {
      $(".radioSection .alert").show();
      sendFlag = false; //選択がなければfalseに
    } else {
      $(".radioSection .alert").hide();
    }

    // 性別
    var radioChk = $('input[name="radio"]:checked').length;
    if (radioChk == 0) {
      $(".radioSection .alert").show();
      sendFlag = false; //選択がなければfalseに
    } else {
      $(".radioSection .alert").hide();
    }

    // ケーキの種類
    if ($("select").val() == "none") {
      $(".selectSection .alert").show();
      sendFlag = false; //「---」を選択していればfalseに
    } else {
      $(".selectSection .alert").hide();
    }

    // ろうそく
    if (!$("#text_candle").val()) {
      $(".textSection_candle .alert").show();
      sendFlag = false; //入力がなければfalseに
    } else {
      $(".textSection_candle .alert").hide();
    }

    // 複数行入力フィールド
    if (!$("#text_u").val()) {
      $(".textSection6 .alert").show();
      sendFlag = false; //入力がなければfalseに
    } else {
      $(".textSection6 .alert").hide();
    }

    // 複数行入力フィールド
    if (!$("#plate").val()) {
      $(".textareaSection1 .alert").show();
      sendFlag = false; //入力がなければfalseに
    } else {
      $(".textareaSection1 .alert").hide();
    }
    // 複数行入力フィールド
    if (!$("#want").val()) {
      $(".textareaSection2 .alert").show();
      sendFlag = false; //入力がなければfalseに
    } else {
      $(".textareaSection2 .alert").hide();
    }

    // submitBtnを無効にしている
    if (sendFlag == false) {
      return false; //falseであれば送信を許可しない
    }

  });
});


// お問い合わせ
$(function () {
  // すべてのアラート文を非表示にする
  $(".alert").hide();

  // 送信ボタンクリック時の処理
  $(".submitBtn_2").click(function () {

    // チェック用の変数を用意
    var sendFlag = true; //入力がなければfalseに

    // 一行入力フィールド

    // ひら
    if (!$("#text_j").val()) {
      $(".textSection10 .alert").show();
      sendFlag = false; //入力がなければfalseに
    } else {
      $(".textSection10 .alert").hide();
    }
    if (!$("#text_k").val()) {
      $(".textSection10 .alert").show();
      sendFlag = false; //入力がなければfalseに
    } else {
      $(".textSection10 .alert").hide();
    }

    // かな
    if (!$("#text_l").val()) {
      $(".textSection11 .alert").show();
      sendFlag = false; //入力がなければfalseに
    } else {
      $(".textSection11 .alert").hide();
    }
    if (!$("#text_m").val()) {
      $(".textSection11 .alert").show();
      sendFlag = false; //入力がなければfalseに
    } else {
      $(".textSection11 .alert").hide();
    }

    // メール
    if (!$("#mail").val()) {
      $(".mailSection .alert").show();
      sendFlag = false; //入力がなければfalseに
    } else {
      $(".mailSection1 .alert").hide();
    }

    // 電話
    if (!$("#tell").val()) {
      $(".tellSection .alert").show();
      sendFlag = false; //入力がなければfalseに
    } else {
      $(".tellSection .alert").hide();
    }

    // 複数行入力フィールド
    if (!$("#textarea3").val()) {
      $(".textareaSection3 .alert").show();
      sendFlag = false; //入力がなければfalseに
    } else {
      $(".textareaSection3 .alert").hide();
    }


    // submitBtnを無効にしている
    if (sendFlag == false) {
      return false; //falseであれば送信を許可しない
    }

  });
});
