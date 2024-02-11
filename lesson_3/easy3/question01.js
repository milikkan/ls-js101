// Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

// method-1
console.log(numbers);
numbers.length = 0;
console.log(numbers);

console.log('---------');
// method-2:
numbers = [1, 2, 3, 4];
console.log(numbers);
numbers.splice(0, numbers.length);
console.log(numbers);

console.log('---------');
// method-3:
numbers = [1, 2, 3, 4];
console.log(numbers);
while (numbers.length) {
  numbers.pop();
}
console.log(numbers);