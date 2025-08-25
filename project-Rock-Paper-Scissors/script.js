function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    return (randomNum == 0) ? "rock"
    : (randomNum == 1) ? "paper"
    : "scissors";
}

function getHumanChoice() {
    let choice = prompt("Input paper, rock, or scissors:");
    choice = choice.toLowerCase();
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return "Tied!"
    }
    switch (humanChoice) {
        case "rock":
            if (computerChoice == "paper") {
                computerScore += 1;
                return "Computer wins";
            }
            humanScore += 1;
            return "Human wins";

        case "paper":
            if (computerChoice == "scissors") {
                computerScore += 1;
                return "Computer wins";
            }
            humanScore += 1;
            return "Human wins";

        case "scissors":
            if (computerChoice == "rock") {
                computerScore += 1;
                return "Computer wins";
            }
            humanScore += 1;
            return "Human wins";
    }
}

function playGame() {
    let humanChoice;
    let computerChoice;
    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }

    if (humanScore == computerScore) {
        console.log("It's a tie!");
    } else {
        const winner = (computerScore > humanScore) ? "computer" : "human";
        console.log(`The winner is the ${winner}`);
    }
}

playGame();