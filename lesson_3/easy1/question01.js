// Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

// No it will not raise an error. The length of the array will become 7.
console.log(numbers[6]);
console.log(numbers.length);

// bonus:
numbers[4];  // what will this line return?

// Although the indexes 3, 4, and 5 are empty slots, it will return 'undefined'
console.log(numbers[4]);

// map() method doesn't map empty slots
console.log(numbers);
console.log(numbers.map(n => 42));