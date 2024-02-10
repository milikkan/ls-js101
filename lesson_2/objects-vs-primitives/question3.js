// What will the following code log to the console and why?

let myWords = ['Hello'];
myWords.push('Goodbye');

console.log(myWords);

// logs ['Hello', 'Goodbye']
// On line 3, variable myWords is declared and initialized to an array
// object. When we call push method on the variable, it mutates the
// array object it is referencing.