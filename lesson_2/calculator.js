const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'en';

function messages(messageKey, lang = 'en') {
  return MESSAGES[lang][messageKey];
}

function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
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

function getYesNoTranslation() {
  return messages('yesNo', LANGUAGE).split(' ');
}

function invalidAnotherCalculation(answer) {
  let yesNo = getYesNoTranslation();
  let choices = [yesNo[0], yesNo[0][0], yesNo[1], yesNo[1][0]];
  return !choices.includes(answer.toLocaleLowerCase());
}

function continueCalculation(another) {
  let yes = getYesNoTranslation()[0];
  return another[0].toLowerCase() === yes[0];
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

function displayResult(output) {
  if (Number.isNaN(output)) {
    output = messages('notANumber', LANGUAGE);
  }

  console.log(`${messages('result', LANGUAGE)} ${output}.`);
}

prompt('welcome');
prompt('activeLang');

while (true) {
  seperator();
  // get first number
  let number1 = getInput('firstNumber', 'invalidNumber', invalidNumber);

  // get second number
  let number2 = getInput('secondNumber', 'invalidNumber', invalidNumber);

  // get the operation
  let operation = getInput('chooseOperation', 'invalidOperation', invalidOperation);

  // perform the operation
  let output = calculate(number1, number2, operation);

  displayResult(output);
  seperator();

  // ask for another calculation
  let another = getInput('anotherCalculation', 'invalidAnotherCalculation', invalidAnotherCalculation);

  if (!continueCalculation(another)) break;
}
seperator();
prompt('goodbye');