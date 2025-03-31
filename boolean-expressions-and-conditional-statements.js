/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");




/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/


let hasSword = false;
let hasCompass = true;
let hasGoldCoin = true;

if (choice === "mountains") {
  if (hasTorch || hasCompass) {
    console.log("You safely navigate through the mountains.");
    console.log("You find a dark cave. Do you enter it?");
    const caveChoice = readline.question("Type 'yes' to enter or 'no' to keep moving: ");
    
    if (caveChoice === "yes") {
      if (hasSword) {
        console.log("A wild beast appears! You fight it off with your sword and find a hidden treasure.");
      } else {
        console.log("A wild beast appears! Without a weapon, you barely escape and lose your way.");
      }
    } else {
      console.log("You continue your journey and find a scenic overlook.");
    }
  } else {
    console.log("It's too dark to proceed. You decide to turn back.");
  }
} else if (choice === "village") {
  console.log("You arrive safely at the village.");
  console.log("A merchant offers you a torch for a gold coin.");
  
  if (hasGoldCoin) {
    const buyTorch = readline.question("Do you buy the torch? (yes/no): ");
    if (buyTorch === "yes") {
      hasTorch = true;
      console.log("You now have a torch!");
    }
  }

  console.log("You see a forest path. Do you explore?");
  const forestChoice = readline.question("Type 'yes' to explore or 'no' to stay: ");
  
  if (forestChoice === "yes") {
    if (hasMap) {
      console.log("The map helps you find a hidden treasure.");
    } else {
      console.log("You get lost in the dense forest.");
    }
  } else {
    console.log("You stay in the village and rest.");
  }
} else {
  console.log("You hesitate too long and night falls. You set up camp where you are.");
}