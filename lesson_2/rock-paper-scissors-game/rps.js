const readline = require('readline-sync');
const MESSAGES = require('./rps_messages.json');
const WINNING_MOVES = {
  rock: { abbr: 'r', beats: ['scissors', 'lizard'] },
  paper: { abbr: 'p', beats: ['rock', 'spock'] },
  scissors: { abbr: 'sc', beats: ['paper', 'lizard'] },
  lizard: { abbr: 'l', beats: ['paper', 'spock'] },
  spock: { abbr: 'sp', beats: ['scissors', 'rock']}
};

const VALID_CHOICES = Object.keys(WINNING_MOVES);
const CHOICE_ABBRS = validAbbreviations(VALID_CHOICES);
const WINNING_SCORE = 3;

let scores = {player: 0, computer: 0};

// replaces placeholders in a message with actual values
// example:
// message = 'test (value1) and (value2)'
// value = 'foe-bar'
// returns 'test foo and bar'
function processMessageVariables(message, values) {
  if (!values) {
    return message;
  }

  let valuesArray = values.split('-');
  valuesArray.forEach((value, index) => {
    let nextValue = `(value${index + 1})`;
    message = message.replace(nextValue, value);
  });
  return message;
}

function prompt(key, values, showCursor = true) {
  let message = MESSAGES[key];
  console.log(`${showCursor ? '=> ' : ''}${processMessageVariables(message, values)}`);
}

function drawLine(pattern = '-', len = 25) {
  console.log(pattern.repeat(len));
}

function capitalize(str) {
  return str.charAt(0).toUpperCase().concat(str.slice(1));
}

function validAbbreviations(choices) {
  return choices.map(choice => WINNING_MOVES[choice]['abbr']);
}

function playerWins(playerChoice, computerChoice) {
  return WINNING_MOVES[playerChoice]['beats'].includes(computerChoice);
}

function computerWins(computerChoice, playerChoice) {
  return WINNING_MOVES[computerChoice]['beats'].includes(playerChoice);
}

function displayChoicePrompt() {
  let choicePrompt = VALID_CHOICES.map((choice, index) => {
    return `${capitalize(choice)} (${CHOICE_ABBRS[index]})`;
  }).join(', ');

  prompt('choicePrompt', `${choicePrompt}`);
}

function displayChoices(player, computer) {
  prompt('choices', `${player.toUpperCase()}-${computer.toUpperCase()}`);
}

function abbreviatedChoice(choice) {
  return CHOICE_ABBRS.includes(choice);
}

function invalidChoice(choice) {
  return !VALID_CHOICES.includes(choice) &&
    !abbreviatedChoice(choice);
}

function getPlayerChoice() {

  function displayScoreAndChoicePrompt() {
    console.clear();
    displayScores();
    displayChoicePrompt();
  }

  displayScoreAndChoicePrompt();
  let playerChoice = readline.question().toLowerCase();

  while (invalidChoice(playerChoice)) {
    prompt('invalidChoice');
    waitForUser();
    displayScoreAndChoicePrompt();
    playerChoice = readline.question();
  }

  if (abbreviatedChoice(playerChoice)) {
    playerChoice = VALID_CHOICES[CHOICE_ABBRS.indexOf(playerChoice)];
  }
  return playerChoice;
}

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];
}

function determineRoundWinner(playerChoice, computerChoice) {
  if (playerWins(playerChoice, computerChoice)) {
    return 'player';
  } else if (computerWins(computerChoice, playerChoice)) {
    return 'computer';
  } else {
    return 'tie';
  }
}

function gameNotWon() {
  return scores.player < WINNING_SCORE &&
    scores.computer < WINNING_SCORE;
}

function displayRoundResult(winner, playerChoice, computerChoice) {

  function displayMessage(winner, winnerChoice, loserChoice) {
    console.log(`${winnerChoice.toUpperCase()} ${MESSAGES[winnerChoice][loserChoice]} ${loserChoice.toUpperCase()}`);
    prompt('roundWinner', `${winner}`);
  }

  switch (winner) {
    case 'player':
      displayMessage('Player', playerChoice, computerChoice);
      break;
    case 'computer':
      displayMessage('Computer', computerChoice, playerChoice);
      break;
    default:
      prompt('tieResult');
  }
}

function updateScores(winner) {
  if (winner === 'tie') return;
  scores[winner] += 1;
}

function displayScores() {
  prompt('scores', `${scores.player}-${scores.computer}`);
}

function resetScores() {
  scores.computer = 0;
  scores.player = 0;
}

function displayGameWinner() {
  let gameWinner = (scores.computer === WINNING_SCORE) ? 'Computer' : 'Player';
  drawLine();
  displayScores();
  prompt('gameWinner', `${gameWinner}`);
}

function invalidPlayAgain(answer) {
  return !['yes', 'y', 'no', 'n'].includes(answer);
}

function quitGame() {
  drawLine();
  prompt('playAgain');
  let answer = readline.question().toLowerCase();

  while (invalidPlayAgain(answer)) {
    prompt('playAgainError');
    answer = readline.question().toLowerCase();
  }

  return answer[0] === 'n';
}

function waitForUser() {
  prompt('continue', '', false);
  readline.question();
}

function generateRules() {
  Object.keys(WINNING_MOVES).forEach(move => {
    let beats = WINNING_MOVES[move]['beats'];
    console.log(`* ${move.toUpperCase()}:`);
    console.log(`  ${MESSAGES[move][beats[0]]} ${capitalize(beats[0])}, ${MESSAGES[move][beats[1]]} ${capitalize(beats[1])}`);
  });
}

function displayWelcomeScreen() {
  console.clear();
  prompt('welcome', '', false);
  drawLine('=', MESSAGES['welcome'].length);
  prompt('winningScore', `${WINNING_SCORE}`);
  drawLine();
  prompt('gameRulesHeader');
  generateRules();
  waitForUser();
}

function playRound() {
  let playerChoice = getPlayerChoice();
  let computerChoice = getComputerChoice();
  displayChoices(playerChoice, computerChoice);

  let winner = determineRoundWinner(playerChoice, computerChoice);
  displayRoundResult(winner, playerChoice, computerChoice);

  updateScores(winner);
  if (gameNotWon()) waitForUser();
}

function displayGoodbye() {
  drawLine();
  prompt('goodbye');
}

function playRpsGame() {
  displayWelcomeScreen();
  while (true) {
    console.clear();

    while (gameNotWon()) {
      playRound();
    }

    displayGameWinner();
    if (quitGame()) break;

    resetScores();
  }
  displayGoodbye();
}

playRpsGame();