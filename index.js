import express from 'express';
import gameRoutes from './src/routes/gameRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Rock-Paper-Scissor-API.' });
});

app.use('/api/games', gameRoutes);

app.listen(port, () => {
  console.log(`Server is now open on http://localhost:${port}`);
});
