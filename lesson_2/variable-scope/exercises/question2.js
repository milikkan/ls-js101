// What will the following code log to the console and why? 

let num = 5;

function myFunc() {
  console.log(num);
  num = 10;
}

myFunc();
console.log(num);

// it logs 5 and 10
// variable num is declared and initialized to 5 on line3
// num is accessible from within the scope of the myFunc function
// when myFunc is invoked on line 10, it first logs the value of num
// to the console. Then it reassigns num to 10.