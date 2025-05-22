document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("calc");
    button.addEventListener("click", calc);
  });
  
  function calc() {
    const left = document.getElementById("left").value;
    const right = document.getElementById("right").value;
  
    const l = Number(left);
    const r = Number(right);
  
    const answer = document.getElementById("answer");
  
    if (isNaN(l) || isNaN(r)) {
      answer.textContent = "数字を入力してください";
      return;
    }
  
    const result = l + r;
    answer.textContent = result;
    console.log("計算結果: " + result);
  }