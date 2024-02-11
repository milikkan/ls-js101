// Suppose we build an array like this:
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// This code will create a nested array that looks like this:
// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// Create a new array that contains all of the above values, but in an un-nested format:
// [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

// solution-1: using flat
let result1 = flintstones.flat();
console.log(flintstones);
console.log(result1);

console.log('---------');
// solution-2: using concat
let result2 = [].concat(...flintstones);
console.log(flintstones);
console.log(result2);

console.log('---------');
// solution-3: using reduce
let result3 = flintstones.reduce((acc, item) => acc.concat(item), []);
console.log(flintstones);
console.log(result3);

console.log('---------');
// solution-4: using forEach
let result4 = [];
flintstones.forEach(item => result4 = result4.concat(item));
console.log(flintstones);
console.log(result4);