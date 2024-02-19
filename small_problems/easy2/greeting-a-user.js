const readline = require('readline-sync');

let name = readline.question('What is your name? ');
if (name.endsWith('!')) {
  console.log(`HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE YOU SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}

/* 
What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?
*/