const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  }else {
  console.log('error input');
}
}
function getRandomInt(min = 0 ,max = 2) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const getComputerChoice = () => {
  var randomNumber =getRandomInt();
  switch(randomNumber){
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors'
    break;
  }
  return randomNumber;
}

const determineWinner = (getUserChoice, getComputerChoice) => {
  if(getUserChoice === getComputerChoice){
   return console.log('The game is a tie!')
  };
  if(getUserChoice === 'rock'){
    if(getComputerChoice === 'paper'){
      return 'The computer won!';
    }
  }else {
    return 'You won!';
  }if(getUserChoice === 'paper'){
    if(getComputerChoice === 'scissors'){
      return 'The computer won!';
    }
  }else {
    return 'You won!';
  }
  if(getUserChoice === 'scissors'){
    if(getComputerChoice === 'rock'){
      return 'The computer won!';
    }
  }else {
    return 'You won!';
  }

}

const playGame = () => {
   const userChoice = getUserChoice('rock');
   const computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice);
   console.log('The computer threw:' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
};
 
playGame();
