function checkTheWinner(players) {
  let scores = [];
  players.map(player => scores.push(player.score));

  let winnerScore = Math.max(...scores);

  return winnerScore;
}

module.exports.checkTheWinner = checkTheWinner;
