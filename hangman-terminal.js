// generate word
// print dashes
// take user input
// check for win
// if not {
//     check for correct letter
// print letters
// print body/lives
// o
// /|\
// /\
// if win{
// print congrats
// }
// }

// generate word: randomly choose word, replace word with dashes, print dashes

// check for win: loop through word vs guess, if index of letter matches, replace dash with letter, if all letters match "you win"

const readline = require("readline");
const { brotliDecompressSync } = require("zlib");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// let alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x','y', 'z' ]

let wordChoices = [
  "word",
  "dog",
  "rabbit",
  "cat",
  "goldfish",
  "goat",
  "elephant",
  "lion",
  "gazelle",
  "tiger",
];
let chosenWord = "";
let userGuess = "";
let answerArray = [];

const generateWord = () => {
  const highest = wordChoices.length;

  let randomNumber = Math.floor(Math.random() * highest);
  // console.log(randomNumber)
  chosenWord = wordChoices[randomNumber];

  for (let i = 0; i < chosenWord.length; i++) {
    answerArray[i] = "_";
  }
  // console.log(answerArray)
  // console.log(chosenWord)
};
generateWord();

let remainingLetters = chosenWord.length;
let lives = 6;

const checkLetter = (userGuess) => {
  let checkArr = chosenWord.split("");
  // console.log(checkArr);
  if (checkArr.includes(userGuess)) {
    for (let j = 0; j < chosenWord.length; j++) {
      if (chosenWord[j] == userGuess) {
        answerArray[j] = userGuess;
        remainingLetters--;
      }
    }
  } else {
    lives--;
  }

  printBoard();
  checkForWin();
  // console.log(remainingLetters)
};

const checkForWin = () => {
  if (lives == 0) {
    console.log("You ran out of lives");
    return;
  } else if (remainingLetters == 0) {
    console.log("Congrats, you got the word: " + chosenWord);
    return;
  } else {
    getPrompt();
  }
};

const printBoard = () => {
  if (lives == 6) {
    console.log("_ _ _");
    console.log(" |   ");
    console.log(" |  ");
    console.log(" |  ");
    console.log("_|_");
    console.log(answerArray.join(" "));
  } else if (lives == 5) {
    console.log("_ _ _");
    console.log(" |   O");
    console.log(" |  ");
    console.log(" |  ");
    console.log("_|_");
    console.log(answerArray.join(" "));
  } else if (lives == 4) {
    console.log("_ _ _");
    console.log(" |   O");
    console.log(" |   |");
    console.log(" |  ");
    console.log("_|_");
    console.log(answerArray.join(" "));
  } else if (lives == 3) {
    console.log("_ _ _");
    console.log(" |   O");
    console.log(" |  /|");
    console.log(" |  ");
    console.log("_|_");
    console.log(answerArray.join(" "));
  } else if (lives == 2) {
    console.log("_ _ _");
    console.log(" |   O");
    console.log(" |  /|\\");
    console.log(" |  ");
    console.log("_|_");
    console.log(answerArray.join(" "));
  } else if (lives == 1) {
    console.log("_ _ _");
    console.log(" |   O");
    console.log(" |  /|\\");
    console.log(" |  / ");
    console.log("_|_");
    console.log(answerArray.join(" "));
  } else {
    console.log("_ _ _");
    console.log(" |   O");
    console.log(" |  /|\\");
    console.log(" |  / \\");
    console.log("_|_");
  }
};

const getPrompt = () => {
  rl.question("Your Guess: ", function (guess) {
    userGuess = guess.trim().toLowerCase();
    // console.log(userGuess)
    if (userGuess.length > 1 || userGuess == "") {
      console.log("***GUESS CAN ONLY BE A SINGLE LETTER***");

      getPrompt();
    }
    checkLetter(userGuess);
  });
};
console.log("Let's play Hangman");
printBoard();
getPrompt();
