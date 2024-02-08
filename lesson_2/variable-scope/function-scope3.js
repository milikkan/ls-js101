// function scope rule3: peer scopes do not conflict

function funcA() {
  let a = 1;
  console.log(`a is ${a}`); // a is 1
}

function funcB() {
  console.log(a); // ReferenceError, there is no a in this scope
}

funcA(); // a is 1
funcB(); // ReferenceError