// What will the following code log to the console and why?

let myWords = ['Hello'];
myWords[0].toUpperCase();

console.log(myWords);

// logs ['Hello']
// toUpperCase method returns a new string. Since strings are immutable,
// we are not mutating the string element of the array.