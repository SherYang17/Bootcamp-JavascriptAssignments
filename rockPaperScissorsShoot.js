const hands = ['rock', 'paper', 'scissors'];

function getHand() {
  return hands[parseInt(Math.random() * 10) % 3];
}

const playerOne = {name: "Player 1", getHand: getHand, score: 0};
const playerTwo = {name: "Player 2", getHand: getHand, score: 0};
const playerThree = {name: "Player 3", getHand: getHand, score: 0};
const playerFour = {name: "Player 4", getHand: getHand, score: 0};

function playGround(playerOne, playerTwo) { //accidentally named it playground in the previous assignment, don't change.
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




// 1. Define a function called playGame() that takes arguments player1, player2, and playUntil.
function playGame(playerOne, playerTwo, playUntil = 5) {  // 4. Play a game to 5 wins
  while (playerOne.score < playUntil && playerTwo.score < playUntil) { // While loop?? It works, if it aint broke dont fix lol. Must be less than so it can be greater than 5
    const winner = playGround(playerOne, playerTwo); // 3. When one player has won enough games, return the winning player object
    if (winner) {
      winner.score++;
    }
  }
  if (playerOne.score === playUntil) {
      return playerOne;  // 3. When one player has won enough games, return the winning player object
  } else {
      return playerTwo;  // 3. When one player has won enough games, return the winning player object
  }
}

// 5. Define a function called playTournament()
function playTournament(playerOne, playerTwo, playerThree, playerFour, playUntil = 3) {  // 6. Take 4 players and playUntil as arguments
  const winnerOne = playGame(playerOne, playerTwo, playUntil);         // 7. Play a game between the first two players, and the second two players
  const winnerTwo = playGame(playerThree, playerFour, playUntil);      // 7. Play a game between the first two players, and the second two players
  const tournamentWinner = playGame(winnerOne, winnerTwo, playUntil);  // 8. Play a game between the winners of the first round.
  console.log(tournamentWinner.name + " is the world champion");       // 9. Announce the tournament winner's name "[name] is the world champion";
}

playTournament(playerOne, playerTwo, playerThree, playerFour); // Not in the list of requirements but you need to run the function in order for it to play...





// 1. Define a function called playGame() that takes arguments player1, player2, and playUntil.
// 2. Play rounds until one of the players wins playUntil hands
// 3. When one player has won enough games, return the winning player object
// 4. Play a game to 5 wins
// 5. Define a function called playTournament()
// 6. Take 4 players and playUntil as arguments
// 7. Play a game between the first two players, and the second two players
// 8. Play a game between the winners of the first round.
// 9. Announce the tournament winner's name "[name] is the world champion";