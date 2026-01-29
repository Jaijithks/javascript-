const playerDiv = document.getElementById("player");
const computerDiv = document.getElementById("computer");
const resultDiv = document.getElementById("result");

const choices = ["rock", "paper", "scissors"];

function play(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!!" : "YOU LOSE!!";
                break;

            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!!" : "YOU LOSE!!";
                break;

            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!!" : "YOU LOSE!!";
                break;
        }
    }

    playerDiv.textContent = `PLAYER : ${playerChoice}`;
    computerDiv.textContent = `COMPUTER : ${computerChoice}`;
    resultDiv.textContent = result;
}
