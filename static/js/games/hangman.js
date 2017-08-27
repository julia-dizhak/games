// Hangman is a word-guessing game. One player picks a secret word, and the other player tries to guess it.

// A game loop generally does the following:
// 1. Takes input from the player
// 2. Updates the game state
// 3. Displays the current state of the game to the player

// coding the game

var pickWord = function() {
  // choosing a random word (TODO: choose topic)

  // secret words (TODO)
  var words = [
    "javascript",
    "python",
    "html",
    "css"
  ];

  // TODO: multiply arrays doesn't work
  // var words = [
  //   [
  //     "javascript",
  //     "python"
  //   ],
  //   [
  //     "pancake",
  //     "wine"
  //   ]
  // ];

  // Pick a random word
  // by using Math.random and Math.floor to pick a random word from the array
  return words[Math.floor(Math.random() * words.length)];
}

var setupAnswerArray = function(word) {
  // Set up (creating) the answer array
  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }

  return answerArray;
}

var showPlayerProgress = function() {
  // Show the player their progress
  alert(answerArray.join(" "));
}

// var getLimitGuesses = function () {
//   // use this variable to keep track of how many letters are left to be guessed.
//   var limitGuesses = 5;
// }

var getGuess = function() {
  //var limitGuesses = 5;

  // Handling the Player’s Input
  // Take input from the player
  //return prompt("Guess a letter, or click Cancel to stop playing. You have still attempt " + limitGuesses + " guessing.");
  return prompt("Guess a letter, or click Cancel to stop playing. You have still attempt guessing.");
}

var updateGameState = function (guess, word, answerArray) {
  var appearances = 0;
  for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      answerArray[j] = guess;
      appearances++;
    }
  }

  return appearances;
};

var showAnswerAndCongratulatePlayer = function (answerArray) {
  showPlayerProgress(answerArray);
  alert("Good job! The answer was " + answerArray.join(""));
};


var word = pickWord();
var answerArray = setupAnswerArray(word);
// Every time the player guesses a correct letter, this value will be decremented (reduced) by 1 for each instance of that letter in the word.
var remainingLetters = word.length;

// coding the game loop
while (remainingLetters > 0) {
  showPlayerProgress(answerArray);
  var guess = getGuess();

  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else {
    //limitGuesses--; // limiting the guesses
    guess = guess.toLowerCase(); // capital letters
    var correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
  }
}

showAnswerAndCongratulatePlayer(answerArray);
