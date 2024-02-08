// What will the following code log to the console and why?

let num = 5;

function myFunc() {
  console.log(num);
  let num = 10;
}

myFunc();
console.log(num);

// logs ReferenceError
// num is declared and initialized to 5 on line 3
// on line 10, myFunc in invoked. Inside the function body, console.log
// on line 6 attempts to log the value of num variable. But this num variable,
// is not the one that is declared in the outer scope. On line 7, withing the
// scope of thr myFunc function, another num variable is declared and
// initialized. When console.log tries to log the value of num variable,
// since it is not yet initilized at line 6, the program raises a
// ReferenceError.