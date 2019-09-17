const View = require("./ttt-view")
const Game = require("./solution/game")

  $(() => {
    const newGame = new Game();
    const $ttt = $('.ttt')
    const view = new View(newGame, $ttt);

  });
