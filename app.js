let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score")


// This is the new thing in this whole lecture
const genCompChoice = ()=>{
    // rock, paper, scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    // console.log(`Game was draw.`);
    msg.innerText = "Game was draw. Play Again";
    msg.style.backgroundColor = "#081b31";
};


const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log(`You lose`);
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    // console.log(`user choice = ${userChoice}`);
    const compChoice = genCompChoice();
    // console.log(`computer choice = ${compChoice}`);

    if(userChoice===compChoice){
        // draw
        drawGame();
    } else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice==="paper" ? false: true;
        } else if(userChoice==="paper"){
            userWin = compChoice==="scissors" ? false: true;
        } else if(userChoice==="scissors"){
            userWin = compChoice==="rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});