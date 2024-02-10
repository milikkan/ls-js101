// What will the following code log to the console and why?

function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
myWord = changeMyWord(myWord);
console.log(myWord);

// logs 'Hello' and 'HELLO'
// We are passing the value of myWord variable to the function changeMyWord.
// Function paramater will have the value of 'Hello' after the functin is
// invoked. Inside the function, the value of word is logged to the console.
// Then it is reassigned to the uppercase version of the string and return
// from function. On line 10, myWord is reassigned to the retur value of the
// changeMyWord function.