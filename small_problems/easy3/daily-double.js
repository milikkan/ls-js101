/* 
Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

- empty string returns empty string
- declare a variable called prevChar and initialize it to the first char
- declare a variable called result and initialize it to the prevChar
- iterate through the input string starting from the second char
  - if currentChar isn't the same as the prevChar
    - concat currentCar with result
    - reassign prevChar to the currentChar
  - else do nothing
- return result

test: "abbcdd"
- prevChar = d
- result = abcd
- currentChar = d
*/

function crunch(str) {
  if (str.length === 0) return '';

  let prevChar = str.charAt(0);
  let result = prevChar;

  for (let index = 1; index < str.length; index++) {
    let currentChar = str.charAt(index);
    if (currentChar !== prevChar) {
      result += currentChar;
      prevChar = currentChar;
    }
  }
  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""