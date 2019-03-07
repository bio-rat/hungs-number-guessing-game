let generatedNumber = getRandomNumber();
let turn = 10;
let counter = 5;

let mostRecentGuess = document.querySelector(".alert");

let guessRemaining = document.querySelector(".guessRemaining");
//define pastGuess
let pastGuesses = [];
let pastGuessesArea = document.querySelector(".pastGuessesArea")

//define pastScores
let pastScores = [];
let pastScoresArea = document.querySelector(".pastScoresArea");

//define bestScore
let bestScoreArea = document.querySelector(".bestScoreArea");

// define start and end
let startTime;
let endTime;
let timeDuration;

//define pastTimes
let pastTimes = [];
let pastTimesArea = document.querySelector(".pastTimesArea");

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

  } else if (pastGuesses.includes(guessedNumber)) {

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
      
      //start countDown
      // countDown();

      if (guessedNumber > generatedNumber) {

        mostRecentGuess.innerHTML = "you're too HIGH";
        mostRecentGuess.classList.add("alert-danger");
        mostRecentGuess.style.display = "block";
        // counter = 6;

      } else if (guessedNumber < generatedNumber) {

        mostRecentGuess.innerHTML = "you're too LOW";
        mostRecentGuess.classList.add("alert-danger");
        mostRecentGuess.style.display = "block";
        // counter = 6;

      } else if (guessedNumber = generatedNumber) {

        guessBtn.disabled = true;
        mostRecentGuess.innerHTML = "Congrat dude. You win this round";
        mostRecentGuess.classList.remove("alert-danger", "alert-warning");
        mostRecentGuess.classList.add("alert-success");
        mostRecentGuess.style.display = "block";
        pastScores.push(turn);

        //save endTime
        endTime = new Date();
        timeDuration = Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
        pastTimes.push(timeDuration);

        pastScoresArea.innerHTML = pastScores.join("<br/>");
        pastTimesArea.innerHTML = pastTimes.join("<br/> ");


        //Print bestScore
        bestScoreArea.innerHTML = "<h4>Your best score: " + Math.max(...pastScores) + "</h4>";

        //Stop counter
        // clearInterval(countDown);
    
      }

      guessRemaining.innerHTML = `you have ${turn} turns left`;

    } else {

      // If out of guesses
      guessRemaining.innerHTML = "you have ran out of turns";
      guessBtn.disabled = true;
      mostRecentGuess.innerHTML = "You're a loser dude. Press restart button to try again my dude";
      mostRecentGuess.classList.remove("alert-danger");
      mostRecentGuess.classList.add("alert-warning");
      pastScores.push(0);

      //save endTime
      endTime = new Date();
      timeDuration = Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
      pastTimes.push(timeDuration);

      pastScoresArea.innerHTML = pastScores.join("<br/>");
      pastTimesArea.innerHTML = pastTimes.join("<br/> ");

      //Print bestScore
      bestScoreArea.innerHTML = "<h4>Your best score: " + Math.max(...pastScores) + "</h4>";
      
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
  startBtn.style.display = "inline";
  guessingZone.style.display = "none";

}

function startGame() {
  guessingZone.style.display = "block";
  startBtn.style.display = "none";

  //Round start counting here
  startTime = new Date();

  //Stop countDown first


  //Start countdown
  // countDown();
  // counter = 6;
}

// function countDown(){
//   setInterval(function() {
//     counter--;
//      if (counter >= 0) {
//         span = document.querySelector(".timeLeft");
//         span.innerHTML = counter;
//         // mostRecentGuess.style.display = "none";

//      }
//      if (counter === 0) {
        
//         if (turn > 1) {
//         counter = 6;
//         turn--;
//         // console.log(turn);
//         guessRemaining.innerHTML = `you have ${turn} turns left`;

//         // mostRecentGuess.style.display = "block";
//         // mostRecentGuess.innerHTML = "You lose 1 turn";
//         // mostRecentGuess.classList.remove("alert-danger","alert-success");
//         // mostRecentGuess.classList.add("alert-success");
        
//         }
//         if (turn === 0) {
//           clearInterval(countDown);
          
//         }

        
//       }
//     }, 1000);
// }


// Select guessBtn
let guessBtn = document.querySelector("#guessBtn");
guessBtn.addEventListener("click", guessingNumber);

// Select restartBtn
let restartBtn = document.querySelector("#restartBtn");
restartBtn.addEventListener("click", restartGame);

//Select guessingZone
let guessingZone = document.querySelector("#guessingZone");

//Select startBtn
let startBtn = document.querySelector("#startBtn");
startBtn.addEventListener("click", startGame);