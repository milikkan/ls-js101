// What will the following code log to the console and why?

let myWord = 'Hello';
myWord.repeat(3);
console.log(myWord);
myWord.replace('H', 'J');
console.log(myWord);
myWord.toUpperCase();
console.log(myWord);

// logs 'Hello' 3 times
// on line 3, variable myWord is declared and initialized with the string
// 'hello'. Since strings are primitives, they are immutable. When we call
// repeat, replace, or toUpperCase methods, these return new strings rather
// than mutating the original.