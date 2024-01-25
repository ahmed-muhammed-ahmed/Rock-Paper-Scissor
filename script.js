const computerChoice = document.querySelector("#computer-choice");
const btnContainer = document.querySelector(".btn-container");
const yourChoice = document.querySelector("#your-choice");
const resultDisplay = document.querySelector("#result");
let imgElement = document.createElement("img");
let imgElement1 = document.createElement("img");
let playerSelection = "";
let winner = "";
let result = 0;

function playRound() {
  btnContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      playerSelection = e.target.id;
      imgElement.src = `./images/${e.target.id}.svg`;
      // console.log(imgElement);
      yourChoice.appendChild(imgElement);
      // yourChoice.textContent = playerSelection;
      getResult();
    }
  });
}

playRound();

function getComputerChoice() {
  const choice = Math.trunc(Math.random() * 3);
  const listOfChoice = ["rock", "paper", "scissors"];
  return listOfChoice[choice];
}

let computerSelection = getComputerChoice();
function getResult() {
  computerSelection = getComputerChoice();
  // computerChoice.textContent = computerSelection;
  imgElement1.src = `./images/${computerSelection}.svg`;
  computerChoice.appendChild(imgElement1);
  if (computerSelection === playerSelection) {
    winner = "It's ties";
    result = 0;
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    winner = `You win ${playerSelection} beats ${computerSelection}`;
    result = 1;
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    winner = `You lost ${computerSelection} beats ${playerSelection}`;
    result = -1;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    winner = `You lost ${computerSelection} beats ${playerSelection}`;
    result = -1;
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    winner = `You win ${playerSelection} beats ${computerSelection}`;
    result = 1;
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    winner = `You win ${playerSelection} beats ${computerSelection}`;
    result = 1;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    winner = `You lost ${computerSelection} beats ${playerSelection}`;
    result = -1;
  }

  resultDisplay.textContent = winner;
}
