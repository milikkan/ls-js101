// function scope rule5: inner scope variables can shadow outer scope variables

let a = 1;

function funcA(a) { // parameters are local variables
  console.log(`a is ${a}`); // a is 2, other a from outer scope is shadowed here
}

funcA(2); // a is 2
console.log(`a is ${a}`); // a is 1