/* 
- ask user to enter an integer greate than 0
- ask user whether to sum or product (s or p)
- perform sum or product of numbers between 1 and entered number (inclusive)
- output the result
- bonus: input validation
*/

const readline = require('readline-sync');

let number = Number(readline.question('Please enter an integer greater than 0: '));

while (number <= 0 || !Number.isInteger(number)) {
  number = Number(readline.question('Try again, input should be an integer greater than 0: '));
}

let sumOrProduct = readline.question('Enter "s" to compute the sum, or "p" to compute the product: ');

while (!['s', 'p'].includes(sumOrProduct)) {
  sumOrProduct = readline.question('Please enter either "s" or "p": ');
}

let result = 1;
for (let currentNum = 2; currentNum <= Number(number); currentNum++) {
  if (sumOrProduct === 's') {
    result += currentNum;
  } else {
    result *= currentNum;
  }
}

console.log(`The product of the integers between 1 and ${number} is ${result}.`);