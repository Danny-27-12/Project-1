
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

}
}

function finalResult() {
    console.log ('------------------------------');
    if (humanScore === computerScore){
        console.log('No one wins! Its a tie!');
    }
    else if (humanScore > computerScore){
        console.log(`FINAL SCORES: Player result: ${humanScore} | Computer result: ${computerScore} - Human wins!`);
    }
    else if (computerScore > humanScore){
        console.log(`FINAL SCORES: Player result: ${humanScore} | Computer result: ${computerScore} - Computer wins!`);
    }
 }

 console.log(playGame());
 console.log(finalResult());


