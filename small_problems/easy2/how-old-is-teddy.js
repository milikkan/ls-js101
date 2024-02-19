// randomly generate age between 20 and 120 (inclusive)
// example output: Teddy is 69 years old!

function generateRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age = generateRandomBetween(20, 120);
console.log(`Teddy is ${age} years old!`);