"use strict";

function getComputerChoice() {
  const choice = Math.trunc(Math.random() * 3);
  const listOfChoice = ["Rock", "Paper", "Scissor"];
  return listOfChoice[choice];
}

let computerSelection = getComputerChoice();

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
const replayBtn = document.querySelector(".btn-replay");

function reset() {
  replayBtn.classList.add("btn-replay");
  result.textContent = "Let's play";
  playerChoiceRock.style.display = "inline";
  playerChoicePaper.style.display = "none";
  playerChoiceScissor.style.display = "none";
  computerChoiceRock.style.display = "inline";
  computerChoicePaper.style.display = "none";
  computerChoiceScissor.style.display = "none";
}

function playRound() {
  rock.addEventListener("click", function () {
    computerSelection = getComputerChoice();
    playerChoiceRock.style.display = "inline";
    computerChoiceRock.style.display = "none";
    replayBtn.classList.remove("btn-replay");
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

    playerChoiceRock.style.display = "none";
    computerChoiceRock.style.display = "none";
    playerChoicePaper.style.display = "inline";
    replayBtn.classList.remove("btn-replay");

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
    replayBtn.classList.remove("btn-replay");

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

  replayBtn.addEventListener("click", reset);
}

playRound();
