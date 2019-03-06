let generatedNumber = getRandomNumber();
let turn = 10;

let mostRecentGuess = document.querySelector(".alert");

let guessRemaining = document.querySelector(".guessRemaining");


function getRandomNumber() {
  return Math.floor(Math.random() * (100 + 1)) + 1;
}

function guessingNumber() {
  let guessedValue = document.querySelector("#guessedNumber");
  let guessedNumber = guessedValue.value;

  console.log(guessedNumber);
  console.log(generatedNumber);

  guessedValue.value = "";

  if(turn > 1) {
    turn = turn - 1;

    if(guessedNumber > generatedNumber) {
      mostRecentGuess.innerHTML = "you're too HIGH";
      mostRecentGuess.classList.add("alert-danger");
      mostRecentGuess.style.display = "block";
    } else if(guessedNumber < generatedNumber) {
      mostRecentGuess.innerHTML = "you're too LOW";
      mostRecentGuess.classList.add("alert-danger");
      mostRecentGuess.style.display = "block";
    } else if(guessedNumber = generatedNumber) {
      mostRecentGuess.innerHTML = "you're right";
      mostRecentGuess.classList.remove("alert-danger");
      mostRecentGuess.classList.add("alert-success");
      mostRecentGuess.style.display = "block";
    }
    guessRemaining.innerHTML = `you have ${turn} turns left`;

  } else {
    guessRemaining.innerHTML = `you have ran out of turns`;
  }
} 

function restartGame() {
  turn = 10;
  mostRecentGuess.innerHTML = "";
  mostRecentGuess.classList.remove("alert-danger", "alert-success");
  mostRecentGuess.style.display = "none";
  guessRemaining.innerHTML = `you have ${turn} turns left`;
  generatedNumber = getRandomNumber();
}


let guessBtn = document.querySelector("#guessBtn");
guessBtn.addEventListener("click", guessingNumber);

let restartBtn = document.querySelector("#restartBtn");
restartBtn.addEventListener("click", restartGame);
