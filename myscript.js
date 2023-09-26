function getComputerChoice() {
    let arr = ["ROCK", "PAPER", "SCISSOR"];
    return (arr[Math.floor(Math.random() * arr.length)]);
}



function playRound(playerSelection, computerSelection) {
    const userChoice = playerSelection.toUpperCase();


    if (userChoice === "ROCK") {
        if (computerSelection === "ROCK") {
            console.log("You Tied! Rock matches Rock");
        }

        else if (computerSelection === "PAPER") {
            console.log("You Lose! Paper beats Rock");
        }

        else {
            console.log("You Win! Rock beats Scissor");
        }
    }


    if (userChoice === "SCISSOR") {
        if (computerSelection === "ROCK") {
            console.log("You Lose! Rock beats Scissor");
        }

        else if (computerSelection === "SCISSOR") {
            console.log("You Tied! Scissor matches Scissor");
        }

        else {
            console.log("You Win! Scissor beats Paper");
        }
    }   

    if (userChoice === "PAPER") {
        if (computerSelection === "ROCK") {
            console.log("You Win! Paper beats Rock");
        }

        else if (computerSelection === "SCISSOR") {
            console.log("You Lose! Scissor beats Paper");
        }
        else {
            console.log("You Tied! Paper matches Paper");
        }
    }

}


function game(number) {
    
    for (let i = 1; i <= number; i++) {
        const computerSelection = getComputerChoice();
        console.log("COMPUTER: " + computerSelection);
        const playerSelection = prompt("Choose Rock, Paper, or Scissor:");
        console.log("YOU: " + playerSelection);
        playRound(playerSelection, computerSelection);
    }
}

console.log(game(5));



