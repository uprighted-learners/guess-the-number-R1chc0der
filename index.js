// Imports readline and allows us to do input in and out.
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

// Ask function that takes in text and returns and resolves a promise
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
// run file in terminal with: node fileName.js
// ! DO NOT TOUCH CODE ABOVE THIS LINE

// Async start function being invoked
start();

// The function that starts the whole game
async function start() {
  // Intro game text
  // Game intro message
  console.log("\n-------------------------");
  console.log("Welcome to number picker!");
  console.log(
    "Let's play a game where you (human) make up a number and I (computer) try to guess it."
  );
  console.log("Must be a number between 1 and 100");
  console.log("-------------------------");

  //////////////////
  // The function that starts the whole game
  // async function start() {
  // Intro game text
  /* console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
console.log('You entered: ' + secretNumber); */

  /////////////////
  async function pickHighNum() {
    // Set lowest num
    let lowNum = 1;
    // Set Highest num
    let highNum = 100;
    // variable calculation generating number base on floor method while passing in highName variable
    //let calculation = Math.floor(Math.random() * highNum);
    let calculation = Math.floor(Math.random() * highNum + lowNum);

    // calling a function written below works due to JS hoisting abilities
    guessInt();

    //

    // using async and await response
    async function guessInt() {
      let cpuPlayerTry = await ask(
        // cpu guessing based on number human thought of
        `I will guess ${calculation} is that correct? \n yes or no \n`
      );

      // if response is "no" from the question above run console.log...
      if (cpuPlayerTry == "no") {
        console.log("Try again cpu your cores are fried");
        // calling the function to a new number can be picked
        pickHighNum();
      } else if (cpuPlayerTry == "yes") {
        console.log(
          "Chip off the good old fab! You have been binned well, gameover!"
        );
      }
    }
  }

  pickHighNum();
}
