// getComputerChoice - pick a choice for the computer player
function getComputerChoice() {
    let randNum = Math.floor(Math.random()*3)
    switch (randNum) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

// getPlayerChoice - get the player's choice - case insensitive
function getPlayerChoice() {
    playerSelection = prompt("Enter your selection");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

// playRound - compare the two choices to determine who won
function playRound(playerChoice, computerChoice) {
    switch (playerChoice) {
        case "rock":
            if (computerChoice === "paper") {
                return "You lose";
                break;
            } else if (computerChoice === "scissors") {
                return "You win";
                break;
            } else {
                return "Draw";
                break;
            }
        case "paper":
            if (computerChoice === "scissors") {
                return "You lose";
                break;
            } else if (computerChoice === "rock") {
                return "You win";
                break;
            } else {
                return "Draw";
                break;
            }     
        case "scissors":
            if (computerChoice === "rock") {
                return "You lose";
                break;
            } else if (computerChoice === "paper") {
                return "You win";
                break;
            } else {
                return "Draw";
                break;
            }
    }
}

function game() {
    let computerWins = 0;
    let playerWins = 0;
    for (let i = 1; i <= 5; i++) {
        let result = playRound(getPlayerChoice(), getComputerChoice());
        switch (result) {
            case "You lose":
                computerWins++;
                break;
            case "You win":
                playerWins++;
                break;
            case "Draw":
                i--;
                break;
        }
    }

    if (computerWins > playerWins) {
        console.log(`You lose, ${playerWins} to ${computerWins}`);
    } else if (playerWins > computerWins) {
        console.log(`You win: ${playerWins} to ${computerWins}`);
    } else  // something went wrong
        console.log("Something went wrong");
}


game();