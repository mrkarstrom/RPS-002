import { expect } from 'chai';
import Game from '../src/models/Game.js';
import { beforeEach } from 'mocha';

describe('Rock Paper Scissor API test', () => {
  let game;

  beforeEach(() => {
    game = new Game('User1');
  });

  it('should let second user join the game.', () => {
    game.joinGame('User2');
    expect(game.user2.name).to.equal('User2');
  });
});
