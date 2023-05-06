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


let wordChoices = ["word", "dog", "rabbit", "cat", "goldfish", "goat", "elephant", "lion", "gazelle", "tiger"]
let chosenWord = ""
let userGuess = ""
let answerArray = []





const generateWord = () => {
    const highest = wordChoices.length;

    let randomNumber = Math.floor(Math.random() * highest);
    // console.log(randomNumber)
    chosenWord = wordChoices[randomNumber]

    for (let i = 0; i < chosenWord.length ; i++){
        answerArray[i] = "_"
    }
    console.log(answerArray)
    console.log(chosenWord)
   
}

generateWord()

let remainingLetters = chosenWord.length
console.log(remainingLetters)



const getPrompt = () => {

rl.question("Your Guess: ", function (guess) {
    userGuess = guess.trim().toLowerCase()
    console.log(userGuess)
    if (userGuess.length > 1) {
        console.log("***GUESS CAN ONLY BE A SINGLE LETTER***")
        console.log(chosenArr)
        console.log(chosenBarStr)
        getPrompt()
    }
      checkLetter()  
    });
}







