const expect = require('chai').expect;

describe('calculateScore',() => {
  const calculateScore = require('../game/game_logic').calculateScore;

  it('should summarize players cards',() => {
    players = [
      {name: 'player1', cards: [1, 2, 3], score: 0},
      {name: 'player2', cards: [10, 11, 1], score: 0}
    ];

    expect(calculateScore(players)).to.be.an('array');
    expect(calculateScore(players)).to.deep.equal([
      {name: 'player1', cards: [1, 2, 3], score: 6},
      {name: 'player2', cards: [10, 11, 1], score: 22}
    ]);
  });
});

describe('checkTheWinner',() => {
  const checkTheWinner = require('../game/game_logic').checkTheWinner;

  it('should find a player with the greatest score',() => {
    players = [
      {name: 'player1', score: 1},
      {name: 'player2', score: 2}
    ];

    expect(checkTheWinner(players)).to.be.an('array');
    expect(checkTheWinner(players)).to.deep.equal([{name: 'player2', score: 2}]);
  });

  it('should find all players with the greatest score',() => {
    players = [
      {name: 'player1', score: 1},
      {name: 'player2', score: 2},
      {name: 'player3', score: 2}
    ];

    expect(checkTheWinner(players)).to.deep.equal(
      [{name: 'player2', score: 2}, {name: 'player3', score: 2}]
    );
  });

});
