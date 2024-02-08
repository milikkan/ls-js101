// What will the following code log to the console and why?

let num = 1;

while (num < 3) {
  let num = 5;
  num += 1;
}

console.log(num);

// it creates an infinite loop that logs nothing to the console.
// on line 3, num is declared and initialized to 1.
// on line 5, loop condition evaluates to a truty value and its first
// iteration starts. On line 6, however, another num variable is declared and
// initialized to 5. This variable shadows the outer num variable and it is
// incremented on line 7. Since the condition of the while loop references the
// num variable from the outer scope and it is never changed from within the
// while scope, its value never changes. This causes the while condition
// never meet its ending.