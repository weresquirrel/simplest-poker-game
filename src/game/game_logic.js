// defining what properties a player has
class Player {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.score = 0;
  }
}

// defining the deck
const deck = {
  suits: ['spades', 'diamonds', 'hearts', 'clubs'],
  value: { min: 1, max: 13 },
  quantity: 52
};

// Int => Array
// Takes the cardsNum (how many cards players should have in the current game)
// and chooses cardsNum many random cards from the deck by finding a random suite
//  and a random value for each card.
// The issue is: any card may be given more then one time in the game.
function getCards(cardsNum) {
  const cards = [];

  for (let i = 0; i < cardsNum; i++) {

    const currentValue = (Math.floor(Math.random() * 13)) + 1;
    const currentSuit = deck.suits[(Math.floor(Math.random() * deck.suits.length))];
    const currentCard = { suit: currentSuit, value: currentValue};

    cards.push(currentCard);

  }

  return cards;
}

// Int => Array
// Takes the playersNum (how many players want to play)
// based on the Player "blueprint" create playersNum many players
function createPlayers(playersNum) {
  const players = [];

  for (let i = 1; i < (playersNum + 1); i++) {
    players.push(new Player('Player' + i));
  }
  return players;
}

// Array => Array
// Takes the list of the players, one by one calculates the sum of their hands
// and modify their score by adding this sum to it.
function calculateScore(players) {
  players.map(player => {
    const cardValues = [];
    player.cards.map(card => cardValues.push(card.value));

    const cardsSum = cardValues.reduce((a, b) => a + b, 0);
    player.score = player.score + cardsSum;
  });
  return players;
}

// Array => Array
// Takes the list of the players, and collect their scores in an array
// Find the highest one among these scores
// Loop over on the players again to find everyone with this highest score
// Comes back with the list of the winning players
function checkTheWinner(players) {
  const scores = [];
  const winners = [];

  players.map(player => scores.push(player.score));

  const winnerScore = Math.max(...scores);

  players.map(player => {
    if(player.score == winnerScore) {
      winners.push(player);
    }
  });

  return winners;
}

//  Int, Int => String
// Takes how many players want to play with how many cards in the hands
// Check if the combination woud be possible considering the amount of the cards
//  in the deck.
// If the combo is not possible: it comes back with a warning message
// If the combo is possible:
//  calls the functions declared above to create enouch players, give them enough
//    cards, calculate everyone's score and find the winners
//  it comes back with a message wich tells who won with how many points
function startGame(playersNum, cardsNum) {
  if((playersNum * cardsNum) < (deck.quantity + 1)) {
    const currentPlayers = createPlayers(playersNum);

    currentPlayers.map(player => {
      player.cards = getCards(cardsNum);
    });

    calculateScore(currentPlayers);
    console.log(currentPlayers);

    const winners = checkTheWinner(currentPlayers);
    return winners.map(winner => (winner.name + ' ')) + 'won!' + ` (with ${winners[0].score} points)`;

  } else {
    return "There wouldn't be enough cards for everyone. Please choose less players or cards!";
  }
}


module.exports.checkTheWinner = checkTheWinner;
module.exports.calculateScore = calculateScore;
module.exports.Player = Player;
module.exports.createPlayers = createPlayers;
module.exports.deck = deck;
module.exports.getCards = getCards;
module.exports.startGame = startGame;
