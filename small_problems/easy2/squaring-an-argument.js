function multiply(num1, num2) {
  return num1 * num2;
}

function square(num) {
  return multiply(num, num);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

// further exploration
function powerToN(num, n) {
  if (n === 1) return num;
  
  let result = num;
  for (let count = 2; count <= n; count++) {
    result = multiply(result, num);
  }
  return result;
}

console.log(powerToN(100, 1)); // 100
console.log(powerToN(2, 3)); // 8
console.log(powerToN(2, 5)); // 32
console.log(powerToN(3, 4)); // 81
console.log(powerToN(1, 10)); // 1
console.log(powerToN(-2, 2)); // 4