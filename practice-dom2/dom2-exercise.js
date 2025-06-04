//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!
function show() {
	let i = document.createElement('p');
	i.textContent = campus.address;
    let j = document.querySelector('h2#addr');
    j.insertAdjacentElement('afterend', i);  
    let k = document.createElement('ul');
    for (let n of gakka) {
        i = document.createElement('li');
        i.textContent = n.name;
        k.insertAdjacentElement('beforeend', i);
    }
    let l = document.querySelector('h2#dept');
    l.insertAdjacentElement('afterend', k);
}
let m = document.querySelector('button#show');
m.addEventListener('click', show);