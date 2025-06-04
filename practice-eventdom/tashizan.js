function Add() {
  let i = document.querySelector('input[name="left"]');
  let j = document.querySelector('input[name="right"]');
  let left = i.value;
  let right = j.value;
  
  let n = Number(left);
  let o = Number(right);
  let sum = n + o;
  let ans = document.querySelector('span[id="answer"]');
  ans.textContent = sum;
}
let b = document.querySelector('button#calc');
b.addEventListener('click', Add);