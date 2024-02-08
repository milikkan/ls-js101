// function scope rule4: nested functions have their own variable scope

let a = 1; // outer scope

function funcA() {
  let b = 2; // b is accessible inside funcA scope

  function inner() {
    let c = 3; // c is accessible inside inner func scope

    console.log(a); // 1
    console.log(b); // 2
    console.log(c); // 3
  }

  inner(); // we need to invoke the function

  console.log(a); // 1
  console.log(b); // 2
  console.log(c); // ReferenceError
}

funcA();
