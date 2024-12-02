import Game from '../models/Game.js';
import { generateId } from '../utils/generateId';

const games = Map();

export const createGame = (req, res) => {
  const { name } = req.body;
  if (!name) res.status(400).json({ message: 'You must enter your name!' });

  const game = new Game(name);
  game.id = generateId();
  games.set(game.id, game);

  res.status(201).json({ id: game.id, user1Name: name, winner: null });
};

export const joinGame = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: 'You must enter a name.' });

  const game = games.get(id);

  try {
    game.joinExistingGame(name);
    res.json({
      id: game.id,
      user1: game.user1,
      user2: game.user2,
      winner: game.winner,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

};

export const makeMove = (req, res) => {
    
}

//getGame
