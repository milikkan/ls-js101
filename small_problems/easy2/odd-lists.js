/* 
- if input is empty array, return empty array
- iterate through the array
  - if index is even, save the current element
  - else skip
*/
function oddities(arr) {
  let result = [];
  for (let index = 0; index < arr.length; index++) {
    if (index % 2 === 0) {
      result.push(arr[index]);
    }
  }

  return result;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []