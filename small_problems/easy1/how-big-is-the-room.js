const readline = require('readline-sync');
const SQUARE_METER_TO_FEET = 10.7639;

console.log('Enter the length of the room in meters:');
let length = Number(readline.question());

console.log('Enter the width of the room in meters:');
let width = Number(readline.question());

console.log('Input type (meters of feet):');
let inputType = readline.question();

let area = width * length;
let areaOther;
let inputTypeOther;
if (inputType === 'meters') {
  areaOther = area * SQUARE_METER_TO_FEET;
  inputTypeOther = 'feet';
} else {
  areaOther = area / SQUARE_METER_TO_FEET;
  inputTypeOther = 'meters';
}

console.log(`The area of the room is ${area.toFixed(2)} square ${inputType} (${(areaOther).toFixed(2)} square ${inputTypeOther}).`);