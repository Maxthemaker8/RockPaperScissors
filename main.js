let computerRPSChoice;
let userChoice;
let displayParagraph = document.getElementById('placeholder');



function getRandomInt(maxIntNotIncluded){
   return Math.floor(Math.random() * maxIntNotIncluded);
}


function ComputerPlay(){
   let computerNumberChoice = getRandomInt(3);
   
   switch (computerNumberChoice) {
      case 0: computerRPSChoice = 'Rock';
      break;
      case 1: computerRPSChoice = "Paper";
      break;
      case 2: computerRPSChoice = 'Scissors';
      break;
   }

   console.log(`computer chose ${computerRPSChoice}`);
}


function UserPlay(){
   userChoice =prompt("please pick rock, paper, or scissors").toLowerCase();

   if(userChoice!= 'rock' && userChoice!= 'paper' && userChoice!= 'scissors'){
      console.log('not a valid choice! Reload to try again!');
      return; 
   }

   console.log(`you chose ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}`);
}
function PlayRound(){
   switch(userChoice) {
      case 'rock':
         if(computerRPSChoice == 'Rock'){
            displayParagraph.innerHTML = 'tie!';
         }
         else if(computerRPSChoice == 'Paper'){
            displayParagraph.innerHTML = 'lose!';
         }
         else{ displayParagraph.innerHTML = 'win';}
         break;
      case 'paper':
         if(computerRPSChoice == 'Rock'){
            displayParagraph.innerHTML = 'win!';
         }
         else if(computerRPSChoice == 'Paper'){
            displayParagraph.innerHTML = 'tie!';
         }
         else{ displayParagraph.innerHTML = 'lose!';}
         break;
      case 'scissors':
         if(computerRPSChoice == 'Rock'){
            displayParagraph.innerHTML = 'lose!';;
         }
         else if(computerRPSChoice == 'Paper'){
            displayParagraph.innerHTML = 'win!';;
         }
         else{ displayParagraph.innerHTML = 'tie!';}
         break;
   }
}

ComputerPlay();
UserPlay();
PlayRound();
