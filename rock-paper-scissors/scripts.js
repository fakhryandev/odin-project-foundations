function getComputerChoice() {
  const choices = [0, 1, 2];

  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  const winnerDetermination = [
    [0, 2, 1],
    [1, 0, 2],
    [2, 1, 0],
  ];

  const result = winnerDetermination[playerSelection][computerSelection];

  return result;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  const roundTotal = 5;
  for (let i = 0; i < roundTotal; i++) {
    const playerSelection = prompt("You choose").toLowerCase();
    const computerSelection = getComputerChoice();

    const playerSelectionConverted =
      playerSelection == "rock" ? 0 : playerSelection == "paper" ? 1 : 2;

    const result = playRound(playerSelectionConverted, computerSelection);

    if (result === 0) {
      console.log(
        `Your Score : ${playerScore}, Computer Score : ${computerScore}`
      );
    } else if (result === 1) {
      playerScore++;
      console.log(
        `Your Score : ${playerScore}, Computer Score : ${computerScore}`
      );
    } else {
      computerScore++;
      console.log(
        `Your Score : ${playerScore}, Computer Score : ${computerScore}`
      );
    }
  }

  if (playerScore === computerScore) {
    console.log("Draw");
  } else if (playerScore > computerScore) {
    console.log("You Win");
  } else {
    console.log("You Lose");
  }
}

game();
