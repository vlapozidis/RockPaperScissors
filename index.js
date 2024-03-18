function getComputerChoise(){
    let choises=["Rock","Paper","Scissors"];
    let answer=Math.floor(Math.random()*choises.length);
    let choise=""; 
    if (answer==0){
        choise="Scissors";
    }
    else if (answer==1){
        choise="Rock";
    }
    else{
        choise="Paper"
    }
    return choise;
}
function round (player,computer){
    if (player==computer){
        return "Tie";
    }
    else if(((player == 'Rock'||player=='rock') && computer === 'Scissors') ||((player == 'Paper'|| player=='paper') && computer === 'Rock') ||((player == 'Scissors'||player=='scissors') && computer === 'Paper')){
        return "You Win!!";
    }
    else{
        return "You Lose!!";
    }
}
function round5(){
for(let i=0;i<5;i++){
    let computerchoise=getComputerChoise();
    let playeranswer =prompt("Rock Paper or Scissors?");
    let result=round(playeranswer,computerchoise); 
    window.alert(result);
}
}
round5();