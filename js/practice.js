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

// i nauja masyva sudeti tik stringus

const nums = [1, 2, 3, 4];
// sudeti masyvo suma

// gauti masyvo vidurki
