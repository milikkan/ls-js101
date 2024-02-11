/* 
The Array.prototype.reverse method reverses the order of elements in an array, 
and Array.prototype.sort can rearrange the elements in a variety of ways, including descending. 
Both of these methods mutate the original array as shown below. 
Write two distinct ways of reversing the array without mutating the original array. 
Use reverse for the first solution, and sort for the second.
*/

// let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// numbers = [1, 2, 3, 4, 5];
// numbers.sort((num1, num2) => num2 - num1);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

let numbers1 = [1, 2, 3, 4, 5];
// let numbers1Reversed = numbers1.concat().reverse();
// another method
let numbers1Reversed = numbers1.slice().reverse();
console.log(numbers1);
console.log(numbers1Reversed);

let number2 = [1, 2, 3, 4, 5];
// let number2Reversed = number2.concat().sort((a, b) => b - a);
// another method
let number2Reversed = [...number2].sort((a, b) => b - a);
console.log(number2);
console.log(number2Reversed);

// Bonus Question: Can you do it using the Array.prototype.forEach() method?

let number3 = [1, 2, 3, 4, 5];
let numbers3Reversed = [];
number3.forEach(number => numbers3Reversed.unshift(number));
console.log(number3);
console.log(numbers3Reversed);