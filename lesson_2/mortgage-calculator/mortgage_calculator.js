const readline = require('readline-sync');
const MESSAGES = require('./mortgage_messages.json');
const MONTHS_IN_YEAR = 12;

// replaces placeholders in a message with actual values
// example:
// message = 'test (value1) and (value2)'
// value = 'foe bar'
// returns 'test foo and bar'
function processMessageVariables(message, values) {
  if (!values) {
    return message;
  }

  let valuesArray = values.split(' ');
  valuesArray.forEach((value, index) => {
    let nextValue = `(value${index + 1})`;
    message = message.replace(nextValue, value);
  });
  return message;
}

function displayMessage(key, values, cursor) {
  let message = MESSAGES[key];
  console.log(`${cursor} ${processMessageVariables(message, values)}`);
}

function prompt(key, values) {
  displayMessage(key, values, '=>');
}

function displayInfo(key, values) {
  displayMessage(key, values, '✓');
}

function displayError(key, values) {
  displayMessage(key, values, '✖');
}

function displaySeperation() {
  console.log('---------------------\n');
}

function invalidNumber(number) {
  return number === '' ||
    Number(number) < 0 ||
    Number.isNaN(Number(number));
}

function invalidLoanAmount(amount) {
  return Number(amount) === 0 ||
    Number(amount).toFixed(2) === '0.00' ||
    invalidNumber(amount);
}

function invalidDuration(duration) {
  return !Number.isInteger(Number(duration)) ||
    invalidNumber(duration);
}

function formatMoney(amount, currency = '$') {
  return currency.concat(amount.toFixed(2));
}

function formatPercentage(amount) {
  return `${amount}%`;
}

function getLoanAmount() {
  prompt('loanAmount');
  let loanAmount = readline.question();

  while (invalidLoanAmount(loanAmount)) {
    displayError('loanAmountError');
    loanAmount = readline.question();
  }
  return Number(loanAmount);
}

function getApr() {
  prompt('apr');
  let apr = readline.question();

  while (invalidNumber(apr)) {
    displayError('aprError');
    apr = readline.question();
  }
  return apr;
}

function getDuration(monthOrYear) {
  prompt('amountDuration', monthOrYear);
  let duration = readline.question();

  while (invalidDuration(duration)) {
    displayError('durationError');
    duration = readline.question();
  }
  return duration;
}

function getLoanDurationInMonths() {
  prompt('loanDurationInMonths');
  let loanDurationInMonths;
  while (true) {
    let years = getDuration('years');
    let months = getDuration('months');

    loanDurationInMonths = (Number(years) * MONTHS_IN_YEAR) + Number(months);
    if (loanDurationInMonths > 0) {
      break;
    }
    displayError('loanDurationTotalError');
  }
  return loanDurationInMonths;
}

function calculateMonthlyPayment(loanAmount, apr, loanDurationInMonths) {
  let monthlyInterestRate = (Number(apr) / 100) / MONTHS_IN_YEAR;
  let monthlyPayment;
  if (monthlyInterestRate > 0) {
    monthlyPayment = loanAmount *
      (monthlyInterestRate /
        (1 - Math.pow(
          (1 + monthlyInterestRate), -loanDurationInMonths)));
  } else {
    monthlyPayment = loanAmount / loanDurationInMonths;
  }
  return monthlyPayment;
}

function displayResults(monthlyPayment, loanAmount, loanDurationInMonths) {
  let totalPayment = monthlyPayment * loanDurationInMonths;
  let totalInterest = totalPayment - loanAmount;

  displayInfo('monthlyPaymentInfo', `${formatMoney(monthlyPayment)}`);
  displayInfo('totalPaymentInfo', `${loanDurationInMonths} ${formatMoney(totalPayment)}`);
  displayInfo('totalInterestInfo', `${formatMoney(totalInterest)}`);
  displaySeperation();
}

function getAnotherCalculation() {
  prompt('anotherCalculation');
  let anotherCalculation = readline.question();
  while (!['yes', 'y', 'no', 'n'].includes(anotherCalculation.toLowerCase())) {
    displayError('anotherCalculationError');
    anotherCalculation = readline.question();
  }
  return anotherCalculation;
}

function greet() {
  console.clear();
  prompt('welcome');
  displaySeperation();
}

function goodbye() {
  displaySeperation();
  prompt('goodbye');
}

function displayLoanAmountInfo(loanAmount) {
  displayInfo('loanAmountInfo', `${formatMoney(loanAmount)}`);
  displaySeperation();
}

function displayAprInfo(apr) {
  displayInfo('aprInfo', `${formatPercentage(apr)}`);
  displaySeperation();
}

function displayLoanDurationInfo(duration) {
  displayInfo('loanDurationInfo', `${duration}`);
  displaySeperation();
}

function quitProgram(another) {
  return another.charAt(0) === 'n';
}

function calculateMortgage() {
  greet();

  while (true) {
    let loanAmount = getLoanAmount();
    displayLoanAmountInfo(loanAmount);

    let apr = getApr();
    displayAprInfo(apr);

    let loanDurationInMonths = getLoanDurationInMonths();
    displayLoanDurationInfo(loanDurationInMonths);

    let monthlyPayment = calculateMonthlyPayment(loanAmount, apr,
      loanDurationInMonths);

    displayResults(monthlyPayment, loanAmount, loanDurationInMonths);

    let another = getAnotherCalculation();
    if (quitProgram(another)) break;
    console.clear();
  }

  goodbye();
}

calculateMortgage();