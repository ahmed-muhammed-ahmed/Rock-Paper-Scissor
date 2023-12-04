"use strict";

function getComputerChoice() {
  const choice = Math.trunc(Math.random() * 3);
  const listOfChoice = ["Rock", "Paper", "Scissor"];
  return listOfChoice[choice];
}

let computerSelection = getComputerChoice();
let playerSelection = "Paper";
playerSelection = playerSelection.toLowerCase();

// DOM PART
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const result = document.querySelector(".result");
const playerChoiceRock = document.getElementById("rock");
const playerChoicePaper = document.getElementById("paper");
const playerChoiceScissor = document.getElementById("scissor");
const computerChoiceRock = document.getElementById("computer-rock");
const computerChoicePaper = document.getElementById("computer-paper");
const computerChoiceScissor = document.getElementById("computer-scissor");
const plyScore = document.querySelector(".player-score");
const compScore = document.querySelector(".computer-score");

function playRound1() {
  rock.addEventListener("click", function () {
    computerSelection = getComputerChoice();
    playerChoiceRock.style.display = "inline";
    computerChoiceRock.style.display = "none";
    console.log("Computer selection:", computerSelection);
    if (computerSelection === "Scissor") {
      computerChoiceScissor.style.display = "inline";
      result.textContent = "You win, rock beats scissor";
    } else if (computerSelection === "Paper") {
      computerChoicePaper.style.display = "inline";
      result.textContent = "You lost, paper beats rock!";
    } else {
      result.textContent = "It's a ties";
      computerChoiceRock.style.display = "inline";
    }
  });

  paper.addEventListener("click", function () {
    computerSelection = getComputerChoice();
    console.log("Computer selection:", computerSelection);

    playerChoiceRock.style.display = "none";
    computerChoiceRock.style.display = "none";
    playerChoicePaper.style.display = "inline";

    if (computerSelection === "Rock") {
      result.textContent = "You win, paper beats rock";
      computerChoiceRock.style.display = "inline";
    } else if (computerSelection === "Scissor") {
      result.textContent = "You lost, scissor beats paper";
      computerChoiceScissor.style.display = "inline";
    } else {
      result.textContent = "It's a ties";
      computerChoicePaper.style.display = "inline";
    }
  });

  scissor.addEventListener("click", function () {
    computerSelection = getComputerChoice();
    playerChoiceRock.style.display = "none";
    computerChoiceRock.style.display = "none";
    playerChoiceScissor.style.display = "inline";
    console.log("Computer selection: ", computerSelection);
    if (computerSelection === "Paper") {
      result.textContent = "You win scissor beats paper";

      computerChoiceRock.style.display = "none";
      computerChoicePaper.style.display = "inline";
    } else if (computerSelection === "Rock") {
      result.textContent = "You lost rock beats scissor";
      computerChoiceRock.style.display = "inline";
    } else {
      result.textContent = "It's ties";
      computerChoiceRock.style.display = "none";
      computerChoiceScissor.style.display = "inline";
    }
  });
}
function game1() {
  let playerScore1 = 0;
  let computerScore1 = 0;
  let maxScoreReached = false;
  while (!maxScoreReached) {
    computerSelection = getComputerChoice();
    playRound1();

    if (
      result.textContent.includes("win") ||
      result.textContent.includes("lost")
    ) {
      if (result.textContent.includes("win")) {
        playerScore1 += 1;
        plyScore.textContent = playerScore1;
      } else {
        computerScore1 += 1;
        compScore.textContent = computerScore1;
      }
    }

    if (playerScore1 === 5 || computerScore1 === 5) {
      maxScoreReached = true;
    }
  }

  if (playerScore1 > computerScore1) {
    result.textContent = `You win 5-${computerScore1}`;
  } else {
    result.textContent = `You lost 5-${playerScore1}`;
  }
}

game1();
// DOM PART

// Validate user input
// const validChoices = ["rock", "paper", "scissor"];

// let winner = "";

// function playRound(playerSelection, computerSelection) {
//   if (
//     computerSelection.toLowerCase() === "rock" &&
//     playerSelection.toLowerCase() === "scissor"
//   ) {
//     winner = `You lose! ${computerSelection} beats ${playerSelection}.`;
//   } else if (
//     computerSelection.toLowerCase() === "rock" &&
//     playerSelection.toLowerCase() === "paper"
//   ) {
//     winner = `You win! ${playerSelection} beats ${computerSelection}.`;
//   } else if (
//     computerSelection.toLowerCase() === "scissor" &&
//     playerSelection.toLowerCase() === "rock"
//   ) {
//     winner = `You win! ${playerSelection} beats ${computerSelection}`;
//   } else if (
//     computerSelection.toLowerCase() === "scissor" &&
//     playerSelection.toLowerCase() === "paper"
//   ) {
//     winner = `You lose! ${computerSelection} beats ${playerSelection}`;
//   } else if (
//     computerSelection.toLowerCase() === "paper" &&
//     playerSelection.toLowerCase() === "rock"
//   ) {
//     winner = `You lose! ${computerSelection} beats ${playerSelection}!`;
//   } else if (
//     computerSelection.toLowerCase() === "paper" &&
//     playerSelection.toLowerCase() === "scissor"
//   ) {
//     winner = `You win! ${playerSelection} beats ${computerSelection}`;
//   } else if (!validChoices.includes(playerSelection)) {
//     alert("Invalid input. Choose Rock, Paper, or Scissor");
//     playerSelection = prompt(
//       "What is your choice? Rock, Paper, Scissor"
//     ).toLowerCase();
//   } else {
//     winner = `It's ties.`;
//   }

//   return winner;
// }

// function game() {
//   let playerScore = 0;
//   let computerScore = 0;

//   for (let i = 0; i < 5; i++) {
//     computerSelection = getComputerChoice();
//     playerSelection = prompt("What is your choice? Rock, Paper, Scissor");
//     const score = playRound(playerSelection, computerSelection);
//     console.log(score);

//     if (score.includes("win") || score.includes("lose")) {
//       if (score.includes("win")) {
//         playerScore += 1;
//       } else {
//         computerScore += 1;
//       }
//     }
//   }

//   if (playerScore === computerScore) {
//     console.log(
//       `It's ties! (Player Score: ${playerScore} vs Computer Score ${computerScore})`
//     );
//   } else if (playerScore > computerScore) {
//     console.log(
//       `You win by (Player Score: ${playerScore} vs Computer Score ${computerScore}) 🎉`
//     );
//   } else {
//     console.log(
//       `You lose by (Computer Score ${computerScore} vs Player Score: ${playerScore}) 😡`
//     );
//   }
// }

// game();
