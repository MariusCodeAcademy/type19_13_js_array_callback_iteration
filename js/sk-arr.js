'use strict';
console.log('sk-arr.js file was loaded');

const nums = [1, 2, 3, 4];

// sudeti masyvo suma

let sum = 0;
nums.forEach((sk) => {
  sum = sum + sk;
  console.log('sk ===', sk);
  console.log('tarpine sum ===', sum);
});
console.log('sum ===', sum);
// gauti masyvo vidurki
