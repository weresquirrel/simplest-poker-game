const expect = require('chai').expect;

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
