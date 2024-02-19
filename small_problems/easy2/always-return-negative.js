// if the argument is positive, return negative of it
// if the argument is negative, return it

// function negative(num) {
//   if (num >= 0) {
//     return -num;
//   }
//   return num;
// }

function negative(num) {
  return -Math.abs(num);
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0