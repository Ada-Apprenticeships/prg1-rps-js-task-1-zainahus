function rockPaperScissors(player1, player2) {
    const winConditions = {
        rock: ["scissors", "lizard"],
        scissors: ["paper", "lizard"],
        paper: ["rock", "spock"],
        lizard: ["spock", "paper"],
        spock: ["scissors", "rock"],
    };

    // Debugging Statements
    console.log(`Player 1: ${player1}, Player 2: ${player2}`);

    // Check for invalid input
    if (!(player1 in winConditions) || !(player2 in winConditions)) {
        return "Invalid input";
    }

    // Check for draw
    if (player1 === player2) {
        return "draw";
    }
    
    // Check for player1 win
    if (winConditions[player1].includes(player2)) {
        return "player1";
    }
    
    // Check for player2 win
    if (winConditions[player2].includes(player1)) {
        return "player2";
    }
    
    // Handle unexpected case
    return "There is something faulty with the programme";
}

// Test the function
console.log(rockPaperScissors("paper", "spock")); // Should return "player1"
console.log(rockPaperScissors("rock", "rock"));   // Should return "draw"
console.log(rockPaperScissors("spock", "lizard")); // Should return "player2"
console.log(rockPaperScissors("invalid", "rock")); // Should return "Invalid input"

// Leave this code here for the automated tests
module.exports = {
    rockPaperScissors,
};

// Leave this code here for the automated tests
module.exports = {
    rockPaperScissors,
  };
  