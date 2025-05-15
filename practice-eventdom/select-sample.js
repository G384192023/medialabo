let b = document.querySelector('button#btn');
b.addEventListener('click', showSelectResult);

function showSelectResult() {
	let s = document.querySelector('select#santaro');
	let idx = s.selectedIndex;	// idx 番目の option が選択された

	let os = s.querySelectorAll('option');	// s の子要素 option をすべて検索
	let o = os.item(idx);		// os の idx 番目の要素

	console.log('選択された ' + idx + ' 番目の option の情報:');
	console.log('  value=' + o.getAttribute('value'));	// id 属性を表示
	console.log('  textContent='+o.textContent);
}
