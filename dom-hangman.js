
var c = document.querySelector("canvas");

canvas.width = window.innerWidth/3.5;
canvas.height = window.innerHeight/2.5

var ctx = c.getContext("2d");
ctx.lineWidth = 10;

ctx.moveTo(0, 370);
ctx.lineTo(300, 370);
ctx.moveTo(150, 20);
ctx.lineTo(150, 370);
ctx.moveTo(50, 20);
ctx.lineTo(370, 20);
ctx.stroke();

ctx.lineWidth = 4;
// head
ctx.beginPath();
ctx.arc(370, 60, 25, 0, 2 * Math.PI);
ctx.stroke();
// body
ctx.moveTo(370, 90);
ctx.lineTo(370, 200);
ctx.stroke();
// left arm
ctx.moveTo(360, 100);
ctx.lineTo(320, 150);
ctx.stroke();
// right arm
ctx.moveTo(380, 100);
ctx.lineTo(420, 150);
ctx.stroke();
// left leg
ctx.moveTo(360, 205);
ctx.lineTo(340, 290);
ctx.stroke();
// right leg
ctx.moveTo(380, 205);
ctx.lineTo(400, 290);
ctx.stroke();


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
document.getElementById("chosenWord").innerHTML = answerArray.join(" ")
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

};

printBoard();

