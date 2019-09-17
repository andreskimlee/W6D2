class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el; //DOM element <figure class="ttt"></figure>
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on('click', e => {
      let pos = $(e.target).data('pos');
      pos = pos.split(',').map(el => Number(el));
      this.game.playMove(pos);
      let mark = this.game.currentPlayer;
      const playerclass = "." + this.game.currentPlayer;
      // console.log(mark);
      $(e.target).addClass(playerclass);
      
      $(e.target).text(mark).css("background-color", "white");
      if (this.game.winner()) {
        const winner = this.game.currentPlayer;
        debugger;
        const winnerclass = "." + this.game.currentPlayer;
        const $body = $('body')
        $body.append('<div>You win, ' + `${this.game.currentPlayer}`+'</div>')
        $(winnerclass).css("background-color", "green");
      }
    })

  }

  makeMove($square) {}

  setupBoard() {
    const $ul = $('<ul>');
    this.$el.append($ul);
    for (let i = 0; i < 9; i++) {
      const row = $ul.append('<li>');
      // row.text('hello') question, why does only one appear? 
    }
    const $li = $('li'); //all $li's
    
    $li.addClass('square');
    
    const arr = [];
    //getting [row, col] values ?
    for(let row = 0; row < 3; row++) {
      for(let col = 0; col < 3; col++) {
        arr.push([row, col]);
      }
    }
    
    $li.each((idx, ele) => {
      // debugger 
      $(ele).data({pos: `${arr.shift()}`})
      // console.log($li[el])
     })
     console.log($($li[4]).data())
  }
}

module.exports = View;
