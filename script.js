
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
const choicePaper = document.querySelector('#paper');
const choiceScissors = document.querySelector('#scissors');


function getPlayersChoice1() {
    let choice = choiceRock.addEventListener('click', getPlayersChoice1);
    console.log('rock');
}

function getPlayersChoice2() {
    let choice = choicePaper.addEventListener('click', getPlayersChoice2);
    console.log('paper');
}

function getPlayersChoice3() {
    let choice = choiceScissors.addEventListener('click', getPlayersChoice3);
    console.log('scissors');
}



console.log(getPlayersChoice1());
console.log(getPlayersChoice2());
console.log(getPlayersChoice3());