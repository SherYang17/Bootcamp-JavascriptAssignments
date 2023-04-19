const hands = ['rock', 'paper', 'scissors'];

function getHand() {
    return hands[Math.floor(Math.random() * 3)];
}

// deleted all the other players to make it 1v1
const playerOne = {name: "You", getHand: getHand, score: 0};

function playRound(playerOne, handOne, handTwo) {
    const result = document.getElementById("result");
    const user = document.getElementById("user");
    const userHand = document.getElementById("userHand");
    const ai = document.getElementById("ai");
    const aiHand = document.getElementById("aiHand");

    user.textContent = "You";
    userHand.textContent = handOne;
    ai.textContent = "Super AI"
    aiHand.textContent = handTwo;
    result.textContent = playGame(playerOne, {name:"Super AI", getHand: function() { return handTwo; }, score: 0}, handOne);
  }


function playGame(playerOne, playerTwo, handOne) {
    const handTwo = playerTwo.getHand();

    if (handOne === handTwo) {
        return "Phew OMG 🙏🙏🙏🙏🙏🙏! It's a tie! You both played the same hand which was " + handOne;
    }   else if (handOne === "rock" && handTwo === "scissors" || handOne === "paper" && handTwo === "rock" || handOne === "scissors" && handTwo === "paper") {
        playerOne.score += 1;
        document.getElementById("aiScore").textContent = parseInt(document.getElementById("aiScore").textContent) + 1;
        return playerOne.name + " win 😎! " + playerOne.name + " played " + handOne + " and " + playerTwo.name + " played " + handTwo;
    }   else {
        playerTwo.score += 1;
        document.getElementById("userScore").textContent = parseInt(document.getElementById("userScore").textContent) + 1;
        return "LOL you suck 🤣, " + playerTwo.name + " wins! " + playerOne.name + " played " + handOne + " and " + playerTwo.name + " played " + handTwo;
    }
}



document.getElementById("rock").addEventListener("click", function() {
    playRound(playerOne, "rock", getHand());
});

  document.getElementById("paper").addEventListener("click", function() {
    playRound(playerOne, "paper", getHand());
});

  document.getElementById("scissor").addEventListener("click", function() {
    playRound(playerOne, "scissors", getHand());
});






// Rock paper scissors with images https://www.youtube.com/watch?v=1yS-JV4fWqY
// https://www.educative.io/answers/what-is-dom-property-textcontent


//   if (handOne === handTwo) {
//     return "It's a tie! Both players played " + handOne;
//   } else if (handOne === "rock" && handTwo === "scissors") {
//     return playerOne.name + " wins! " + playerOne.name + " played " + handOne + " and SUPER AI played " + handTwo;
//     playerOne.score += 1;
//   } else if (handOne === "paper" && handTwo === "rock") {
//     return playerOne.name + " wins! " + playerOne.name + " played " + handOne + " and SUPER AI played " + handTwo;
//     playerOne.score += 1;
//   } else if (handOne === "scissors" && handTwo === "paper") {
//     return playerOne.name + " wins! " + playerOne.name + " played " + handOne + " and SUPER AI played " + handTwo;
//     playerOne.score += 1;
//   } else {
//     return "SUPER AI wins! " + playerOne.name + " played " + handOne + " and SUPER AI played " + handTwo;
//     playerTwo.score += 1;
//   }