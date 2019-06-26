const inquirer = require("inquirer");
const Word = require("./word");
const wordList = require("random-words");

function initPlay() {
  wordToGuess = wordList().split("");

  userWord = new Word(wordToGuess);
  userWord.addingCharacters();

  lives = wordToGuess.length;

  console.log(wordToGuess);

  game("_");
}

initPlay();

function game(key) {
  const guessedLetters = userWord.guessingChar(key);

  console.log(guessedLetters);

  console.log(`${lives} guesses remaining `);

  const wordGuessed =
    guessedLetters
      .split(" ")
      .join("")
      .trim() === userWord.wordLetter.join("")
      ? true
      : false;

  if (wordGuessed) {
    console.log("YOU WIN!! You're awesome");
    keepPlaying();
  } else if (lives === 0) {
    console.log("GAME OVER!!, you have fail, try again, maybe you can win");
    keepPlaying();
  } else {
    pressKey();
  }
}

function pressKey() {
  inquirer
    .prompt({
      type: "input",
      message: "Guess a letter! ",
      name: "key"
    })
    .then(keyPressed => {
      if (!wordToGuess.includes(keyPressed.key)) {
        console.log("INCORRECT!!");
        lives--;
      } else {
        console.log("CORRECT!!");
      }

      game(keyPressed.key);
    });
}

function keepPlaying() {
  inquirer
    .prompt({
      type: "confirm",
      message: "Do you want to keep playing?",
      name: "continue"
    })
    .then(response => {
      if (response.continue) {
        initPlay();
      } else {
        console.log("Thanks for playing!");
      }
    });
}
