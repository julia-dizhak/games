// Hangman is a word-guessing game. One player picks a secret word, and the other player tries to guess it.

// A game loop generally does the following:
// 1. Takes input from the player
// 2. Updates the game state
// 3. Displays the current state of the game to the player

// coding the game

// choosing a random word (TODO: choose topic)
// secret words (TODO)
// var words = [
//   "javascript",
//   "monkey",
//   "summer",
//   "pancake",
//   "wine",
//   "ironman"
// ];
var words = [
  "wine"
];

// Pick a random word
// by using Math.random and Math.floor to pick a random word from the array
var word = words[Math.floor(Math.random() * words.length)];

// Set up (creating) the answer array
var answerArray = [];
for ( var i=0; i < word.length; i++) {
  answerArray[i] = "_";
}

// use this variable to keep track of how many letters are left to be guessed.
// Every time the player guesses a correct letter, this value will be decremented (reduced) by 1 for each instance of that letter in the word.
var remainingLetters = word.length;

// coding the game loop
while (remainingLetters > 0) {
  // Show the player their progress
  alert(answerArray.join(" "));

  // Handling the Player’s Input
  // Take input from the player
  // Update answerArray and remainingLetters for every correct guess
  var guess = prompt("Guess a letter, or click Cancel to stop playing.");

  if (guess === null) {
    break; // exit the game loop
  } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else {
    // Update the game state with the guess
    for (var j=0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] === guess;
        remainingLetters --;
      }
    }
  }
}
// the end of the game loop

// Show the answer and congratulate the player
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);
