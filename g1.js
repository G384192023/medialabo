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

  let rc=data.results.shop.length;
  let rcm=document.createElement('h3');
  rcm.textContent=`検索結果: ${rc}件ヒットしました。`;
  div.appendChild(rcm);

  data.results.shop.forEach((shop, index) => {
    let h =document.createElement('h3');
    h.textContent=`検索結果 ${index + 1}件目`;
    div.appendChild(h);

    let ul = document.createElement('ul');
    let li1 = document.createElement('li');
    li1.textContent ="名前 "+shop.name;
    li1.setAttribute('id','na');
    ul.appendChild(li1);

    let li2 = document.createElement('li');
    li2.textContent ="アクセス "+shop.access;
    li2.setAttribute('id','ac');
    ul.appendChild(li2);

    let li3 = document.createElement('li');
    li3.textContent ="住所 "+shop.address;
    li3.setAttribute('id','ad');
    ul.appendChild(li3);

    let li4 = document.createElement('li');
    li4.textContent ="予算 "+shop.budget.name;
    li4.setAttribute('id','bu');
    ul.appendChild(li4);

    let li5 = document.createElement('li');
    li5.textContent ="キャッチコピー "+shop.catch;
    li5.setAttribute('id','ca');
    ul.appendChild(li5);

    let li6 = document.createElement('li');
    li6.textContent ="ジャンル "+shop.genre.name
    li6.setAttribute('id','ge');
    ul.appendChild(li6);

    let li7 = document.createElement('li');
    li7.textContent ="営業時間 "+shop.open;
    li7.setAttribute('id','op');
    ul.appendChild(li7);

    let li8 = document.createElement('li');
    li8.textContent ="最寄駅 "+shop.station_name;
    li8.setAttribute('id','st');
    ul.appendChild(li8);

    let li9 = document.createElement('li');
    li9.textContent ="サブジャンル "+(shop.sub_genre ? shop.sub_genre.name : 'なし');
    li9.setAttribute('id','su');
    ul.appendChild(li9);

    div.appendChild(ul);
  });
}
function showError(err) {
	console.log(err);
}	
function finish() {
	console.log('通信が終わりました');
}