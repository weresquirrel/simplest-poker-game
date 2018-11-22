const expect = require('chai').expect;

describe('calculateScore',() => {
  const calculateScore = require('../game/game_logic').calculateScore;

  it('should summarize the value of players cards and add it to the players scores',() => {
    players = [
      {
        name: 'player1',
        cards: [
          {suit: 'hearts', value: 1},
          {suit: 'spades', value: 2},
          {suit: 'hearts', value: 3}
        ],
        score: 1
      }, {
        name: 'player2',
        cards: [
          {suit: 'spades', value: 10},
          {suit: 'hearts', value: 11},
          {suit: 'diamonds', value: 1}
        ],
        score: 0}
    ];

    expect(calculateScore(players)).to.deep.equal([
      {
        name: 'player1',
        cards: [
          {suit: 'hearts', value: 1},
          {suit: 'spades', value: 2},
          {suit: 'hearts', value: 3}
        ],
        score: 7
      }, {
        name: 'player2',
        cards: [
          {suit: 'spades', value: 10},
          {suit: 'hearts', value: 11},
          {suit: 'diamonds', value: 1}
        ],
        score: 22}
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

    // expect(checkTheWinner(players)).to.be.an('array');
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
