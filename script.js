
//Get computer's choice 

const options = ['rock', 'paper', 'scissors'];

function getComputerChoice () {
    let move = Math.floor(Math.random() * options.length);
    return options[move];
}

console.log(getComputerChoice());