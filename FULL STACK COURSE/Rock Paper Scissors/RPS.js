console.log('hi');
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ) {
  return userInput;
} else {
  console.log('Error!');
}
  };

 
 
  const getComputerInput = computer => {
    computer = Math.round(Math.random()*2);

    switch (computer){
      case 0:
      computerChoice = 'rock'
      return computerChoice
      break;
      case 1:
      computerChoice = 'paper'
      return computerChoice
      break;
      case 2:
      computerChoice = 'scissors'
      return computerChoice
      break;
      }
  }

 let player = getUserChoice('rock')
 let comp = getComputerInput()
  console.log(getUserChoice('rock'))
  console.log(getComputerInput())
function determineWinner(getUserChoice,getComputerInput){
  if (getUserChoice === 'rock'&& getComputerInput === 'rock'){
    console.log("DRAW")
  }else if (getUserChoice === 'rock'&& getComputerInput === 'paper'){
    console.log("Computer Wins")
  }else if (getUserChoice === 'rock'&& getComputerInput === 'scissors'){
    console.log("You Win!")
  }else if (getUserChoice === 'paper'&& getComputerInput === 'rock'){
    console.log("You Win!")
  }else if (getUserChoice === 'paper'&& getComputerInput === 'paper'){
    console.log("DRAW")
  }else if (getUserChoice === 'paper'&& getComputerInput === 'scissors'){
    console.log("Computer Wins")
  }else if (getUserChoice === 'scissors'&& getComputerInput === 'rock'){
    console.log("Computer Wins")
  }else if (getUserChoice === 'scissors'&& getComputerInput === 'paper'){
    console.log("You Win!")
  }else if (getUserChoice === 'scissors'&& getComputerInput === 'scissors'){
    console.log("DRAW")
  }
}
determineWinner(player,comp)
