// What will the following code log to the console and why?

function changeMyWords(words) {
  console.log(words);
  words[0] = 'Hi';
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);

// logs ['Hello', 'Goodbye'] and ['Hi', 'Goodbye']
// We declare myWords variable and initialize it to an array.
// Array is a reference type and when we pass myWords into the
// changeMyWords function invocation, it acts like pass-by-reference.
// Since myWords variable and words function parameter point to the same
// array, when it is mutated inside the function, this change is also visible
// by myWords variable outside the function.