// function scope rule1: outer scope varibles can be accessed by the inner scope

let a = 1;

function myFunc() {
  console.log(`a is ${a}`); // a is 1
  a += 1; // a is reassigned, a is accessed by inner scope and change will be visible from outer scope
}

myFunc();
console.log(`a is ${a}`); // a is 2