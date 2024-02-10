// What will the following code log to the console and why?

let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords = ['Hi', 'Bye'];

console.log(myWords);
console.log(myOtherWords);

// logs ['Hi', 'Bye'] and ['Hello', 'Goodbye']
// myWords in initialized to an array. myOtherWords is assigned the same
// reference myWords points to. So, they reference the same array.
// On line 5, myWords is reassigned and points to a different array reference
// after this line. Two variables don't point to the same memory address
// anymore.