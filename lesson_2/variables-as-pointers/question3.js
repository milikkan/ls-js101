// What will the following code log to the console and why?

let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords[0] = 'Hi';

console.log(myWords);
console.log(myOtherWords);

// logs ['Hi', 'Goodbye'] two times.
// myWords variable is initialized to an array. Because array is a reference
// type, myWords points to the memory address of the array. When we assign
// myWords variable to the myOtherWords variable, we are assigning the memory
// addtess, not the real array. As a result, at line 5, both variables refer to
// the same array. When we mutate the array on line 5, since both variables
// point to the same array, they both log the same output.