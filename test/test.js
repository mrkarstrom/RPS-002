import { expect } from 'chai';
import Game from '../src/models/Game.js';
import { beforeEach } from 'mocha';

describe('Rock Paper Scissor API test', () => {
  let game;

  beforeEach(() => {
    game = new Game('User1');
  });

  it('should let second user join the game.', () => {
    game.joinExistingGame('User2');
    expect(game.user2.name).to.equal('User2');
  });

  it('should Not let a third user join the game.', () => {
    game.joinExistingGame('User2');
    expect(() => game.joinExistingGame('User3')).to.throw(
      'No more users allowed!'
    );
  });

  it('should let first user select rock.', () => {
    game.joinExistingGame('User2');
    game.makeMove('User1', 'rock');
    expect(game.user2.name).to.equal('User2');
  });

  it('should set user1 as winner if user1 selects rock when user2 selects scissors.', () => {
    game.joinExistingGame('User2');
    game.makeMove('User1', 'rock');
    game.makeMove('User2', 'scissors');
    expect(game.winner).to.equal('User1');
  });
});
