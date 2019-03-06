let generatedNumber = getRandomNumber();
let turn = 10;

let mostRecentGuess = document.querySelector(".alert");

let guessRemaining = document.querySelector(".guessRemaining");
//define pastGuess
let pastGuesses = [];
let pastGuessesArea = document.querySelector(".pastGuessesArea")

//define pastScores
let pastScores = [];
let pastScoresArea = document.querySelector(".pastScoresArea");

// Generate random number
function getRandomNumber() {
  return Math.floor(Math.random() * (100 + 1)) + 1;
}

// Main Game funtion
function guessingNumber() {
  // Select input box
  let guessedValue = document.querySelector("#guessedNumber");
  let guessedNumber = guessedValue.value;

  console.log(guessedNumber);
  console.log(generatedNumber);

  // Erase input box
  guessedValue.value = "";
  // Validate input 
  if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 101) {
    mostRecentGuess.innerHTML = "Please insert your number";
    mostRecentGuess.classList.add("alert-danger");
    mostRecentGuess.style.display = "block";
  } else if(pastGuesses.includes(guessedNumber)){
    mostRecentGuess.innerHTML = "You inserted this number before. Please choose another number";
    mostRecentGuess.classList.add("alert-danger");
    mostRecentGuess.style.display = "block";
  } else {
    //Print guessed number to guessed area
    pastGuesses.push(guessedNumber);
    pastGuessesArea.innerHTML = pastGuesses.join("<br/>");

    // If pass input validation => move to guesses remaining validation
    if (turn > 1) {
      turn = turn - 1;

      if (guessedNumber > generatedNumber) {
        mostRecentGuess.innerHTML = "you're too HIGH";
        mostRecentGuess.classList.add("alert-danger");
        mostRecentGuess.style.display = "block";
      } else if (guessedNumber < generatedNumber) {
        mostRecentGuess.innerHTML = "you're too LOW";
        mostRecentGuess.classList.add("alert-danger");
        mostRecentGuess.style.display = "block";
      } else if (guessedNumber = generatedNumber) {
        guessBtn.disabled = true;
        mostRecentGuess.innerHTML = "Congrat dude. Your a winner now";
        mostRecentGuess.classList.remove("alert-danger");
        mostRecentGuess.classList.add("alert-success");
        mostRecentGuess.style.display = "block";
        pastScores.push(turn);
        pastScoresArea.innerHTML = "round 1: " + pastScores.join(`<br/>round ${pastScores.length}: `);
      }
      guessRemaining.innerHTML = `you have ${turn} turns left`;

    } else {
      // If out of guessed 
      guessRemaining.innerHTML = `you have ran out of turns`;
      guessBtn.disabled = true;
      mostRecentGuess.innerHTML = "You're a loser dude. Press restart button to try again my dude";
      mostRecentGuess.classList.remove("alert-danger");
      mostRecentGuess.classList.add("alert-warning");
      pastScores.push(10);
      pastScoresArea.innerHTML = "round:" + pastScores.join("<br/>") ;
    }
  }

}

// Restart Button function
function restartGame() {
  turn = 10;
  mostRecentGuess.innerHTML = "";
  mostRecentGuess.classList.remove("alert-danger", "alert-success");
  mostRecentGuess.style.display = "none";
  guessRemaining.innerHTML = `you have ${turn} turns left`;
  generatedNumber = getRandomNumber();
  guessBtn.disabled = false;
  pastGuesses = [];
  pastGuessesArea.innerHTML = "";
}

// Select guessBtn
let guessBtn = document.querySelector("#guessBtn");
guessBtn.addEventListener("click", guessingNumber);

// Select restartBtn
let restartBtn = document.querySelector("#restartBtn");
restartBtn.addEventListener("click", restartGame);