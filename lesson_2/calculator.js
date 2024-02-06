const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function seperator() {
  console.log('-------------------------------');
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

prompt(MESSAGES['welcome']);

while (true) {
  seperator();
  // get first number
  let number1 = getInput(
    MESSAGES['firstNumber'],
    MESSAGES['invalidNumber'],
    invalidNumber
  );

  // get second number
  let number2 = getInput(
    MESSAGES['secondNumber'],
    MESSAGES['invalidNumber'],
    invalidNumber
  );

  // get the operation
  let operation = getInput(
    MESSAGES['chooseOperation'],
    MESSAGES['invalidOperation'],
    invalidOperation
  );

  // perform the operation
  let output = calculate(number1, number2, operation);

  // display the result of the operation
  prompt(`${MESSAGES['result']} ${output}.`);
  seperator();

  // ask for another calculation
  let another = getInput(
    MESSAGES['anotherCalculation'],
    MESSAGES['invalidAnotherCalculation'],
    invalidAnotherCalculation
  );

  if (another[0].toLowerCase() !== 'y') break;
}
seperator();
prompt(MESSAGES['goodbye']);