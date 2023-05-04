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



let wordChoices = ["word", "dog", "rabbit", "cat", "goldfish", "goat"]
let alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r',  's', 't', 'u', 'v', 'w', 'x','y', 'z' ]
let chosenArr = []
let chosenWord = ""
let barStr = ""
let userGuess = ""


const generateWord = () => {
    const lowest = 0;
    const highest = wordChoices.length -1;
    let randomNumber = Math.random() * (highest - lowest) + lowest;
    randomNumber = Math.floor(randomNumber);
    chosenWord = wordChoices[randomNumber]
    chosenArr = chosenWord.split("")
    console.log(chosenArr)
}
const printBoard = () => {
    let barArr = []
    for(let i = 0; i < chosenArr.length; i++)
    {
        barArr.push("_")
    }
    barStr = barArr.toString().replace(/,/g , " ")
    console.log(barStr)
}

const checkLetter = (userGuess) => {
    console.log(chosenArr)
}


const getPrompt = () => {
rl.question("Your Guess: ", function (guess) {
    userGuess = guess.trim().toLowerCase()
    console.log(userGuess)
    if (userGuess.length > 1) {
        console.log("***GUESS CAN ONLY BE A SINGLE LETTER***")
        console.log(chosenArr)
        printBoard()
        getPrompt()
    }
      checkLetter(userGuess)  
      getPrompt()
    });
}

generateWord()
printBoard()
getPrompt()



