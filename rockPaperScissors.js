// Define a hands array with the values 'rock', 'paper', and 'scissors';
const hands = ['rock', 'paper', 'scissors'];

// Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3
function getHand() {
  return hands[parseInt(Math.random() * 10) % 3];
}
console.log(getHand());

// Define two objects for two players. Each player has name and getHand() properties. getHand function?
const playerOne = {name: "Sher", getHand: getHand};
const playerTwo = {name: "Elizabeth", getHand: getHand};


  // Define a function called playRound() that
// Takes two player objects as arguments
// Gets hands from each
// Determines the winner
// Logs the hands played and name of the winner.
// If its a tie, log the hands played and "it's a tie".
// Returns the winner object (null if no winner)
function playGround(playerOne, playerTwo) {
    const handOne = playerOne.getHand();
    const handTwo = playerTwo.getHand();

      if (handOne === handTwo) {
        console.log("It's a tie! Both players played " + handOne);
        return null;
      } else if (handOne === "rock" && handTwo === "scissors") {
        console.log(playerOne.name + " wins! " + playerOne.name + " played " + handOne + " and " + playerTwo.name + " played " + handTwo);
        return playerOne;
      } else if (handOne === "paper" && handTwo === "rock") {
        console.log(playerOne.name + " wins! " + playerOne.name + " played " + handOne + " and " + playerTwo.name + " played " + handTwo);
        return playerOne;
      } else if (handOne === "scissors" && handTwo === "paper") {
        console.log(playerOne.name + " wins! " + playerOne.name + " played " + handOne + " and " + playerTwo.name + " played " + handTwo);
        return playerOne;
      } else {
        console.log(playerTwo.name + " wins! " + playerOne.name + " played " + handOne + " and " + playerTwo.name + " played " + handTwo);
        return playerTwo;
      }
  }
  console.log(playGround(playerOne, playerTwo));







  //https://stackoverflow.com/questions/75124589/javascript-rock-paper-scissors-game-issue-with-the-score
  //https://stackoverflow.com/questions/71506000/rock-paper-and-scissor-picks-answers-randomly
  //defining two objects examples https://www.tutorialsteacher.com/javascript/javascript-object