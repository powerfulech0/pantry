import express from 'express';

import sequelize from './sequelize';
import itemRouter from './routes/items';

try {
  await sequelize.sync();
} catch (error) {
  console.error('Sequelize sync error:', error);
}

const app = express();
const port = process.env.API_PORT || 3000;

app.use(express.json());

app.use('/api/items', itemRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the Pantry API! \n');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
