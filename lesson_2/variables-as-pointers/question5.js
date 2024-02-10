// What will the following code log to the console and why?

let myWords = ['Hello', 'Goodbye'];
let myWord = myWords[0];
myWords[0] = 'Hi';

console.log(myWords);
console.log(myWord);

// logs ['Hi', 'Goodbye'] and 'Hello'
// We initialize myWords to an array on line 3.
// On line 4, we initialize myWord to the string at the 0th index of
// myWords array.
// On line 5, we mutate the myWords array by reassignining the string
// at the 0th index. myWord is not effected by this change because
// it holds the value of a string.