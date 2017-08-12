// Hangman is a word-guessing game. One player picks a secret word, and the other player tries to guess it.

// A game loop generally does the following:
// 1. Takes input from the player
// 2. Updates the game state
// 3. Displays the current state of the game to the player

// coding the game

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
var word = words[Math.floor(Math.random() * words.length)];

// Set up (creating) the answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

// use this variable to keep track of how many letters are left to be guessed.
// Every time the player guesses a correct letter, this value will be decremented (reduced) by 1 for each instance of that letter in the word.
var remainingLetters = word.length;
var limitGuesses = 5;

// coding the game loop
while (remainingLetters > 0 && limitGuesses > 0) {
  // Show the player their progress
  alert(answerArray.join(" "));

  // Handling the Player’s Input
  // Take input from the player
  // Update answerArray and remainingLetters for every correct guess
  var guess = prompt("Guess a letter, or click Cancel to stop playing. You have still attempt " + limitGuesses + " guessing.");

  if (guess === null) {
    break; // exit the game loop
  // } else if ( typeof guess !== "string" ) {
  //   alert("Please enter a string letter.");
  } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else {
    limitGuesses--; // limiting the guesses
    guess = guess.toLowerCase(); // capital letters
    // Update the game state with the guess
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess && answerArray[j] === "_") {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
  // the end of the game loop
}

// Show the answer and congratulate the player
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);
