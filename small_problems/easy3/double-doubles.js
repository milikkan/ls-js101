/* 
- double number: even-length, left side and right side have same digits
- if number is a double, return number * 2, else return number

examples:
- 44, 3333, 103103, 7676 are double
- 444, 334433, 107 are not double

- coerce the number to string
- if length is odd, return number * 2
- else slice left and right
  - left (0, length / 2)
  - right (lenght / 2, length)
- if left and right same return number
- else return number * 2
*/

function twice(num) {
  let numStr = String(num);
  if (numStr.length % 2 === 1) {
    return num * 2;
  }
  let left = numStr.slice(0, numStr.length / 2);
  let right = numStr.slice(numStr.length / 2);
  
  return (left === right) ? num : num * 2;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676