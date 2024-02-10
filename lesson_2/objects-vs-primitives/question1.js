// What will the following code log to the console and why?

let myWord = 'Hello';
myWord.concat(' there.');

console.log(myWord);

// logs 'Hello'
// strings are immutable. concat method returns a new string.
// it doesn't mutate the string variable on which it was invoked.