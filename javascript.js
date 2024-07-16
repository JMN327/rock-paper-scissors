"use strict";

let humanScore = 0;
let computerScore = 0;


const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");
const commentary = document.querySelector("#commentary");
const scores = document.querySelector("#scores");

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
    let resultThisRound = playRound(humanChoice,computerChoice);

    commentary.textContent = "You chose: " + humanChoice + "\r\nThe computer chose: " + computerChoice + "\r\n" + resultThisRound;
    
    if (humanScore < 5 && computerScore < 5) {
        scores.textContent = "You: " + humanScore + " points     Computer: " + computerScore + " points"
    } else if (humanScore === 5) {
        scores.textContent = "You: " + humanScore + " points     Computer: " + computerScore + " points\r\n" +
        "CONGRATULATIONS, YOU WIN!"
        humanScore = 0;
        computerScore = 0;
    } else {
        scores.textContent = "You: " + humanScore + " points     Computer: " + computerScore + " points\r\n" +
        "BAD LUCK, THE COMPUTER HAS WON"
        humanScore = 0;
        computerScore = 0;
    }
}

function playRound(humanChoice,computerChoice){
    let bothResults = humanChoice+computerChoice //concatenate choices to avoid nested switch statements
    let resultText; 
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
    let choice; 
    let randomValue = Math.ceil(Math.random()*3) 
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