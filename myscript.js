function getComputerChoice() {
    let arr = ["ROCK", "PAPER", "SCISSOR"];
    return (arr[Math.floor(Math.random() * arr.length)]);
}

function disableButtons() {
    btn.forEach(button2 => {
        button2.disabled = true;
    });
}
const btn = document.querySelectorAll("#btn");
const para = document.querySelector("#result");
const computerUI = document.querySelector("#computer-ui");
const playerUI = document.querySelector("#player-ui");


btn.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.value);
        playerUI.textContent = button.value;

        if (button.value === "ROCK") {
            playerUI.style.borderColor = "rgb(196, 166, 224)";
        }
        else if (button.value === "PAPER") {
            playerUI.style.borderColor = "rgb(152, 224, 152)";
        }
        else {
            playerUI.style.borderColor = "rgb(241, 164, 164)";
        }
        
    })
});

function playRound(userChoice) {
    const computerSelection = getComputerChoice();
    computerUI.textContent = computerSelection;

    if (userChoice === "ROCK") {
        if (computerSelection === "ROCK") {
            para.textContent = "You Tied! Rock matches Rock";
            computerUI.style.borderColor = "rgb(196, 166, 224)";
            para.style.color = "rgb(112, 112, 112)";
        }

        else if (computerSelection === "PAPER") {
            para.textContent = "You Lose! Paper beats Rock";
            computerUI.style.borderColor = "rgb(152, 224, 152)";
            para.style.color = "rgb(211, 133, 133)";
        }

        else {
            para.textContent = "You Win! Rock beats Scissor";
            computerUI.style.borderColor = "rgb(241, 164, 164)";
            para.style.color = "rgb(123, 211, 145)";
        }
    }


    if (userChoice === "SCISSOR") {
        if (computerSelection === "ROCK") {
            para.textContent = "You Lose! Rock beats Scissor";
            computerUI.style.borderColor = "rgb(196, 166, 224)";
            para.style.color = "rgb(211, 133, 133)";
        }

        else if (computerSelection === "SCISSOR") {
            para.textContent = "You Tied! Scissor matches Scissor";
            computerUI.style.borderColor = "rgb(241, 164, 164)";
            para.style.color = "rgb(112, 112, 112)";
            
        }

        else {
            para.textContent = "You Win! Scissor beats Paper";
            computerUI.style.borderColor = "rgb(152, 224, 152)";
            para.style.color = "rgb(123, 211, 145)";
        }
    }   

    if (userChoice === "PAPER") {
        if (computerSelection === "ROCK") {
            para.textContent = "You Win! Paper beats Rock";
            computerUI.style.borderColor = "rgb(196, 166, 224)";
            para.style.color = "rgb(123, 211, 145)";
        }

        else if (computerSelection === "SCISSOR") {
            para.textContent = "You Lose! Scissor beats Paper";
            computerUI.style.borderColor = "rgb(241, 164, 164)";
            para.style.color = "rgb(211, 133, 133)";
            
        }
        else {
            para.textContent = "You Tied! Paper matches Paper";
            computerUI.style.borderColor = "rgb(152, 224, 152)";
            para.style.color = "rgb(112, 112, 112)";
        }
    }
    
        
};




function game(number) {
    
    for (let i = 1; i <= number; i++) {
        const computerSelection = getComputerChoice();
        console.log("COMPUTER: " + computerSelection);
        const playerSelection = prompt("Choose Rock, Paper, or Scissor:");
        console.log("YOU: " + playerSelection);
        playRound(playerSelection, computerSelection);
    }
}





