/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

let minNum = 1,
  maxNum = 10,
  winningNum = getRandomNumber(minNum, maxNum),
  guessesLeft = 3,
  guessedInput = 0;

const gameWrapper = document.getElementById("game");
const minNumEl = document.querySelector("span.min-num");
const maxNumEl = document.querySelector("span.max-num");
const guessedInputEl = document.querySelector("input#guessed-input");
const guessedBtn = document.querySelector("input#guess-btn");
const messageEl = document.querySelector("p#message");

minNumEl.textContent = minNum;
maxNumEl.textContent = maxNum;

gameWrapper.addEventListener("mousedown", function (e) {
  if (e.target.classList.contains("play-again")) {
    location.reload();
  }
});

guessedBtn.addEventListener("click", function () {
  let guessedVal = parseInt(guessedInputEl.value);

  if (isNaN(guessedVal) || guessedVal > 10 || guessedVal < 1) {
    setMessage(`Please guess between ${minNum} and ${maxNum}`, "red");
    return;
  }

  if (guessedVal === winningNum) {
    gameOver("YOU WON!", "green");
  } else {
    guessesLeft -= 1;
    if (guessesLeft == 0) {
      gameOver("Game over, you lost!", "red");
    } else {
      guessedInputEl.value = "";
      setMessage(`${guessedVal} is not correct, please try again!`, "red");
    }
  }
});

function setMessage(message, color) {
  messageEl.textContent = message;
  messageEl.style.color = color;
}

function gameOver(message, color) {
  guessedInputEl.disabled = true;
  guessedInputEl.style.borderColor = color;
  setMessage(message, color);

  guessedBtn.value = "Play Again";
  guessedBtn.className += "play-again";
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
