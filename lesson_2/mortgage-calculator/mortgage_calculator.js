const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayInfo(message) {
  console.log(`✓ ${message}`);
}

function displayError(message) {
  console.log(`✖ ${message}`);
}

function displaySeperation() {
  console.log('---------------------\n');
}

function invalidNumber(number) {
  return number === '' ||
    Number(number) < 0 ||
    Number.isNaN(Number(number));
}

function invalidDuration(duration) {
  return !Number.isInteger(Number(duration)) || invalidNumber(duration);
}

function formatMoney(amount, currency = '$') {
  return currency.concat(amount.toFixed(2));
}

function formatPercentage(amount) {
  return `${amount}%`;
}

prompt("Welcome to the Mortgage Calculator!");
displaySeperation();

// get loan amount
prompt("Enter the loan amount:");
let loanAmount = readline.question();

while (invalidNumber(loanAmount)) {
  displayError("Please enter a positive number...");
  loanAmount = readline.question();
}
loanAmount = Number(loanAmount);
displayInfo(`Loan amount entered as ${formatMoney(loanAmount)}`);
displaySeperation();

// get apr
prompt("Enter the interest rate (example: 2.5 means 2.5%):");
let apr = readline.question();

while (invalidNumber(apr)) {
  displayError("Please enter a positive number...");
  apr = readline.question();
}
displayInfo(`Interest rate (APR) entered as ${formatPercentage(apr)}`);
displaySeperation();

// get loan duration
prompt("Enter loan duration (First, you will be prompted for years, then for months)");
let loanDurationInMonths;
while (true) {
  prompt("How many years?");
  let years = readline.question();

  while (invalidDuration(years)) {
    displayError("Please enter a positive integer...");
    years = readline.question();
  }

  prompt("How many months?");
  let months = readline.question();

  while (invalidDuration(months)) {
    displayError("Please enter a positive integer...");
    months = readline.question();
  }

  loanDurationInMonths = (Number(years) * 12) + Number(months);
  if (loanDurationInMonths > 0) {
    displayInfo(`Loan duration entered as ${loanDurationInMonths} months.`);
    displaySeperation();
    break;
  }
  displayError('Total loan duration should be at least 1 month, please try again...');
}

// calculate monthly interest rate
let monthlyInterestRate = (Number(apr) / 100) / 12;

console.log(loanAmount, typeof loanAmount);
console.log(apr, typeof apr);
console.log(loanDurationInMonths, typeof loanDurationInMonths);

let monthlyPayment;
if (monthlyInterestRate > 0) {
  monthlyPayment = loanAmount *
  (monthlyInterestRate /
  (1 - Math.pow((1 + monthlyInterestRate), -loanDurationInMonths)));
} else {
  monthlyPayment = loanAmount / loanDurationInMonths;
}

let totalPayment = monthlyPayment * loanDurationInMonths;
let totalInterest = totalPayment - loanAmount;

// display result:
displaySeperation();
displayInfo(`${'Your monthly payment:'.padEnd(30)} ${formatMoney(monthlyPayment)}`);
displayInfo(`${`Total payment in ${loanDurationInMonths} months:`.padEnd(30)} ${formatMoney(totalPayment)}`);
displayInfo(`${'Total interest:'.padEnd(30)} ${formatMoney(totalInterest)}`);

// TODO:
// ask for another calculation
// clear screen before each calculation
// externalize messages
// extract inputs from user to functions
// extract calculations to functions