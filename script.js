
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

}