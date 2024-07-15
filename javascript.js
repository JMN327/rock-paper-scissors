"use strict";

let humanScore = 0;
let computerScore = 0;


const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");


btnRock.addEventListener("click", function (){
    playGame("rock")
});
btnPaper.addEventListener("click", function (){
    playGame("paper")
});
btnScissors.addEventListener("click", function (){
    playGame("scissors")
});

function playGame(humanChoice){
    
    let computerChoice = getComputerChoice();
    let thisRound = playRound(humanChoice,computerChoice);

    const scores = document.querySelector("#scores");
    const roundChoices = document.createElement("div");
    roundChoices.classList.add("round-choices");
    roundChoices.setAttribute('style', 'white-space: pre;')
    roundChoices.textContent = "";
    roundChoices.textContent = "You chose: " + humanChoice + "\r\nThe computer chose: " + computerChoice + "\r\n" + thisRound;
    scores.appendChild(roundChoices);



/*     //calculate difference in score and display scores with feedback for all but the final round
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
    } */

/*     if (index < 5) {
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
    } */

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