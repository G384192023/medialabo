let bs = document.querySelectorAll('button');
for (let b of bs) {
	b.addEventListener('click', showValue);
}

function showValue(event) {
	let be = event.target;
	let name = be.getAttribute('name');
	let se = document.querySelector(`span#val_${name}`);
	if (be.classList.contains('multichoice')) {
		let ies = document.querySelectorAll(`input[name="${name}"]`);
		let result = '';
		for (let ie of ies) {
			if (ie.checked) {
				result += ' '+ie.value;
			}
		}
		se.textContent = result;
	} else {
		let val = document.querySelector(`input[name="${name}"]`).value;
		se.textContent = val;
	}
}
