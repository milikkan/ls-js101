const readline = require('readline-sync');

let noun = readline.question('Enter a noun: ');
let verb = readline.question('Enter a verb: ');
let adjective = readline.question('Enter an adjective: ');
let adverb = readline.question('Enter an adverb: ');

let sentence1 = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`;
let sentence2 = `The ${adjective} ${noun} ${verb}s over the lazy dog.`;
let sentence3 = `The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`;

console.log(sentence1);
console.log(sentence2);
console.log(sentence3);