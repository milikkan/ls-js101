/* 
Write a function that takes one argument, a positive integer, 
and returns a string of alternating '1's and '0's, always starting with a '1'. 
The length of the string should match the given integer.
*/

// - declare a currentChar variable and initialize it to '1'
// - declare a result variable and initialize to ''
// - start a loop from 1 to the function argument
//   - concat currentChar to the result
//   - if currentChar is '1' reassign it to '0'
//   - else reassign it to '1'
// - return result

function stringy(len) {
  let currentCar = '1';
  let result = '';
  for (let count = 1; count <= len; count++) {
    result += currentCar;
    currentCar = (currentCar === '1') ? '0' : '1';
  }
  return result;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"