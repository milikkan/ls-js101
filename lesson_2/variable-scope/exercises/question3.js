// What will the following code log to the console and why?

let num = 5;

function myFunc() {
  let num = 10;
}

myFunc();
console.log(num);

// it logs 5 to the console.
// variable num is declared and initialized to 5 on line 3
// when myFunc is invoked on line 9, a new variable with the same name is
// declared and initialized to 10 within the scope of the myFunc function.
// On line 6, num is not reassigned. It is a new variable initialization.