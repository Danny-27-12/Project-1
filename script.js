
//Get computer's choice 

const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let move = Math.floor(Math.random() * options.length);
    return options[move];
}
console.log(getComputerChoice());

//Get player's choice

function getPlayersChoice() {
    let choice = prompt('Please enter your go:');
    return choice.toLowerCase();
}

console.log(getPlayersChoice());

let computerChoice = getComputerChoice();
let playerChoice = getPlayersChoice ();

let humanScore = 0;
let computerScore = 0;

function checkWinner() {
    if (computerChoice === playerChoice) {
        return ("It's a tie!");
    } else if (computerChoice === 'rock' || playerChoice === 'paper') {
        humanScore ++
        return ("Player wins, paper beats rock");
    } else if (computerChoice === 'scissors' || playerChoice === 'rock') {
        humanScore ++
        return ("Player wins, rock beats scissors");
    } else if (computerChoice === 'paper' || playerChoice === 'scissors') {
        humanScore ++
        return ("Player wins, scissors beats paper");
    } else {
        computerScore ++
        return (`Computer wins, ${computerChoice} beats ${playerChoice}`);
    }
}

checkWinner();