const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

function invalidOperation(operation) {
  return !['1', '2', '3', '4'].includes(operation);
}

function invalidAnotherCalculation(answer) {
  return !['yes', 'y', 'no', 'n'].includes(answer.toLocaleLowerCase());
}

function getInput(promptMsg, errorMsg, invalid) {
  prompt(promptMsg);
  let input = readline.question();

  while (invalid(input)) {
    prompt(errorMsg);
    input = readline.question();
  }
  return input;
}

function calculate(number1, number2, operation) {
  let result;
  switch (operation) {
    case '1':
      result = Number(number1) + Number(number2);
      break;
    case '2':
      result = Number(number1) - Number(number2);
      break;
    case '3':
      result = Number(number1) * Number(number2);
      break;
    case '4':
      result = Number(number1) / Number(number2);
      break;
  }
  return result;
}

prompt('Welcome to the Calculator!');

while (true) {
  // get first number
  let number1 = getInput(
    'What is the first number?',
    "Hmmm...that doesn't look like a valid number.",
    invalidNumber
  );

  // get second number
  let number2 = getInput(
    'What is the second number?',
    "Hmmm...that doesn't look like a valid number.",
    invalidNumber
  );

  // get the operation
  let operation = getInput(
    'What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide',
    'Must choose 1, 2, 3, or 4.',
    invalidOperation
  );

  // perform the operation
  let output = calculate(number1, number2, operation);

  // display the result of the operation
  prompt(`The result is ${output}.`);

  // ask for another calculation
  let another = getInput(
    'Would you like to perform another operation? (y/n)',
    "Please enter either 'Yes' or 'No'...",
    invalidAnotherCalculation
  );

  if (another[0].toLowerCase() !== 'y') break;
}

prompt('Goodbye! Thanks for using calculator...');