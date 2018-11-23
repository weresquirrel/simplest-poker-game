console.log('up N ...');

function callback() {
  console.log('... running');
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
