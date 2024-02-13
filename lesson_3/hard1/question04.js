// Can you identify all of the variables, primitive values, and objects in the following code?

function boo(scare) {
  let myBoo = scare.toUpperCase() + "!!!";
  console.log(myBoo);
}

const halloweenCollection = {
  greet: "Happy Halloween",
  scare: "Boo",
  wish: "May all your pumpkins be glowing",
};

let myBoo = boo(halloweenCollection["greet"]);

// 1. variables:
// boo, scare, myBoo, halloweenCollection, myBoo (outer scope)

// 2. primitive values:
// '!!!', scare.toUppercase(), myBoo, undefined, 'greet', 'scare', 'wish', 'Happy Halloween', 'Boo', 'May all your pumpkins be glowing', 'greet', halloweenCollection['greet'], myBoo

// 3. objects:
// boo function, halloweenCollection

