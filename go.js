function printDom(data) {
  const old = document.getElementById("result");
  if (old) old.remove();

  const resultDiv = document.createElement("div");
  resultDiv.id = "result";
  document.body.appendChild(resultDiv);

  for (const shop of data.results.shop) {
    const shopDiv = document.createElement("div");

    const name = document.createElement("h2");
    name.textContent = shop.name;

    const address = document.createElement("p");
    address.textContent = "住所: " + shop.address;

    const genre = document.createElement("p");
    genre.textContent = "ジャンル: " + shop.genre.name;

    const open = document.createElement("p");
    open.textContent = "営業時間: " + shop.open;

    shopDiv.appendChild(name);
    shopDiv.appendChild(address);
    shopDiv.appendChild(genre);
    shopDiv.appendChild(open);
    shopDiv.appendChild(document.createElement("hr"));

    resultDiv.appendChild(shopDiv);
  }
}

function sendRequest() {
  const keyword = document.getElementById("keyword").value;

  // プロジェクト課題のURL例：今回は static JSON を使った簡易版と仮定
  const url = `https://webapi.example.com/gourmet?key=API_KEY&keyword=${encodeURIComponent(keyword)}`;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "json";

  xhr.onload = function () {
    if (xhr.status === 200) {
      showResult(xhr.response);
    } else {
      showError(xhr.status);
    }
    finish();
  };

  xhr.onerror = function () {
    showError("通信エラー");
    finish();
  };

  xhr.send();
}

function showResult(response) {
  printDom(response);
}

function showError(error) {
  console.error("通信エラー:", error);
  alert("検索に失敗しました: " + error);
}

function finish() {
  console.log("通信完了");
}

// 以下の行は最初の確認用（必要に応じて削除）
// printDom(data);
