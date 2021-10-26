// import "./styles.css";

const ScoreBoard = {
  p1Score: 0,
  p2Score: 0,
  winningScore: null
};


const playingToScore = document.querySelector("#playingToScore");
const playerOneScore = document.querySelector("#playerOneScore");
const playerTwoScore = document.querySelector("#playerTwoScore");
const p1Btn = document.querySelector("#p1Btn");
const p2Btn = document.querySelector("#p2Btn");
const resetBtn = document.querySelector("#resetBtn");

// This sets the dropdown selection at the beginning of the game

ScoreBoard.winningScore = parseInt(playingToScore.value, 16);

// This capture's the dropdown selection to change Playing To score

playingToScore.addEventListener("change", function (e) {
  // how do I get this number  
    ScoreBoard.winningScore = parseInt(playingToScore.value, 16);
    console.log(ScoreBoard.winningScore)
});

if(!ScoreBoard.p1Score === ScoreBoard.winningScore || !ScoreBoard.p2Score === ScoreBoard.winningScore ){


}

playerOneScore.textContent = ScoreBoard.p1Score;
playerTwoScore.textContent = ScoreBoard.p2Score;


resetBtn.addEventListener("click", function(e){
    ScoreBoard.p1Score = 0;
    ScoreBoard.p2Score = 0;
    playerOneScore.textContent = ScoreBoard.p1Score;
    playerTwoScore.textContent = ScoreBoard.p2Score;
    playerOneScore.style.color = "black";
    playerTwoScore.style.color = "black";
    p1Btn.addEventListener("click", increaseP1Score);
    p2Btn.addEventListener("click", increaseP2Score);
});

//click event for being able to remove the event listener later
const increaseP1Score = () => {
  if(ScoreBoard.p1Score === ScoreBoard.winningScore - 1){

  //Turns player one's score green if they reach Playing To score first
playerOneScore.style.color = "green";
playerTwoScore.style.color = "red";

// disables player one button if player one reaches Playing To score
p1Btn.removeEventListener("click", increaseP1Score);
p2Btn.removeEventListener("click", increaseP2Score);
  }
//increases p1 score by 1 on each click
  ScoreBoard.p1Score += 1;
  playerOneScore.textContent = ScoreBoard.p1Score;
}

p1Btn.addEventListener("click", increaseP1Score);




const increaseP2Score = () => {
  if(ScoreBoard.p2Score === ScoreBoard.winningScore - 1){

  //Turns player two's score green if they reach Playing To score first
playerTwoScore.style.color = "green";
playerOneScore.style.color = "red";

// disables player two button if player one reaches Playing To score
p2Btn.removeEventListener("click", increaseP2Score)
p1Btn.removeEventListener("click", increaseP1Score)
  }
//increases p1 score by 1 on each click
  ScoreBoard.p2Score+= 1;
  playerTwoScore.textContent = ScoreBoard.p2Score;
}

p2Btn.addEventListener("click", increaseP2Score);


