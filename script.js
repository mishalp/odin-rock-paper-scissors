
let playerScore=0
let pcScore=0

function playRound(playerSelection, computerSelection) {
    console.log("you: "+playerSelection+" pc: "+computerSelection);
    // your code here!
    if (playerSelection == computerSelection) {
        console.log('tie')
    } else {
        if (playerSelection == "rock") {
            if (computerSelection == "paper") {
                //console.log("you loss");
                pcScore++
            } else {
                //console.log("you win");
                playerScore++
            }

        }else if(playerSelection == "paper"){
            if(computerSelection == "rock"){
                //console.log("you win");
                playerScore++
            }else{
               // console.log("you loss");
               pcScore++
            }
        }else{
            if(playerSelection == "scissors"){
                if(computerSelection == "paper"){
                   // console.log("you win");
                   playerScore++
                }else{
                    //console.log("you loss");
                    pcScore++
                }
            }
        }
    }
}

for(i=0;i<5;i++){
    console.log("Round "+(i+1));

    let playerSelection = prompt("Enter (rock/paper/scissors)", "rock")
playerSelection = playerSelection.toLowerCase()
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection)
console.log("score: you:"+playerScore+",pc:"+pcScore);


}
if(playerScore>pcScore){
    console.log("you win");
}else if(playerScore<pcScore){
    console.log("you loss");
}else{
    console.log("tie");
}



function getComputerChoice() {
    let x = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if (x == 1) {
        return "rock"
    } else if (x == 2) {
        return "paper"
    } else {
        return "scissors"
    }
}