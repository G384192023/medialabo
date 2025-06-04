// ボタンやセレクトボックスなどの要素を取得
let b = document.querySelector('#print');
let g = document.querySelector('select#genre');
let resultDiv = document.querySelector('div#result');
let searchButton = document.querySelector('#search'); // 検索ボタンのIDを想定

// 「print」ボタンのクリックイベントは残すなら
b.addEventListener('click', print);

// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  let resultDiv = document.querySelector('div#result');
  resultDiv.innerHTML = '';

  let g = document.querySelector('select#genre');
  let idx = g.selectedIndex;
  let os = g.querySelectorAll('option');
  let o = os.item(idx);

  console.log('検索キー: ' + o.textContent);
  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/G0' + o.getAttribute('value') + '.json';

  axios.get(url)
  .then(response => {
    const data = response.data;
    console.log(data);
    printDom(data);  // 取得したデータを画面表示関数に渡す
  })
  .catch(error => {
    console.error("データ取得エラー:", error);
  });
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  const old = document.getElementById("result");
  if (old) {
    old.remove();
  }

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

// 課題6-1 のイベントハンドラ登録処理
searchButton.addEventListener('click', sendRequest);

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  const keyword = document.getElementById("keyword").value;
  const genreSelect = document.querySelector('select#genre');
  const genreCode = genreSelect.options[genreSelect.selectedIndex].value;

  const url = `https://www.nishita-lab.org/web-contents/jsons/hotpepper/G0${genreCode}.json`;

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

// 通信成功時の処理
function showResult(resp) {
  let data = resp;

  if (typeof data === 'string') {
    data = JSON.parse(data);
  }

  let div = document.querySelector('div#result');
  if (!div) {
    div = document.createElement('div');
    div.id = 'result';
    document.body.appendChild(div);
  }
  div.innerHTML = '';

  let resultcount = data.results.shop.length;
  let resultcountmessage = document.createElement('h3');
  resultcountmessage.textContent = '検索結果: ' + resultcount + '件ヒットしました。';
  div.appendChild(resultcountmessage);

  data.results.shop.forEach((shop, index) => {
    let h = document.createElement('h3');
    h.textContent = '検索結果' + (index + 1) + '件目';
    div.appendChild(h);

    let ul = document.createElement('ul');

    let li1 = document.createElement('li');
    li1.textContent = "名前: " + shop.name;
    ul.appendChild(li1);

    let li2 = document.createElement('li');
    li2.textContent = "アクセス: " + shop.access;
    ul.appendChild(li2);

    let li3 = document.createElement('li');
    li3.textContent = "住所: " + shop.address;
    ul.appendChild(li3);

    let li4 = document.createElement('li');
    li4.textContent = "予算: " + shop.budget.name;
    ul.appendChild(li4);

    let li5 = document.createElement('li');
    li5.textContent = "キャッチコピー: " + shop.catch;
    ul.appendChild(li5);

    let li6 = document.createElement('li');
    li6.textContent = "ジャンル: " + shop.genre.name;
    ul.appendChild(li6);

    let li7 = document.createElement('li');
    li7.textContent = "営業時間: " + shop.open;
    ul.appendChild(li7);

    let li8 = document.createElement('li');
    li8.textContent = "最寄駅: " + shop.station_name;
    ul.appendChild(li8);

    let li9 = document.createElement('li');
    li9.textContent = "サブジャンル: " + (shop.sub_genre ? shop.sub_genre.name : 'なし');
    ul.appendChild(li9);

    div.appendChild(ul);
  });
}

// 通信エラーが発生した時の処理
function showError(err) {
  console.error(err);
}

// 通信終了時にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}
