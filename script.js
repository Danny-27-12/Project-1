
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

choiceRock.addEventListener('click', function () {
    document.getElementById('display1').textContent = "Rock";
});

choicePaper.addEventListener('click', function () {
    document.getElementById('display1').textContent = "Paper";
});

choiceScissors.addEventListener('click', function () {
    document.getElementById('display1').textContent = "Scissors";
});





