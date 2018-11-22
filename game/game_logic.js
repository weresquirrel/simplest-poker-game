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

module.exports.checkTheWinner = checkTheWinner;
module.exports.calculateScore = calculateScore;
