let userChosen;
let computerChosen;
const displayResult = document.querySelector('#result');
const userChoice = document.querySelector('#your-choice');
var result = results();
const possibleChoices = document.querySelectorAll('.choices');
const computerChoice = document.querySelector('#computer-choice');
const randomNumber = Math.round(Math.random() * (3));

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChosen = e.target.id;
    generatedComputerChoice();
    results();
    userChoice.innerHTML = userChosen;
    computerChoice.innerHTML = computerChosen;
    displayResult.innerHTML = result;
}));

function generatedComputerChoice() {
    if (randomNumber === 1) {
        return computerChosen = 'rock';
    } else if (randomNumber === 2) {
        return computerChosen = 'paper';
    } else if (randomNumber === 3) {
        return computerChosen = 'scissors';
    }
}

function results() {
    if (computerChosen === userChosen) {
        return result = 'There was a tie';
    } else if (computerChosen === 'rock' && userChosen === 'paper') {
        return result = 'User wins';
    } else if (computerChosen === 'rock' && userChosen === 'scissors') {
        return result = 'Computer wins';
    } else if (computerChosen === 'paper' && userChosen === 'rock') {
        return result = 'Computer wins';
    } else if (computerChosen === 'paper' && userChosen === 'scissors') {
        return result = 'User wins';
    } else if (computerChosen === 'scissors' && userChosen === 'rock') {
        return result = 'User wins';
    } else if (computerChosen === 'scissors' && userChosen === 'paper') {
        return result = 'Computer wins';
    }
};