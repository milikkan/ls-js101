/* 
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/

const readline = require('readline-sync');

let age = Number(readline.question('What is your age? '));
let retirementAge = Number(readline.question('At what age would you like to retire? '));

let year = new Date().getFullYear();
console.log(`\nIt's ${year}. You will retire in ${year + (retirementAge - age)}`);
console.log(`You have only ${retirementAge - age} years of work to go!`);