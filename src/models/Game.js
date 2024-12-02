export default class Game {
  constructor(userName) {
    this.id = null;
    this.user1 = { name: userName, move: null };
    this.user2 = null;
    this.winner = null;
  }

  joinGame(user2Name) {
    if (this.user2) throw new Error('No more users allowed!');
    this.user2 = { name: user2Name, move: null };
  }

  makeMove(userName, move) {
    const validMoves = ['rock', 'paper', 'scissors'];

    if (!validMoves.includes(move.toLowerCase()))
      throw new Error(
        `Sorry, but ${move} is not a valid move, chose from rock, paper or scissors!`
      );

    if (this.winner)
      throw new Error(
        `Sorry, this game has already been settled and the winner was ${this.winner}`
      );

    if (this.user1.name === userName) this.user1.move = move;
    if (this.user2?.name === userName) this.user2.move = move;

    if (this.user1.move && this.user2.move) decideWinner();
  }

  decideWinner() {
    const { move: move1 } = this.user1.move;
    const { move: move2 } = this.user2.move;

    if (move1 === move2) this.winner = 'Draw!';
    else if (
      (move1 === 'rock' && move2 === 'scissors') ||
      (move1 === 'paper' && move2 === 'rock') ||
      (move1 === 'scissors' && move2 === 'paper')
    )
      this.winner = this.user1.name;
    else this.winner = this.user2.name;
  }
}
