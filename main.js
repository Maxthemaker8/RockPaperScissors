function ComputerPlay(){
   let computerNumberChoice = getRandomInt(3);
   let computerRPSChoice;
   switch (computerNumberChoice) {
      case 0: computerRPSChoice = 'Rock';
      break;
      case 1: computerRPSChoice = "Paper";
      break;
      case 2: computerRPSChoice = 'Scissors';
      break;
   }
   
   console.log(computerRPSChoice);

}

function getRandomInt(maxIntNotIncluded){
   return Math.floor(Math.random() * maxIntNotIncluded);
}

ComputerPlay();