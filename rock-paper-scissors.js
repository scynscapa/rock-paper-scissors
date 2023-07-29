// getComputerChoice - pick a choice for the computer player
function getComputerChoice() {
    let randNum = Math.floor(Math.random()*3)
    switch (randNum) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

// playRound - compare the two choices to determine who won
function playRound(playerChoice, computerChoice) {
    switch (playerChoice) {
        case "Rock":
            if (computerChoice === "Paper") {
                return "You lose";
                break;
            } else if (computerChoice === "Scissors") {
                return "You win";
                break;
            } else {
                return "Draw";
                break;
            }
        case "Paper":
            if (computerChoice === "Scissors") {
                return "You lose";
                break;
            } else if (computerChoice === "Rock") {
                return "You win";
                break;
            } else {
                return "Draw";
                break;
            }     
        case "Scissors":
            if (computerChoice === "Rock") {
                return "You lose";
                break;
            } else if (computerChoice === "Paper") {
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

const container = document.querySelector('#results');
const div = document.createElement('div');

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', updateScore);
});

let playerScore = 0;
let computerScore = 0;

function updateScore(e) {
    let winOrLose = e.target.textContent;
    let divText = playRound(winOrLose, getComputerChoice());

    console.log(`winOrLose: ${winOrLose}, divText: ${divText}`);

    switch (divText) {
        case "You lose":
            computerScore++;
            divText = `You lose this round.`;
            break;
        case "You win":
            playerScore++;
            divText = `You win this round.`;
            break;
        case "Draw":
            divText = `Draw.`;
            break;
    }
    if (computerScore >= 5) {
        divText = `${divText}\n Computer Wins!\n${computerScore} to ${playerScore}`;
        buttons.forEach(button => {
            button.removeEventListener('click', updateScore);
        });
    } else if (playerScore >= 5) {
        divText = `${divText}\n You Win!\n${playerScore} to ${computerScore}`;
        buttons.forEach(button => {
            button.removeEventListener('click', updateScore);
        });
    }

    div.textContent = divText;
    container.appendChild(div);
}