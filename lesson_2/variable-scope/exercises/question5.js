// What will the following code log to the console and why?

let num = 5;

function myFunc(num) {
  num = 10;
}

myFunc();
console.log(num);

// it logs 5
// Variable num is declared and initialized to 5 on line 3.
// myFunc is invoked without any argument on line 9.
// Although it is invoked without any argument, it has a parameter
// named num, and it is a local variable inside the scope of the
// myFunc function. This variable shadows the num variable from
// the outer scope. Therefore outer num variable isn't reassigned and
// retains its value.