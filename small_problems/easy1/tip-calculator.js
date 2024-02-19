/* 
- get bill amount from user
- get tip percentage from user
- compute tip
- log tip and total amount
*/

const readline = require('readline-sync');

let billAmount = Number(readline.question('What is the bill? '));
let tipPercantage = Number(readline.question('What is the tip percentage? '));

let tip = billAmount * (tipPercantage / 100);

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${(billAmount + tip).toFixed(2)}`);