
// COMPUTER CHOICE
function getComputerChoice() {
    const options = ["ROCK", "PAPER", "SCISSORS"];

    const optionRandom = Math.floor(Math.random() * options.length);
    const computerChoice = options[optionRandom];

    return computerChoice;
}
//console.log(getComputerChoice());


// USER CHOICE
function userChoice() {
    let choice = prompt("Please, enter \"Rock, Paper or Scissors\": ");

    return choice;
}
//console.log("player choice" + playerChoice);


// PLAY ROUND


function playRound(userChoice, computerChoice) {
    let result;

    if (userChoice === computerChoice) {
        result = "It's a TIE!";
    } else if ((userChoice === "ROCK" && computerChoice === "SCISSORS") ||
               (userChoice === "PAPER" && computerChoice === "ROCK") ||
               (userChoice === "SCISSORS" && computerChoice === "PAPER")) {
        result = "You WIN!!";
    } else {
        result = "You LOSE!!";
    }

    return result;
}

//console.log(round[0]);



// BETTER OF FIVE 
let wins = 0;
let lose = 0;
let tie = 0;


function game() {
    for(let i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        const playerChoice = userChoice().toUpperCase();

        const round = playRound(playerChoice, computerChoice);

        if (round.includes("WIN")) {
            wins++;
        } else if (round.includes("LOSE")) {
            lose++;
        } else if (round.includes("TIE")) {
            tie++;
        }

        console.log(round);
        console.log("Wins: " + wins);
        console.log("Lose: " + lose);
        console.log("Tie: " + tie);

        if (wins >= 3 || lose >= 3) {
            break;
        } 
    }

    if (wins > lose) {
        console.log("Congratulation, you win the game!");
    } else if (lose > wins) {
        console.log("Ohh sowwy, you lost the game!");
    } else {
        console.log ("The game ended in a tie!");
    }
}

game();