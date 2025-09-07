import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.POSTGRES_CONNECTION || '', {
  // TODO add custom logging
  logging: false,
});

try {
  await sequelize.authenticate();
} catch (error) {
  console.error('Sequelize authentication error:', error);
}

export default sequelize;