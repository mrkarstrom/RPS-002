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

  /**
   * Testing all valid user1 moves
   */
  it('should let first user select rock.', () => {
    game.joinExistingGame('User2');
    game.makeMove('User1', 'rock');
    expect(game.user1.move).to.equal('rock');
  });

  it('should let first user select paper.', () => {
    game.joinExistingGame('User2');
    game.makeMove('User1', 'paper');
    expect(game.user1.move).to.equal('paper');
  });

  it('should let first user select scissors.', () => {
    game.joinExistingGame('User2');
    game.makeMove('User1', 'scissors');
    expect(game.user1.move).to.equal('scissors');
  });

  /**
   * Testing all valid user2 moves
   */
  it('should let second user select rock.', () => {
    game.joinExistingGame('User2');
    game.makeMove('User2', 'rock');
    expect(game.user2.move).to.equal('rock');
  });

  it('should let second user select paper.', () => {
    game.joinExistingGame('User2');
    game.makeMove('User2', 'paper');
    expect(game.user2.move).to.equal('paper');
  });

  it('should let second user select scissors.', () => {
    game.joinExistingGame('User2');
    game.makeMove('User2', 'scissors');
    expect(game.user2.move).to.equal('scissors');
  });

  /**
   * Testing all user1 winner moves
   */
  it('should set user1 as winner if user1 selects rock when user2 selects scissors.', () => {
    game.joinExistingGame('User2');
    game.makeMove('User1', 'rock');
    game.makeMove('User2', 'scissors');
    expect(game.winner).to.equal('User1');
  });
  it('should set user1 as winner if user1 selects paper when user2 selects rock.', () => {
    game.joinExistingGame('User2');
    game.makeMove('User1', 'paper');
    game.makeMove('User2', 'rock');
    expect(game.winner).to.equal('User1');
  });
  it('should set user1 as winner if user1 selects scissors when user2 selects paper.', () => {
    game.joinExistingGame('User2');
    game.makeMove('User1', 'scissors');
    game.makeMove('User2', 'paper');
    expect(game.winner).to.equal('User1');
  });

  /**
   * Testing all user2 winner moves
   */
  it('should set user2 as winner if user2 selects rock when user1 selects scissors.', () => {
    game.joinExistingGame('User2');
    game.makeMove('User1', 'scissors');
    game.makeMove('User2', 'rock');
    expect(game.winner).to.equal('User2');
  });
  it('should set user2 as winner if user2 selects paper when user1 selects rock.', () => {
    game.joinExistingGame('User2');
    game.makeMove('User1', 'rock');
    game.makeMove('User2', 'paper');
    expect(game.winner).to.equal('User2');
  });
  it('should set user2 as winner if user2 selects scissors when user1 selects paper.', () => {
    game.joinExistingGame('User2');
    game.makeMove('User1', 'paper');
    game.makeMove('User2', 'scissors');
    expect(game.winner).to.equal('User2');
  });
});
