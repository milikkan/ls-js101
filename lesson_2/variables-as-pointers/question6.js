// What will the following code log to the console and why?

let myWords = ['Hello', 'Goodbye'];
let myWord = 'Hi';
myWords[0] = myWord;
myWord = 'Hello';

console.log(myWords);
console.log(myWord);

// logs ['Hi', 'Goodbye'] and 'Hello'
// On line 5, we are reassigning the string at 0th index to the string
// value that myWord variables has. On line 6, we are reassigning myWord
// to the string 'Hello'. Since these values are strings and strings are
// primitive types, their values are strored in different memory addresses
// and changing the value of one does not affect the other.