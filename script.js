"use strict";

const choice = Math.trunc(Math.random() * 3);
const listOfChoice = ["Rock", "Paper", "Scissor"];
function getComputerChoice(computerChoice) {
    return listOfChoice[computerChoice];
}


let playerChoice = prompt("What is your choice? Rock, Paper, Scissor");

function getPlayerChoice(playerChoice) {
    return playerChoice;
}

const computerSelection = getComputerChoice(choice);
const playerSelection = getPlayerChoice(playerChoice);

// console.log(computerSelection);
// console.log(playerSelection);
let winner = "";

function playRound(playerSelection, computerSelection) {
    if((computerSelection === "Rock") && 
    (playerSelection === "Scissor" || 
    playerSelection.toUpperCase()=== "SCISSOR" || 
    playerSelection.toLowerCase() === "scissor")) {
        winner = `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else if((computerSelection === "Rock") && 
    (playerSelection === "Paper" ||
    playerSelection.toUpperCase() === "PAPER" ||
    playerSelection.toLowerCase() === "paper")) {
        winner = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else if((computerSelection === "Scissor") && 
    (playerSelection === "Rock" || 
    playerSelection.toUpperCase() === "ROCK" || 
    playerSelection.toLowerCase() === "rock")) {
        winner = `You win! ${playerSelection} beats ${computerSelection}`;
    } else if ((computerSelection === "Scissor") && 
    (playerSelection === "Paper" ||
    playerSelection.toUpperCase() === "PAPER" ||
    playerSelection.toLowerCase() === "paper")) {
        winner = `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if((computerSelection === "Paper") && 
    (playerSelection === "Rock" || 
    playerSelection.toUpperCase() === "ROCK" || 
    playerSelection.toLowerCase() === "rock")) {
        winner = `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else if((computerSelection === "Paper") && 
    (playerSelection === "Scissor" || 
    playerSelection.toUpperCase()=== "SCISSOR" || 
    playerSelection.toLowerCase() === "scissor")) {
        winner = `You win! ${playerSelection} beats ${computerSelection}`
    } else {
        winner = `It's ties.`
    }

    return winner;
}

const score = playRound(playerSelection, computerSelection); 
console.log(score);

