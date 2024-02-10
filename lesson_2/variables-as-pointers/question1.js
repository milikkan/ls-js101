// What will the following code log to the console and why?

let myWord = 'Hello';
let myOtherWord = myWord;

console.log(myWord);
console.log(myOtherWord);

// logs 'Hello' and 'Hello' again.
// On line 3, we declare myWord variable and initialize it to the string
// 'Hello'. On line 4, we declare another variable myOtherWord and initialize
// it to the string value that myWord has. 
// At this point, both variables point to the same String value but they
// are different strings in memory. Changing one of them will not effect the 
// other.