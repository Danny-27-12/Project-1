
//Get computer's choice 

const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let move = Math.floor(Math.random() * options.length);
    return options[move];
}

//Get player's choice

function getPlayersChoice() {
    let choice = window.prompt('Please enter your go:');
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

//Adding the UX to the game

const choiceRock = document.querySelector('#rock');

function choice() {
    alert('You chose Rock!')
}

choiceRock.addEventListener('click', choice);

