/* 
- declare a string that has all alphaberic characters
- declare a result and initialize it to empty string
- itetare through the input string
  - if current char is alphabetic append it to the result
  - else if the last char of result is not space append a space
- return result  
*/

function cleanUp(inputStr) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let index = 0; index < inputStr.length; index++) {
    let currentChar = inputStr.charAt(index).toLowerCase();
    if (alphabet.includes(currentChar)) {
      result += currentChar;
    } else {
      if (result.charAt(result.length - 1) !== ' ') {
        result += ' ';
      }
    }
  }
  return result;
}

console.log(`"${cleanUp("---what's my +*& line?")}"`);    // " what s my line "
console.log(`"${cleanUp("            ")}"`);    // " what s my line "

