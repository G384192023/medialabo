document.querySelector('#print').addEventListener('click', print);

// 課題3-2 のプログラムはこの関数の中に記述すること
function print() {
  let s = document.querySelector('select#genre');
  let o = s.options[s.selectedIndex];
  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/G0' + o.value + '.json';

  console.log('検索キー: ' + o.textContent);

  axios.get(url)
    .then(resp => {
      let data = resp.data;
      if (typeof data === 'string') data = JSON.parse(data);
      printDom(data);
    })
    .catch(showError)
    .then(finish);
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let oldResult = document.querySelector('div#result');
  if (oldResult) {
    oldResult.remove();
  }

  let resultDiv = document.createElement('div');
  resultDiv.id = 'result';
  document.body.appendChild(resultDiv);

  if (!data.results || !data.results.shop || data.results.shop.length === 0) {
    let p = document.createElement('p');
    p.textContent = '該当する店舗が見つかりませんでした.';
    resultDiv.appendChild(p);
    return;
  }

  let count = data.results.shop.length;
  let hitMessage = document.createElement('h3');
  hitMessage.textContent = count + '件がヒットしました.';
  resultDiv.appendChild(hitMessage);

  data.results.shop.forEach((shop) => {
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

    resultDiv.appendChild(ul);
  });
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let s = document.querySelector('select#genre');
  let idx = s.selectedIndex;
  let os = s.querySelectorAll('option');
  let o = os.item(idx);

  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/G0' + o.getAttribute('value') + '.json';

  axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

  if (typeof data === 'string') {
    data = JSON.parse(data);
  }

  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること