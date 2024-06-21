
//Get computer's choice 

const options = ['Rock', 'Paper', 'Scissors'];

let humanScore = 0;
let computerScore = 0;
let endScore = 5;



//Adding the UX to the game

const choiceRock = document.querySelector('#rock');
const choicePaper = document.querySelector('#paper');
const choiceScissors = document.querySelector('#scissors');

function scoreRock(){
choiceRock.addEventListener('click', function () {
    document.getElementById('display1').textContent = "Rock";

        let move = Math.floor(Math.random() * options.length);
        let answer = options[move];
        document.getElementById('display2').textContent = answer;

        if ('Rock'=== answer){
        } else if ('Paper' === answer){
            computerScore++;
            document.getElementById('box1').textContent = computerScore;
        } else {
            humanScore++;
            document.getElementById('box2').textContent = humanScore;

            playGame();

}})};
scoreRock();

function scorePaper(){
choicePaper.addEventListener('click', function () {
    document.getElementById('display1').textContent = "Paper";

        let move = Math.floor(Math.random() * options.length);
        let answer = options[move];
        document.getElementById('display2').textContent = answer;

        if ('Paper'=== answer){
        } else if ('Scissors' === answer){
            computerScore++;
            document.getElementById('box1').textContent = computerScore;
        } else {
            humanScore++;
            document.getElementById('box2').textContent = humanScore;

            playGame();

                
}})};
scorePaper();

function scoreScissors(){
choiceScissors.addEventListener('click', function () {
    document.getElementById('display1').textContent = "Scissors";

    let move = Math.floor(Math.random() * options.length);
        let answer = options[move];
        document.getElementById('display2').textContent = answer;

        if ('Scissors'=== answer){
        } else if ('Rock' === answer){
            computerScore++;
            document.getElementById('box1').textContent = computerScore;
        } else {
            humanScore++;
            document.getElementById('box2').textContent = humanScore;
        } 

        playGame();

})};
scoreScissors();


// allows the winner to be declared at the end of the 5 rounds.

function playGame(){
if (humanScore === endScore) {
    document.getElementById('display4').textContent = 'Human!';
    document.getElementById('refresh').textContent = 'Thank you for playing, please refresh the page and play again.';
 } else if (computerScore === endScore) {
    document.getElementById('display4').textContent = 'Computer';
    document.getElementById('refresh').textContent = 'Thank you for playing, please refresh the page and play again.';
 }};

 


