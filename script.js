
//Get computer's choice 

const options = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let move = Math.floor(Math.random() * options.length);
    let answer = options[move];
    document.getElementById('display2').textContent = answer;
}
window.onload = getComputerChoice();


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





