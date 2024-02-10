// What will the following code log to the console and why?

let myWord = 'Hello';
let myOtherWord = myWord;
myWord = 'Goodbye';

console.log(myWord);
console.log(myOtherWord);

// logs 'Goodbye' and 'Hello'
// On line 3, we declare variable myWord and initialize it to the string
// 'Hello'. On line 4, we declare myOtherWord variable and assign the value
// myWord has to it. On line 5, we reassign myWord variable to the string
// 'Goodbye'. Since myWord and myOtherWord variables point to strings that
// exist at different memory addresses, myOtherWord is not effected and
// retains its value.