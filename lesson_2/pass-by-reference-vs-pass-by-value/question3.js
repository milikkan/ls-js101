// What will the following code log to the console and why?

function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
let myOtherWord = changeMyWord(myWord);
console.log(myWord);
console.log(myOtherWord);

// logs 'Hello' and 'Hello' and 'HELLO'
// On line 10, we are declaring a variable named myOtherWord and initializing
// it to the return value of the changeMyWord function invocation.
// Variable myWord still has its initial value since passing a primitive to
// the function is pass-by-value.