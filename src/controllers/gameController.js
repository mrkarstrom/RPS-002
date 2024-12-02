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

export const makeUserMove = (req, res) => {
  const { id } = req.params;
  const { name, move } = req.body;

  const game = games.get(id);

  if (!game)
    res.status(404).json({ message: `The game id: ${id} was not found.` });

  try {
    game.makeMove(name, move);
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

export const getGame = (req, res) => {
  const { id } = req.params;

  const game = games.get(id);
  if (!game) res.status(400).json({ message: 'Game was not found.' });

  res.json({
    id: game.id,
    user1: game.user1,
    user2: game.user2,
    winner: game.winner,
  });
};
