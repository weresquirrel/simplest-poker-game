// console.log('up N ...');

import { startGame } from './game/game_logic.js';


function callback() {
  // console.log('... running');

  let playersNum = 2;
  let cardsNum = 5;


  const playersForm = document.getElementById('players');
  const cardsForm = document.getElementById('cards');
  const userInfo = document.getElementById('user-info');
  const startBtn = document.getElementsByTagName('button')[0];

  playersForm.addEventListener('change', () => {
    playersNum = parseInt(playersForm.value);
    // console.log(playersNum);
  });

  cardsForm.addEventListener('change', () => {
    cardsNum = parseInt(cardsForm.value);
    // console.log(cardsNum);
  });

  startBtn.addEventListener('click', () => {
    userInfo.innerText = startGame(playersNum, cardsNum);
  })
}

if (
    document.readyState == "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}


// 1. get the info hom many players (playersNum), and cards (cardsNum) user want
  //  - check if it's even possible!
// 2. create <playersNum> players
// 3. give every players <cardsNum> cards
// 4. calculate scores for every player
// 5. based on the scores decide who won.
// 6. inform the user about the result.
