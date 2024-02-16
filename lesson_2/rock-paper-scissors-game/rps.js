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

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function validAbbreviations(choices) {
  return choices.map(choice => WINNING_MOVES[choice]['abbr']);
}

function playerWins(playerChoice, computerChoice) {
  return WINNING_MOVES[playerChoice]['beats'].includes(computerChoice);
}

function displayChoicePrompt() {
  let choicePrompt = VALID_CHOICES.map((choice, index) => {
    return `${choice}(${CHOICE_ABBRS[index]})`;
  }).join(', ');

  prompt(`Choose one: ${choicePrompt}`);
}

function displayChoices(player, computer) {
  prompt(`You chose ${player.toUpperCase()}. Computer chose ${computer.toUpperCase()}.`);
}

function abbreviatedChoice(choice) {
  return CHOICE_ABBRS.includes(choice);
}

function invalidChoice(choice) {
  return !VALID_CHOICES.includes(choice) &&
    !abbreviatedChoice(choice);
}

function getPlayerChoice() {
  let playerChoice = readline.question().toLowerCase();

  while (invalidChoice(playerChoice)) {
    prompt("That's not a valid choice.");
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

function determineWinner(playerChoice, computerChoice) {
  if (playerWins(playerChoice, computerChoice)) {
    return 'player';
  } else if (playerWins(computerChoice, playerChoice)) {
    return 'computer';
  } else {
    return 'tie';
  }
}

function nobodyWins() {
  return scores.player < WINNING_SCORE &&
    scores.computer < WINNING_SCORE;
}

function displayResult(winner, playerChoice, computerChoice) {

  function displayMessage(winner, winnerChoice, loserChoice) {
    prompt(`${winner} wins!`);
    prompt(`${winnerChoice.toUpperCase()} ${MESSAGES[winnerChoice][loserChoice]} ${loserChoice.toUpperCase()}`);
  }

  switch (winner) {
    case 'player':
      displayMessage('Player', playerChoice, computerChoice);
      break;
    case 'computer':
      displayMessage('Computer', computerChoice, playerChoice);
      break;
    default:
      prompt('It is a tie!');
  }
}

function updateScores(winner) {
  if (winner === 'tie') return;
  scores[winner] += 1;
}

function displayScores() {
  prompt(`Player: ${scores.player} - Computer: ${scores.computer}`);
}

function resetScores() {
  scores.computer = 0;
  scores.player = 0;
}

function displayGrandWinner() {
  if (scores.computer === 3) {
    prompt('Computer is GRAND WINNER!');
  } else {
    prompt('Player is GRAND WINNER!');
  }
}

function getPlayAgain() {
  prompt('Would you like to play again? (y/n)');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }
  return answer;
}

function quitGame(playAgain) {
  return playAgain[0] === 'n';
}

while (true) {
  console.clear();

  while (nobodyWins()) {
    prompt('Welcome to the Rock-Papers-Scissors-Lizard-Spock Game');
    prompt(`When either player or computer reaches ${WINNING_SCORE} wins, game is over.`);
    displayScores();
    displayChoicePrompt();
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    displayChoices(playerChoice, computerChoice);

    let winner = determineWinner(playerChoice, computerChoice);
    displayResult(winner, playerChoice, computerChoice);

    updateScores(winner);
  }

  displayGrandWinner();

  let playAgain = getPlayAgain();
  if (quitGame(playAgain)) break;

  resetScores();
}

prompt('Thanks for playing the game! See you again...');

// TODOs;
// 1. externalize messages
// 2. abstract away to functions and check abstraction level
