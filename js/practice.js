'use strict';
console.log('practice.js file was loaded');

const mixed = ['red', true, 5, 7, 'white', 10, NaN, null];

// for i

function makeForI() {
  for (let i = 0; i < mixed.length; i++) {
    const element = mixed[i];
    console.log(`typeof ${element} ===`, typeof element);
  }
}
// makeForI();
// for of
const makeForOf = function () {
  for (let element of mixed) {
    console.log(`typeof ${element} ===`, typeof element);
  }
};
// makeForOf();

// forEach
const stringsArr = [];
mixed.forEach((element) => {
  console.log(`typeof ${element} ===`, typeof element);
});

// atspausdinti mixed masyvo tipus
// console.log(typeof mixed[0]);
// console.log(typeof mixed[1]);

// i nauja masyva sudeti tik skaicius
const skArr = [];
for (let el of mixed) {
  // jei el yra skaicius
  if (typeof el === 'number' && !isNaN(el)) {
    // deti i skArr
    skArr.push(el);
  }
}
console.log('skArr ===', skArr);
// i nauja masyva sudeti tik stringus

const nums = [1, 2, 3, 4];

// sudeti masyvo suma

// gauti masyvo vidurki
// sekli kopija
const numsCopy = nums.slice();

const numsCopy2 = [];
for (let sk of nums) {
  numsCopy2.push(sk);
}

numsCopy.push(6);
numsCopy2.push(6);
console.log('nums ===', nums);
console.log('numsCopy ===', numsCopy);
console.log('numsCopy2 ===', numsCopy2);

let arr1 = [1, 2];
let arr2 = [1, 2];

console.log('arr1 === arr2 ===', arr1 === arr2);
