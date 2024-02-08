// function scope rule2: inner scope variables cannot be accessed in outer scope

function myFunc() {
  let a = 1; // where a variable is declared determines its scope
}

myFunc();
console.log(a); // ReferenceError, there is no a in the outer scope