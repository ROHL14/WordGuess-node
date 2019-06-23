Letter = function(character) {
  this.character = character;
  this.characterGuessed = false;
};

Letter.prototype.placeHolder = function() {
  if (this.characterGuessed) {
    return this.character;
  } else {
    return "_ ";
  }
};

Letter.prototype.compareCharacter = function(pressedKey) {
  if (pressedKey === this.character) {
    this.characterGuessed = true;
  }
};

module.exports = Letter;
