import { Sequelize } from 'sequelize';

const user = process.env.POSTGRES_USER || 'user';
const password = process.env.POSTGRES_PASSWORD || 'password';
const db = process.env.POSTGRES_DB || 'pantry';
const host = process.env.POSTGRES_HOST || 'localhost';
const port = process.env.POSTGRES_PORT || '5432';

const POSTGRES_CONNECTION_STRING = `postgres://${user}:${password}@${host}:${port}/${db}`;

const sequelize = new Sequelize(POSTGRES_CONNECTION_STRING, {
  // TODO add custom logging
  logging: false,
});

try {
  await sequelize.authenticate();
} catch (error) {
  console.error('Sequelize authentication error:', error);
}

export default sequelize;