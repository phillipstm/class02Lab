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
  handleStatesLived();
  handlePlaneJumping();
  handleSpeaking();
  handleBooleans();
  handleColors();
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
  let color = prompt("What is your favorite color?");
  // Convert the color to lowercase and evaluate it
  switch (color.toLowerCase()) {
    case "red":
      console.log(`Your favorite color is red`);
      break;
    case "blue":
      console.log(`Your favorite color is blue`);
      break;
    default:
      console.log(`I don't know what your favorit color is`);
  } // end of switch
  console.log(`finsihed with switch`);
}