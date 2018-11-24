const expect = require('chai').expect;

describe('Deck',() => {
  const deck = require('../src/game/game_logic').deck;

  it('should look like this',() => {
    // expect(deck).to.be.an('object');
    expect(deck).to.deep.equal({
      suits: ['spades', 'diamonds', 'hearts', 'clubs'],
      value: { min: 1, max: 13 },
      quantity: 52
    });
  });
});

describe('Player',() => {
  const Player = require('../src/game/game_logic').Player;

  it('should look like this',() => {
    // expect(new Player('Player1')).to.be.an('object');
    expect(new Player('Player1')).to.deep.equal({
      name: 'Player1',
      cards: [],
      score: 0
    });
  });
});

describe('createPlayers',() => {
  const createPlayers = require('../src/game/game_logic').createPlayers;

  it('should create one Player',() => {
    // expect(createPlayers(1)).to.be.an('array');
    expect(createPlayers(1)).to.deep.equal([{
      name: 'Player1',
      cards: [],
      score: 0
    }]);
  });

  it('should create 2 Players',() => {
    expect(createPlayers(2)).to.deep.equal([
      {
        name: 'Player1',
        cards: [],
        score: 0
      }, {
        name: 'Player2',
        cards: [],
        score: 0
      }
    ]);
  });
});

describe('getCards',() => {
  const getCards = require('../src/game/game_logic').getCards;

  it('should provide the given amount of cards',() => {
    // expect(getCards(2)).to.be.an('array');
    expect(getCards(20).length).to.be.equal(20);
  });

  it('should check if a single card is correct',() => {
    expect(getCards(1)[0]).to.have.all.keys('suit', 'value');
    expect(getCards(1)[0].value).to.be.within(1, 13);
    expect(['spades', 'hearts', 'diamonds', 'clubs']).to.include(getCards(1)[0].suit);
  });

  // it('should check if all the cards are different',() => {
  //   expect(getCards(4)).to.deep.equal(['a card', 'a card']);
  //
  // });
});

describe('calculateScore',() => {
  const calculateScore = require('../src/game/game_logic').calculateScore;

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
  const checkTheWinner = require('../src/game/game_logic').checkTheWinner;

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

describe('startGame',() => {
  const startGame = require('../src/game/game_logic').startGame;
  it('should check if the players + cards combination was possible',() => {
    expect(startGame(2, 51)).to.be.equal(
      "There wouldn't be enough cards for everyone. Please choose less players or cards!");
    expect(startGame(2, 5)).to.be.a('string');
  });
});
