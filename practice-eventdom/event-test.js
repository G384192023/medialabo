// イベントハンドラの登録
let cs = document.querySelectorAll('div.cell');
for (let c of cs) {
	c.addEventListener('click', get_text);
}

// イベントハンドラ
function get_text(event) {
	let div = event.target;	// クリックされた要素
	let txt = div.textContent;	//  〃　 のテキストを取得

	// クリックされた要素のテキストをページに表示
	let s = document.querySelector('span#emitter');
	s.textContent = txt;

	// クリックされた要素のボーダー色を変更
	//	（この処理の詳細は第5回資料で説明）
	cs = document.querySelectorAll('div.cell');
	for (let c of cs) {
		c.classList.remove('clicked');
	}
	div.classList.add('clicked');
}

