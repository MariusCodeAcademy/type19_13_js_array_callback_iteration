'use strict';
console.log('sk-arr.js file was loaded');

const nums = [1, 2, 3, 4, 5];

// sudeti masyvo suma

let sum = 0;
nums.forEach((sk) => {
  sum = sum + sk;
  console.log('sk ===', sk);
  console.log('tarpine sum ===', sum);
});
console.log('sum ===', sum);

// gauti masyvo vidurki
function getMeAvg() {
  let avg;
  let total = 0;
  nums.forEach((sk) => {
    total += sk;
  });
  avg = total / nums.length;
  console.log('avg ===', avg);
}
getMeAvg();
