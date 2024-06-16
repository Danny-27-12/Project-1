
//Get computer's choice 

const options = ['Rock', 'Paper', 'Scissors'];

let humanScore = 0;
let computerScore = 0;

//Adding the UX to the game
//

const choiceRock = document.querySelector('#rock');
const choicePaper = document.querySelector('#paper');
const choiceScissors = document.querySelector('#scissors');

function scoreRock(){
choiceRock.addEventListener('click', function () {
    document.getElementById('display1').textContent = "Rock";

        let move = Math.floor(Math.random() * options.length);
        let answer = options[move];
        document.getElementById('display2').textContent = answer;
    
})};
scoreRock();

function scorePaper(){
choicePaper.addEventListener('click', function () {
    document.getElementById('display1').textContent = "Paper";

        let move = Math.floor(Math.random() * options.length);
        let answer = options[move];
        document.getElementById('display2').textContent = answer;

})};
scorePaper();

function scoreScissors(){
choiceScissors.addEventListener('click', function () {
    document.getElementById('display1').textContent = "Scissors";

    let move = Math.floor(Math.random() * options.length);
        let answer = options[move];
        document.getElementById('display2').textContent = answer;

})};
scoreScissors();






function playGame() {

}




/*
function playGame() {
    for (let round = 1; round <= 5; round++) {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayersChoice();

    console.log(`Player's Choice: ${playerChoice} | Computer's Choice: ${computerChoice}`);

    if (computerChoice === playerChoice) {
        console.log("It's a tie!");
    } else if (computerChoice === 'rock' && playerChoice === 'paper') {
        humanScore ++
        console.log ("Player wins, paper beats rock");
    } else if (computerChoice === 'scissors' && playerChoice === 'rock') {
        humanScore ++
        console.log ("Player wins, rock beats scissors");
    } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
        humanScore ++
        console.log ("Player wins, scissors beats paper");
    } else {
        computerScore ++
        console.log (`Computer wins, ${computerChoice} beats ${playerChoice}`);
    }

    console.log (`These are the scores: Player: ${humanScore} Computer ${computerScore}`);
    console.log('------------------------------');
*/



