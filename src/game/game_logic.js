
class Player {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.score = 0;
  }
}

const deck = {
  suits: ['spades', 'diamonds', 'hearts', 'clubs'],
  value: { min: 1, max: 13 },
  quantity: 52
};

function getCards(cardsNum) {
  const cards = [];

  for (let i = 0; i < cardsNum; i++) {

    const currentValue = (Math.floor(Math.random() * 13)) + 1;
    const currentSuit = deck.suits[(Math.floor(Math.random() * deck.suits.length))];
    const currentCard = { suit: currentSuit, value: currentValue};

    // without this check below, I can get the correct amount of cards, but
    //   cards may be repeated
    // with the chek I can't get enough cards :(

    // if(i > 0) {
    //   const check = cards.find(card => card.suit == currentSuit);
    //   if(!check) {
    //     cards.push(currentCard);
    //   }
    // }
    // else {
    //   console.log('first');
    //   cards.push(currentCard);
    // }

    cards.push(currentCard);

  }

  // I tried this below insted of the fo loop
  // NEGATIVE - my computer found this far too overwhelming + it doesn't work either

  // while(cards.length < cardsNum) {
  //
  //   const currentValue = (Math.floor(Math.random() * 13)) + 1;
  //   const currentSuit = deck.suits[(Math.floor(Math.random() * deck.suits.length))];
  //   const currentCard = { suit: currentSuit, value: currentValue};
  //
  //
  //   const check = cards.find(card => card.suit == currentSuit);
  //   if(!check) {
  //       cards.push(currentCard);
  //   }
  // console.log(cards);
  return cards;
}

function createPlayers(playersNum) {
  const players = [];

  for (let i = 1; i < (playersNum + 1); i++) {
    players.push(new Player('Player' + i));
  }
  return players;
}


function calculateScore(players) {

  players.map(player => {
    const cardValues = [];
    player.cards.map(card => cardValues.push(card.value));

    const cardsSum = cardValues.reduce((a, b) => a + b, 0);
    player.score = player.score + cardsSum;
  });
  return players;
}


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

function startGame(playersNum, cardsNum) {
  if((playersNum * cardsNum) < (deck.quantity + 1)) {

    console.log('start game');

    const currentPlayers = createPlayers(playersNum);
    console.log(currentPlayers);

    currentPlayers.map(player => {
      player.cards = getCards(cardsNum);
    });
    console.log(currentPlayers);

    calculateScore(currentPlayers);
    console.log(currentPlayers);

    const winners = checkTheWinner(currentPlayers);

    console.log(winners.map(winner => (winner.name + ' ')) + 'won!' + ` (with ${winners[0].score} scores)`);
    return winners.map(winner => (winner.name + ' ')) + 'won!' + ` (with ${winners[0].score} scores)`;

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
