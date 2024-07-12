"use strict";

let humanScore = 0;
let computerScore = 0;



playGame();

function playGame(){
    console.log("Welcome to the game, have fun!")
    // loop game over 5 rounds:
    for (let index = 1; index < 6; index++) {
        console.log(`Round ${index}, let's play!`) //rounds start message
        let humanChoice = getHumanChoice(); //get player choice from prompt
        let computerChoice = getComputerChoice(); // randomly generate computer choice
        console.log("You chose: " + humanChoice); //display player choice
        console.log("The computer chose: " + computerChoice); //display computer choice
        let thisRound = playRound(humanChoice,computerChoice); //get result of choices
        console.log(thisRound); //display result of choices

        //calculate difference in score and display scores with feedback for all but the final round
        let scoreDifference = humanScore-computerScore;
        let commentary;
        let winningCommentary = ["You're doing great!", "Keep going champ!", "Such tactics!"];
        let drawingCommentary = ["It couldn't be closer!", "All to play for!", "The tension mounts!"]
        let losingCommentary = ["Hang on in there!", "Don't give up!", "Can you make a comeback?"]

        if (scoreDifference === 0) {
            commentary = drawingCommentary[Math.floor(Math.random()*drawingCommentary.length)];
        } else if(scoreDifference > 0){
            commentary = winningCommentary[Math.floor(Math.random()*winningCommentary.length)];
        } else {
            commentary = losingCommentary[Math.floor(Math.random()*losingCommentary.length)];
        }

        if (index < 5) {
            console.log(`The current scores are: You: ${humanScore} points, Computer: ${computerScore} points. ${commentary}`)
        } else {
            // give feedback for final round and end of the game
            if (scoreDifference === 0) {
                commentary = "A draw... play again?";
            } else if(scoreDifference > 0){
                commentary = "You won! This could be the start of something big";
            } else {
                commentary = "You lost! Don't worry, it's just random anyway right?";
            }
            console.log(`Finish! The scores are: You: ${humanScore} points, Computer: ${computerScore} points. ${commentary}`)
        }


    }

}

function playRound(humanChoice,computerChoice){
    let bothResults = humanChoice+computerChoice //concatenate choices to avoid nested switch statements
    let resultText; //variable for the round result message
    //choose the result:
    switch (bothResults) {
        case "rockrock":
            resultText = "A draw! You both chose rock"
            break;

        case "paperrock":
            resultText = "You win! Paper beats rock";
            humanScore += 1;
            break;

        case "scissorsrock":
            resultText = "You lose! Rock beats scissors";
            computerScore += 1;
            break;

        case "rockpaper":
            resultText = "You lose! Paper beats rock";
            computerScore += 1;
            break;

        case "paperpaper":
            resultText = "A draw! You both chose paper";
            break;

        case "scissorspaper":
            resultText = "You win! Scissors beats paper";
            humanScore += 1;
            break;

        case "rockscissors":
            resultText = "You win! Rock beats scissors";
            humanScore += 1;
            break;

        case "paperscissors":
            resultText = "You lose! Scissors beats paper"
            computerScore += 1;
            break;

        case "scissorsscissors":
            resultText = "A draw! You both chose scissors"
            break;
    
        default:
            console.log("something went wrong!  We'll call this a draw game")
            break;
    }
    return resultText;
}

function getComputerChoice(){
    let choice; //variable to store the computer's choice
    let randomValue = Math.ceil(Math.random()*3) //variable to chose random number from 1 to 3
    //switch statement to convert the random number to rock, paper, scissors:
    switch(randomValue){
        case 1:
            choice = "rock"
            break;
        case 2:
            choice = "paper"
            break;
        case 3:
            choice = "scissors"
            break;
        default:
            choice = "something went wrong"
            console.log("the random value is: " + randomValue)
            break;
    }
    
    return choice
}

function getHumanChoice(){
    let choice; //variable to store the human's choice
    //prompt for user input for first letter of rock, paper or scissors to avoid errors and mistakes.  
    //also catches longer strings, upper case and nulls due to cancelling. 
    //loops until correct input entered to avoid issues further into the program:
    while (choice !== "r" && choice !== "p" && choice !== "s") {
        choice = prompt("Please type 'r' to choose rock, 'p' to choose paper or 's' to choose scissors");
        if (choice !== "" && choice !== null) {
            choice = choice[0];
            choice = choice.toLowerCase();
        }
    } 
    //convert one letter inputs to full words
    switch(choice){
        case "r":
            choice = "rock"
            break;
        case "p":
            choice = "paper"
            break;
        case "s":
            choice = "scissors"
            break;
        default:
            choice = "something went wrong"
            console.log("the erroneous choice input is: " + choice)
            break;
    }

    return choice;
}