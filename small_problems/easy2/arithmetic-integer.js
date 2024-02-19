const readline = require('readline-sync');

console.log('==> Enter the first number:');
let num1 = Number(readline.question());
console.log('==> Enter the second number:');
let num2 = Number(readline.question());

console.log(`==> ${num1} + ${num2} = ${num1 + num2}`);
console.log(`==> ${num1} - ${num2} = ${num1 - num2}`);
console.log(`==> ${num1} * ${num2} = ${num1 * num2}`);
console.log(`==> ${num1} / ${num2} = ${parseInt(num1 / num2)}`);
console.log(`==> ${num1} % ${num2} = ${num1 % num2}`);
console.log(`==> ${num1} ** ${num2} = ${num1 ** num2}`);
