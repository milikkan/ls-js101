/* 
- define a variable arr
- split the input using space as the seperator and assign the result to arr variable
- define a variable result
- define a variable index and initialize it to the index that is arr.length - 2
- assign the string at the index position to the result variable
- start a loop with condition result is empty string
  - decrease index by 1
  - get the string at the index position and assign it to the result variable
- return result
*/

function penultimate(str) {
  let arr = str.split(' ');
  let index = arr.length - 2;
  let result = arr[index];

  while (result === '') {
    index -= 1;
    result = arr[index];
  }
  return result;
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
console.log(penultimate("a b c") === "b"); // logs true
console.log(penultimate("a b   c") === "b"); // logs true