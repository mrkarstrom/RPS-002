import express from 'express';
import {
  createGame,
  joinGame,
  makeMove,
  getGame,
} from '../controllers/gameController.js';

const router = express.Router();

router.post('/', createGame);
router.post('/:id/join', joinGame);
router.post('/:id/move', makeMove);
router.get('/:id', getGame);

export default router;
