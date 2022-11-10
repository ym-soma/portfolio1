// バリテーションの設定

// 予約
$(function () {
  // すべてのアラート文を非表示にする
  $(".alert").hide();

  // 送信ボタンクリック時の処理
  $(".submit_btn").click(function () {

    // チェック用の変数を用意
    var sendFlag = true; //入力がなければfalseに

    // ひら
    if (!$("#name").val()) {
      $(".text1 .alert").show();
      sendFlag = false; //入力がなければfalseに
    } else {
      $(".text1 .alert").hide();
    }

    // メール
    if (!$("#email").val()) {
      $(".text2 .alert").show();
      sendFlag = false; //入力がなければfalseに
    } else {
      $(".text2 .alert").hide();
    }


    // お問い合わせ種別
    if ($("select").val() == "選択してください") {
      $(".select1 .alert").show();
      sendFlag = false; //「---」を選択していればfalseに
    } else {
      $(".select1 .alert").hide();
    }

    // お問い合わせ内容
    if (!$("#message").val()) {
      $(".textarea .alert").show();
      sendFlag = false; //入力がなければfalseに
    } else {
      $(".textarea .alert").hide();
    }

    // submitBtnを無効にしている
    if (sendFlag == false) {
      return false; //falseであれば送信を許可しない
    }

  });
});