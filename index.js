const inquirer = require("inquirer");
const Word = require("./word");
const wordList = require("random-words");

//chooses a ramdon word using random-words package
function initPlay() {
  wordToGuess = wordList().split("");

  //create the new object containing the word array and letters objects
  userWord = new Word(wordToGuess);
  userWord.addingCharacters();

  //counter of changes the user had
  lives = wordToGuess.length;

  console.log(wordToGuess);

  game("_");
}

initPlay();

function game(key) {
  //console.log(userWord);
  console.log(key);

  console.log(`${lives} guesses remaining `);

  const wordGuessed =
    key
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
      const guessedLetters = userWord.guessingChar(keyPressed.key);
      game(guessedLetters);
    });
}

//iquire if the user wants to keep playing
function keepPlaying() {
  inquirer
    .prompt({
      type: "confirm",
      message: "Do you want to keep playing?",
      name: "continue"
    })
    .then(response => {
      if (response.continue) {
        //calls the function play to create a new word to keep playing
        initPlay();
      } else {
        console.log("Thanks for playing!");
      }
    });
}
