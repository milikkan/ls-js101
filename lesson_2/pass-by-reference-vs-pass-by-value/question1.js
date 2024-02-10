// What will the following code log to the console and why?

function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
}

let myWord = 'Hello';
changeMyWord(myWord);
console.log(myWord);

// logs 'Hello' and 'Hello'
// When we pass myWord as an argument to the changeMyWord function on line 9,
// both myWord and word has the same value 'Hello'. But since we are dealing
// with a primitive value, myWord variable and word function parameter point
// to different memory locations.

// Passing myWord to the changeMyWord function acts like pass-by-value.
// As a result, calling toUpperCase on word variable and reassigning it 
// will have no effect on the myWord variable.