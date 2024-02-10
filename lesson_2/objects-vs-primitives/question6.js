// What will the following code log to the console and why?

let myWords = ['Hello'];
myWords[0] = myWords[0].toUpperCase();

console.log(myWords);

// logs ['HELLO']
// We are calling toUpperCase method on the string element at the 0th
// index of the array. This method returns a new uppercased string.
// We are then reassigning the string at 0th index and mutating the array.

