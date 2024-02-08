// block scope rules are identical to function scope rules
// 1. outer blocks cannot access variables from inner scopes
// 2. inner blocks can access variables from outer scopes
// 3. variables defined in an inner scope can shadow variables from outer scopes

// rule1

let a = 1;

if (true) {
  console.log(`a is ${a}`); // a is 1
}


// rule2

if (true) {
  let b = 2;
}

// console.log(b); // ReferenceError

// rule3

let c = 3;

if (true) {
  let c = 4;
  console.log(c); // 4
}