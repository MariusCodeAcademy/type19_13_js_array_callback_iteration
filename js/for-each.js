'use strict';
console.log('for-each.js file was loaded');

const colors = ['red', 'green', 'blue', 'black', 'white'];

for (let spalva of colors) {
  console.log('spalva ===', spalva);
}

// arr.forEach((el, index, arr) => {function body})
const colUpper = [];
colors.forEach((spalva, idx, arr) => {
  console.log(`index: ${idx}`, spalva);
  // galiu keisti esama masyva
  // colors[idx] = spalva + ' spalva';
  colUpper.push(spalva.toUpperCase());
});
console.log('colUpper ===', colUpper);
console.log('colors ===', colors);

const nums = [5, -7, 1, -8, 7, 15, -8, 2, -7];
// su forEach
// atspausdinti visus skaicius
nums.forEach((sk) => {
  // console.log(sk);
});
// atspausdinti tik teigiamaus skaicius
function printNums(num, idx, arr) {
  if (num > 0) console.log('num ===', num);
}
nums.forEach(printNums);
const mixed = ['red', true, 5, 7, 'white', 10];
// su forEach
// atspausdinti visus el tipus
// atspausdinti skaiciu suma

// nusitaikom i li el
const liElList = document.querySelectorAll('#spalvos li');
console.log('liElList ===', liElList);

liElList.forEach((liEl) => {
  console.log('liEl ===', liEl);
  // liEl.append(' - spalva');
  // liEl.textContent += ' - spalva';
  // pakeisti fono splava i ta kkuri parasyta
  liEl.style.backgroundColor = liEl.textContent;
});
