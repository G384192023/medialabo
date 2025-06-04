let b1=document.querySelector('#print');
b1.addEventListener('click',showSelectResult);

function showSelectResult() {
  let rdiv=document.querySelector('div#result');
  rdiv.innerHTML = '';

  let s = document.querySelector('select#genre');
  let idx = s.selectedIndex;

  let os = s.querySelectorAll('option');
  let o = os.item(idx);

  console.log('検索キー: '+o.textContent);
  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/G0'+o.getAttribute('value')+'.json';

	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

function showResult(resp) {
  let data = resp.data;

  if (typeof data === 'string') {
    data = JSON.parse(data);
  }

  let div = document.querySelector('div#result');

  // 🔽 この位置に追加
  let rc = data.results.shop.length;
  let genreName = document.querySelector('select#genre').selectedOptions[0].textContent;

  let rcm = document.createElement('h3');
  if (rc === 0) {
    rcm.textContent = `ジャンル「${genreName}」では該当する店舗が見つかりませんでした。`;
  } else {
    rcm.textContent = `ジャンル「${genreName}」で検索した結果、${rc}件ヒットしました。`;
  }
  div.appendChild(rcm);

  // 🔽 店舗リストを描画する処理
  data.results.shop.forEach((shop, index) => {
    let h = document.createElement('h3');
    h.textContent = `検索結果 ${index + 1}件目`;
    div.appendChild(h);

    let ul = document.createElement('ul');

    let li1 = document.createElement('li');
    li1.textContent = "名前 " + shop.name;
    li1.setAttribute('id', 'na');
    ul.appendChild(li1);

    // 以下略...
    // （li2〜li9をそのまま続ける）
  });
}

function showError(err) {
	console.log(err);
}	
function finish() {
	console.log('通信が終わりました');
}