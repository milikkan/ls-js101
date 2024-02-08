// What will the following code log to the console and why?

let num = 5;

function myFunc() {
  num = 10;
}

myFunc();
console.log(num);

// logs 10.
// num variable declared and initialized to 5 on line3.
// num variable is accessible within the scope of the myFunc function.
// when myFunc is invoked on line9, num is reassigned to 10.
