// Hangman is a word-guessing game. One player picks a secret word, and the other player tries to guess it.

// A game loop generally does the following:
// 1. Takes input from the player
// 2. Updates the game state
// 3. Displays the current state of the game to the player

// coding the game

// choosing a random word (TODO: choose topic)
// secret words
var words = [
  "javascript",
  "monkey",
  "summer",
  "pancake",
  "wine",
  "ironman"
];

// use Math.random and Math.floor to pick a random word from the array
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);

// creating the answer array
var answerArray = [];
for ( var i; i < word.length; i++) {
  answerArray[i] = "_";
  console.log(answerArray)
}
console.log(answerArray)

//use this variable to keep track of how many letters are left to be guessed.
//Every time the player guesses a correct letter, this value will be decremented (reduced) by 1 for each instance of that letter in the word.
var remainingLetters = word.length;
