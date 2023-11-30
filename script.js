"use strict";

function getComputerChoice() {
    const choice = Math.trunc(Math.random() * 3);
    const listOfChoice = ["Rock", "Paper", "Scissor"];
    return listOfChoice[choice];
}



let computerSelection = getComputerChoice();
let playerSelection = "Paper";
playerSelection = playerSelection.toLowerCase();

// Validate user input
const validChoices = ["rock", "paper", "scissor"];


let winner = "";

function playRound(playerSelection, computerSelection) {
    if((computerSelection.toLowerCase() === "rock") && (playerSelection.toLowerCase() === "scissor")) {
        winner = `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else if((computerSelection.toLowerCase() === "rock") && (playerSelection.toLowerCase() === "paper")) {
        winner = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else if((computerSelection.toLowerCase() === "scissor") && (playerSelection.toLowerCase() === "rock")) {
        winner = `You win! ${playerSelection} beats ${computerSelection}`;
    } else if ((computerSelection.toLowerCase() === "scissor") && (playerSelection.toLowerCase() === "paper")) {
        winner = `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if((computerSelection.toLowerCase() === "paper") && (playerSelection.toLowerCase() === "rock")) {
        winner = `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else if((computerSelection.toLowerCase() === "paper") && (playerSelection.toLowerCase() === "scissor")) {
        winner = `You win! ${playerSelection} beats ${computerSelection}`
    } else if(!validChoices.includes(playerSelection)) {
        alert("Invalid input. Choose Rock, Paper, or Scissor");
        playerSelection = prompt("What is your choice? Rock, Paper, Scissor").toLowerCase();
    }
     else {
        winner = `It's ties.`
    }

    return winner;
}



function game() {
    let playerScore = 0;
    let computerScore = 0;

   for(let i = 0; i < 5; i++) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("What is your choice? Rock, Paper, Scissor");
    const score = playRound(playerSelection, computerSelection); 
    console.log(score);
     
    if(score.includes("win") || score.includes("lose")){
        if(score.includes("win")) {
            playerScore += 1;
            
        } else {
            computerScore += 1;

        }

     }

   }

   if(playerScore === computerScore) {
     console.log(`It's ties! (Player Score: ${playerScore} vs Computer Score ${computerScore})`)
   } else if(playerScore > computerScore) {
    console.log(`You win by (Player Score: ${playerScore} vs Computer Score ${computerScore}) 🎉`)
   } else {
    console.log(`You lose by (Computer Score ${computerScore} vs Player Score: ${playerScore}) 😡`)
   }

}

game();

