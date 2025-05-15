document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("calc");
    button.addEventListener("click", calc);
  });
  
  function calc() {
    // 入力値の取得
    const left = document.getElementById("left").value;
    const right = document.getElementById("right").value;
  
    const l = Number(left);
    const r = Number(right);
  
    // 結果表示用要素
    const answer = document.getElementById("answer");
  
    // 入力チェック
    if (isNaN(l) || isNaN(r)) {
      answer.textContent = "数字を入力してください";
      return;
    }
  
    // 計算と表示
    const result = l + r;
    answer.textContent = result;
    console.log("計算結果: " + result);
  }
  