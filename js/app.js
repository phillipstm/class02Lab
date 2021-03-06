/*
    FILE: app.js
    DATE: 2022-06-21
    AUTHOR: Code Fellows
*/

"use strict";

/**
 * Initialize all the code when the page loads.
 */
function initialize() {
  console.log("in initialize()");
  handleGuessingGame();
  handlePlaneJumping();
  handleStatesLived();
  handleSpeaking();
  handleBooleans();
  handleColors();
  askFavoritePlaces();
}

/**
 * Prompts user for Guessing status
 */
function handleGuessingGame() {
  let answer = confirm("Are you ready to play a guessing game about me?");
  if (answer === true) {
    console.log("Awesome, let's do it!");
  } else {
    console.log("Come on, it'll be fun");
  }
}

 
/**
 * Prompts user for Jumping status
 */
function handlePlaneJumping() {
    let answer = confirm("Have I ever jumped out of a plane ?");
    if (answer === true) {
      console.log("HECK NO, ARE YOU KIDDING ME!");
    } else {
      console.log("CORRECT.");
    }
  }

/**
 * Prompts user for living status
 */
function handleStatesLived() {
    let answer = confirm("Do you think I've lived in any states besides IA & CA?");
    if (answer === true) {
      console.log("Yep, MO, Ok, & KS");
    } else {
      console.log("Better Luck next time.");
    }
  }

/**
 * Prompts user for speaking status
 */
function handleSpeaking() {
    let answer = confirm("Do you think I can speak another language?");
    if (answer === true) {
      console.log("Si, Habla espanol.");
    } else {
      console.log("Sorry, that is incorrect.");
    }
  }




/**
 * Demonstrate using boolean values
 */
function handleBooleans() {
  // Set up some variables
  let myBool = false;
  let anotherBool = false;
  let thirdBool = true;

  // Boolean operators AND and OR
  if (myBool && thirdBool) {
    console.log(`myBool and thirdBool were both true`);
  } else if (myBool || anotherBool) {
    console.log(`myBool or anotherBool was true`);
  } else if (thirdBool) {
    console.log(
      `myBool was false and anotherBool was false, but thirdBool was true.`
    );
  } else {
    console.log(`Were any of the variables true?`);
  }
}

/**
 * Ask the user for their favorite color and respond.
 */
function handleColors() {
  let color = prompt("What's my favorite color?");
  // Convert the color to lowercase and evaluate it
  switch (color.toLowerCase()) {
    case "red":
      console.log(`Your favorite color is red`);
      break;
    case "blue":
      console.log(`My favorite color is blue`);
      break;
    default:
      console.log(`You can't guess what my favorit color is?`);
  } // end of switch
  console.log(`finsihed with switch`);
}

/**
 * Prompt for guess a number
 */

function handleGuessNumber(){
let guessNumber ="What number am I thinking of?";
let guessgoal = 3;  //arbitary correct answer
let finished = false;  //success flag
let maxAttempts = 4;  // max guess attempts
let currantAttempts = 0; //initialize the loop variable
while ( currantAttempts < maxAttempts && ! finished ) {
  currantAttempts++;  //increment the loop condition variable
  let answer = prompt (guessNumber); //What is the data type returnedby prompt? How do you convert a string to a number?
  let realAnswer = parseInt (answer);
  let output = ""

  if (realAnswer > guessgoal) {
    output = "Too high";
  } else if (realAnswer < guessgoal)  {
    output = "Too low";
  } else if(realAnswer === guessgoal) {
    output = "Awesome!";
    finished = true;  //completion flag
  }
  alert(output);
}
}  //end loop


/**
 * Game to guess favorite places. With multi-answer loop with 6 attempts.
 * 
 */
function askFavoritePlaces() {

  let questionPlaces ="What are my favorite places?";
  let questionGoal = 1;  //arbitary correct answer
  let finished = false;  //success flag
  let maxAttempts = 6;  // max guess attempts
  let placeList = ["beaches","waterfalls","big cities"];

  

    console.log('Beaches, Waterfalls, Big Cities');
    console.log(`Looping through the array`);

  let output = "Now you know my favorite places.";

  let done = false;
  for(let i = 0; i < maxAttempts && !done; i++){
   let answer = prompt(questionPlaces);
   answer = answer.toLowerCase();
   let response = "nope try again"
   let x = placeList.length;
   for(let j = 0; j < x && !done; j++){
     console.log(placeList[j]);
     if(answer === placeList[j]){
      response = "Awesome!";
      console.log("finish");
      done = true;
     }
 }  
}
}

 /*
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */







/*
  if(placeList(answer)){
    response = "correct"
    done = true;
  }
  alert(response);
  //End of loop
 }
*/

