const expect = require('chai').expect;

describe('checkTheWinner',() => {
  const checkTheWinner = require('../game/game_logic').checkTheWinner;

  it('should find the greatest score',() => {
    players = [
      {score: 1},
      {score: 2}
    ];



    expect(checkTheWinner(players)).to.be.equal(2);
  });
});
