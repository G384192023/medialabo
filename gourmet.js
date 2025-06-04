let b = document.querySelector('#print');
b.addEventListener('click', print);
let g = document.querySelector('select#genre');
let resultDiv = document.querySelector('div#result');

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

// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  const keyword = document.getElementById("keyword").value;


  const url = `https://www.nishita-lab.org/web-contents/jsons/hotpepper/${genreCode}.json`;

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

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

  if (typeof data === 'string') {
    data = JSON.parse(data);
  }

  let div = document.querySelector('div#result');

  let resultcount = data.results.shop.length;
  let resultcountmessage = document.createElement('h3');
  resultcountmessage.textContent = `検索結果: ${resultcount}件ヒットしました。`;
  div.appendChild(resultcountmessage);

  data.results.shop.forEach((shop, index) => {
    let h = document.createElement('h3');
    h.textContent = `検索結果 ${index + 1}件目`;
    div.appendChild(h);

    let ul = document.createElement('ul');

    let li1 = document.createElement('li');
    li1.setAttribute('id', 'name');
    li1.textContent = "名前: " + shop.name;
    ul.appendChild(li1);
    let li2 = document.createElement('li');
    li2.setAttribute('id', 'access');
    li2.textContent = "アクセス: " + shop.access;
    ul.appendChild(li2);
    let li3 = document.createElement('li');
    li3.setAttribute('id', 'address');
    li3.textContent = "住所: " + shop.address;
    ul.appendChild(li3);
    let li4 = document.createElement('li');
    li4.setAttribute('id', 'budget');
    li4.textContent = "予算: " + shop.budget.name;
    ul.appendChild(li4);
    let li5 = document.createElement('li');
    li5.setAttribute('id', 'catch');
    li5.textContent = "キャッチコピー: " + shop.catch;
    ul.appendChild(li5);
    let li6 = document.createElement('li');
    li6.setAttribute('id', 'genre');
    li6.textContent = "ジャンル: " + shop.genre.name;
    ul.appendChild(li6);
    let li7 = document.createElement('li');
    li7.setAttribute('id', 'open');
    li7.textContent = "営業時間: " + shop.open;
    ul.appendChild(li7);
    let li8 = document.createElement('li');
    li8.setAttribute('id', 'station');
    li8.textContent = "最寄駅: " + shop.station_name;
    ul.appendChild(li8);
    let li9 = document.createElement('li');
    li9.setAttribute('id', 'sub-genre');
    li9.textContent = "サブジャンル: " + (shop.sub_genre ? shop.sub_genre.name : 'なし');
    ul.appendChild(li9);
    
    div.appendChild(ul);
  });
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
