'use strict';
console.log('array-loop-for.js file was loaded');

const colors = ['red', 'green', 'blue', 'black', 'white'];

console.log('colors ===', colors);

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log('------');

let colorsUpper = [];

for (let i = 0; i < colors.length; i++) {
  let element = colors[i];
  let elUpper = element.toUpperCase();
  // praleisti el su index 2
  // if (i === 2) continue;
  // if (element === 'black') break;
  console.log(elUpper);
  colorsUpper.push(elUpper);
}
console.log('colorsUpper ===', colorsUpper);

// for of ========
// for (let el of masyvas) {
// kiekvienas masyvo el yra kintamasis su pavad el
//}

for (let element of colors) {
  if (element === 'blue') continue;
  // console.log('element ===', element);
  console.log(`<li>${element}</li>`);
}

const spalvosUlEl = document.getElementById('spalvos');
// su jusu pasirinktu budu
for (let color of colors) {
  console.log('color ===', color);
  // sukurti
  const liEl = document.createElement('li');
  // prideti texta
  liEl.textContent = color;
  // patalpinti html
  spalvosUlEl.append(liEl);
}
// sugeneruoti li elemntus su document.createElement
// sudeti juos i <ul id="spalvos"></ul>
let str = 'kazkoks tekstas';
for (let raide of str) {
  console.log('raide ===', raide);
}
