// What will the following code log to the console and why?

function changeMyWords(words) {
  console.log(words);
  words = ['Hi', 'Goodbye'];
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);

// logs ['Hello' 'Goodbye'] two times
// When we pass myWords variable to the function invocation, words
// parameter will point to the same array. When we reassign words
// inside the function body, it will now point to a different array in memory.
// As a result, the array myWords is pointing to is not mutated.