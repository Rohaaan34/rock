function getComputerChoice(){
    const choices = ['камень','ножницы','бумага']
    return choices [Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection,computerSelection){
   playerSelection = playerSelection.toLowerCase()
   computerSelection = computerSelection.toLowerCase()
    if(playerSelection === computerSelection){
        return 'Ничья'
    }
    if(
        (playerSelection === 'камень' && computerSelection === 'ножницы')||
        (playerSelection === 'ножницы' && computerSelection === 'бумага')||
        (playerSelection === 'бумага' && computerSelection === 'камень')
    ){
     return`Вы победили! ${playerSelection} Побеждает ${computerSelection}`
    }else{
        return`Вы проиграли! ${computerSelection} Побеждает ${playerSelection}`
    }
}

const computerSelection = getComputerChoice()
let playerSelection = prompt('Камень','Ножницы','Бумага')
function game(){
    console.log(playRound(playerSelection,computerSelection))
    playerSelection = prompt('Камень','Ножницы','Бумага')
    console.log(playRound(playerSelection,computerSelection))
    playerSelection = prompt('Камень','Ножницы','Бумага')
    console.log(playRound(playerSelection,computerSelection))
    playerSelection = prompt('Камень','Ножницы','Бумага')
    console.log(playRound(playerSelection,computerSelection))
    playerSelection = prompt('Камень','Ножницы','Бумага')
    console.log(playRound(playerSelection,computerSelection))
    playerSelection = prompt('Камень','Ножницы','Бумага')
}
game()



