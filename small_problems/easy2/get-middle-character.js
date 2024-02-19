/* 
- write a function that takes a non-empty string argument
- function returns the middle character
- if length of the string argument is an number, return only one char, else two chars

test1: abcde length = 5 / 2 = 2.5 Math.floor(str.length / 2) slice(2, 3)
test2: abcd length = 4 / 2 = 2 slice(1, 3)
*/

function centerOf(str) {
  let len = str.length;
  let middleIndex = Math.floor(len / 2);
  if (len % 2 === 1) {
    return str.slice(middleIndex, middleIndex + 1);
  }
  return str.slice(middleIndex - 1, middleIndex + 1);
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"