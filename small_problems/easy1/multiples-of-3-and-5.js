/* 
- compute sum of all numbers between 1 and target (inc) that are multiples of 3 or 5
- steps:
  * get target number (assume it is an integer greater than 1)
  * declare a sum variable and initialize it to 0
  * iterate through numbers from 1 to target
    * check if current number is divisible by 3 or 5
    * if it is, add the current number to the sum
  * return sum
  * 
  * test: target = 10 
  * sum = 0 + 3 + 5 + 6 + 9 + 10 = 33 
*/

function multisum(num) {
  let sum = 0;
  for (let currentNumber = 3; currentNumber <= num; currentNumber++) {
    if (currentNumber % 3 === 0 || currentNumber % 5 === 0) {
      sum += currentNumber;
    }
  }
  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168