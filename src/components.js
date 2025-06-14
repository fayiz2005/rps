import React from "react";

export function pickComputerMove() {
  const choice_num = Math.random();
  let comp_move = "";

  if (choice_num < 1 / 3) {
    comp_move = "rock";
  } else if (choice_num < 2 / 3) {
    comp_move = "paper";
  } else {
    comp_move = "scissors";
  }

  return comp_move;
}

function resetScores() {
  localStorage.removeItem("winCount");
  localStorage.removeItem("loseCount");
  localStorage.removeItem("tieCount");
  window.location.reload();
}

function iconFor(move) {
  switch (move) {
    case "rock":
      return "🗿"; 
    case "paper":
      return "📄"; 
    case "scissors":
      return "✂️"; 
    default:
      return "";
  }
}

export function WinCalc(playerMove) {
  const comp_move = pickComputerMove();
  let result = "";

  let winCount = parseInt(localStorage.getItem("winCount")) || 0;
  let loseCount = parseInt(localStorage.getItem("loseCount")) || 0;
  let tieCount = parseInt(localStorage.getItem("tieCount")) || 0;


  if (playerMove === comp_move) {
    result = "You Tie!";
    tieCount++;
    localStorage.setItem("tieCount", tieCount);
  } else if (
    (playerMove === "rock" && comp_move === "scissors") ||
    (playerMove === "paper" && comp_move === "rock") ||
    (playerMove === "scissors" && comp_move === "paper")
  ) {
    result = "You Win!";
    winCount++;
    localStorage.setItem("winCount", winCount);
  } else {
    result = "You Lose!";
    loseCount++;
    localStorage.setItem("loseCount", loseCount);
  }

  return (
    <>
      <div>
        Computer: {iconFor(comp_move)} | You: {iconFor(playerMove)}
      </div>
      <div>{result}</div>
      <div>
        Wins: {winCount} Losses: {loseCount} Ties: {tieCount}
        <button onClick={resetScores}>Reset</button>
        </div>
   
    </>
  );
}
