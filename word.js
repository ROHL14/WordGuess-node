const Letter = require("./letter");

Word = function(wordLetter) {
  this.newLetters = [];
  this.wordLetter = wordLetter;
};

Word.prototype.addingCharacters = function() {
  this.wordLetter.forEach(element => {
    this.newLetters.push(new Letter(element));
  });
};

Word.prototype.guessingChar = function(char) {
  let correctLetter = "";
  this.newLetters.forEach(element => {
    element.compareCharacter(char);
    correctLetter += element.placeHolder();
  });
  return correctLetter;
};

module.exports = Word;
