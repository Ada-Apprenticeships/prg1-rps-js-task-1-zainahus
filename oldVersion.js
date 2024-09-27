function rockPaperScissors(player1, player2) {
    const winConditions = {
        rock: ["scissors", "lizard"],
        scissors: ["paper", "lizard"],
        paper: ["rock", "spock"],
        lizard: ["spock", "paper"],
        spock: ["scissors", "rock"],


} else if (player1 === "rock" && player2 === "scissors") {
    return "player1";
  } else if (player1 === "paper" && player2 === "rock") {
    return "player1";
  } else if (player1 === "rock" && player2 === "paper") {
    return "player2";
  } else if (player1 === "scissors" && player2 === "paper") {
    return "player1";
  } else if (player1 === "rock" && player2 === "lizard") {
    return "player1";
  } else if (player1 === "scissors" && player2 === "lizard") {
    return "player1";
  } else if (player1 === "lizard" && player2 === "paper") {
    return "player1";
  } else if (player1 === "spock" && player2 === "rock") {
    return "player1";
  } else if (player1 === "spock" && player2 === "scissors") {
    return "player1";
  } else if (player1 === "lizard" && player2 === "spock") {
    return "player1";
  } else if (player1 === "paper" && player2 === "spock") {
    return "player1";
  } else if (player1 === "scissors" && player2 === "rock") {
    return "player2";
  } else if (player1 === "paper" && player2 === "scissors") {
    return "player2";
  } else if (player1 === "paper" && player2 === "lizard") {
    return "player2";
  } else if (player1 === "spock" && player2 === "lizard") {
    return "player2";
  } else if (player1 === "spock" && player2 === "paper") {
    return "player2";
  } else if (player1 === "lizard" && player2 === "rock") {
    return "player2";
  } else if (player1 === "lizard" && player2 === "scissors") {
    return "player2";
  } else if (player1 === "rock" && player2 === "spock") {
    return "player2";
  } else if (player1 === "scissors" && player2 === "spock") {
    return "player2";
  } else {
    console.log("There is something faulty with the programme");
  }
}


// Leave this code here for the automated tests
module.exports = {
    rockPaperScissors,
  };
