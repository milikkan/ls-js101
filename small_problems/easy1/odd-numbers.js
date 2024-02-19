// let count = 1;

// while (count <= 99) {
//   console.log(count);
//   count += 2;
// }

// another solution:

function printOdd(start, end) {
  for (let number = start; number <= end; number++) {
    if (Math.abs(number) % 2 === 1) {
      console.log(number);
    }
  }
}

let start = 2;
let end = 5;

printOdd(start, end);