// Starting with the string:
let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all of the letters:
// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`;

let result = munstersDescription.split('').map(char => {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  }
  return char.toUpperCase();
}).join('');

console.log(result);