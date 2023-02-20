// Imports readline and allows us to do input in and out.
const readline = require('readline');
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
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.");
  console.log("-------------------------");


//////////////////
// The function that starts the whole game
// async function start() {
  // Intro game text
/*   console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber); */
  
/////////////////



  async function pickHighNum(){
    // Set lowest num
    let lowNum = 1;
    // Set Highest num
    let highNum = 100;
    let calculation = Math.floor(Math.random() * highNum)
    

   
    let hiddenNumber = await ask(`\nPlease choose a number greater than ${lowNum} but less than ${highNum} `);
    console.log(`The number you picked was: ${hiddenNumber} `)
    
    console.log(`\nYou set ${hiddenNumber} as the highest value.`);

    timeToPlay()

    async function timeToPlay(){
          let cpuPlayerTry = await ask(`I will guess ${calculation} is that correct? r or w` )

          if (cpuPlayerTry === "w" && calculation !== hiddenNumber ){
              console.log("Try again cpu your cores are fried");
          
            calculation = Math.floor(Math.random() * highNum)
            
            timeToPlay()
                    
          }  else if (cpuPlayerTry === "r" && hiddenNumber === hiddenNumber){
            console.log("Chip off the good old fab! You have been binned well")

          } 
       

         
          
    }
    

 
  


  }

  pickHighNum();

}
//Stops the star function from running, "exits"
//  process.exit();
