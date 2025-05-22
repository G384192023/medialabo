function a() {
  let i = document.querySelector('input[name="left"]');
  let j = document.querySelector('input[name="right"]');
  let left = i.value;
  let right = j.value;
  let n = Number(left);
  let z = Number(right);
  let sum = n + z;
  let r = document.querySelector('span[id="answer"]');
  r.textContent = sum;
}
let b = document.querySelector('button#calc');
b.addEventListener('click,', a);