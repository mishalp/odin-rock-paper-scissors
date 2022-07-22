
let playerScore = 0
let pcScore = 0

function playRound(playerSelection, computerSelection, playertxt) {
   document.getElementsByClassName('player')[0].innerHTML = playertxt
   document.getElementsByClassName('computer')[0].innerHTML = computerSelection[1]
    // your code here!
    if (playerSelection == computerSelection[0]) {
        document.getElementById('h2').innerHTML = "tie"
        document.getElementById('status').innerHTML = "Nothing beats"
    } else {
        if (playerSelection == "rock") {
            if (computerSelection[0] == "paper") {
                //console.log("you loss");

                pcScore++
                document.getElementById('status').innerHTML = "Paper beats Rock"
                document.getElementById('computerScr').innerHTML = `computer : ${pcScore}`
            } else {
                //console.log("you win");
                playerScore++
                document.getElementById('status').innerHTML = "Rock beats Scissor"
                document.getElementById('playerScr').innerHTML = `You : ${playerScore}`
            }

        } else if (playerSelection == "paper") {
            if (computerSelection[0] == "rock") {
                //console.log("you win");
                playerScore++
                document.getElementById('status').innerHTML = "Paper beats Rock"
                document.getElementById('playerScr').innerHTML = `You : ${playerScore}`
            } else {
                // console.log("you loss");
                pcScore++
                document.getElementById('status').innerHTML = "Scissor beats paper"
                document.getElementById('computerScr').innerHTML = `computer : ${pcScore}`
            }
        } else {
            if (playerSelection == "scissor") {
                if (computerSelection[0] == "paper") {
                 
                    playerScore++
                    document.getElementById('status').innerHTML = "Scissor beats paper"
                    document.getElementById('playerScr').innerHTML = `You : ${playerScore}`
                } else {
                    //console.log("you loss");
                    pcScore++
                    document.getElementById('status').innerHTML = "Rock beats Scissor"
                    document.getElementById('computerScr').innerHTML = `computer : ${pcScore}`
                }
            }
        }
    }
 
}


   
        const buttons = document.querySelectorAll('.btn')

   
        buttons.forEach(button => button.addEventListener('click', (e)=>{
            
            const playerSelection = e.path[0].id
            const computerSelection = getComputerChoice();
            const playertxt = document.getElementById(playerSelection).textContent
            playRound(playerSelection, computerSelection, playertxt)
            if(playerScore == 5 || pcScore == 5){
                if (playerScore > pcScore) {
                    alert("you win")
                    location.reload()
                    
                } else{
                   alert('you loss')
                   location.reload()
                  
                }
        
                
            }
    


        }))
        





function getComputerChoice() {
    let x = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if (x == 1) {
        return ["rock", "✊"]
    } else if (x == 2) {
        return ["paper", "✋"]
    } else {
        return ["scissors", "✌"]
    }
}