// What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

// it will log false, because NaN is not equal to any value including itself.
// We can test if a value is NaN or not by using the Number.NaN() method.

console.log(Number.isNaN(nanArray[0])); // true