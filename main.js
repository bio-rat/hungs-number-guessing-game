function getRandomNumber() {
  return Math.floor(Math.random() * (100 + 1)) + 1;
}

let generatedNumber = getRandomNumber();

function guessingNumber() {
  let guessedValue = document.querySelector("#guessedNumber");
  let guessedNumber = guessedValue.value;
  console.log(guessedNumber);
  console.log(generatedNumber);
  guessedValue.value = "";
  if(guessedNumber > generatedNumber) {
    console.log("you're too HIGH");
  } else if(guessedNumber < generatedNumber) {
    console.log("you're too LOW");
  } else if(guessedNumber = generatedNumber){
    console.log("you're right");    
  }

} 

let guessBtn = document.querySelector("#guessBtn");
guessBtn.addEventListener("click", guessingNumber);
