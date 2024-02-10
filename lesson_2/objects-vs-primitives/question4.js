// What will the following code log to the console and why?

let myWords = ['Hello'];
myWords.concat(['Goodbye']);

console.log(myWords);

// logs ['Hello']
// concat method doesn't mutate its caller. It returns a new array after
// concatenating its argument with the calling array. Original array
// that myWords variable is referencing is not mutated.