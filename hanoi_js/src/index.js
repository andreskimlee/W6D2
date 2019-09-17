const HanoiGame = require("./game");
const View = require("./toh-view");

$(() => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  const $toh = $('toh');
  new HanoiView(game, rootEl);
  const view = new View(game, $toh);
});
