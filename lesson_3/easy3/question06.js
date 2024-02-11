// Examine the following code carefully.
// Can you identify all of the variables, primitive values, and objects that exist when this code executes?

let arr = [1, 2, 3];
let newArr = arr;

const num = arr[0];
let newNum = num;

function double(num) {
  return num * 2;
}

double(newNum);

// variables:
// arr, newArr, num, newNum, double, num (parameter)

// primitives:
// number elements of array => 1, 2, 3
// num is assigned to 1
// 0 is used as array index
// newNum is assigned to 1
// 2 in function body
// function parameter num is assigned to 1
// function return value 2

// objects:
// [1, 2, 3], double function
