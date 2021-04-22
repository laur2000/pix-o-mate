import { Sequelize } from 'sequelize-typescript';
import { env } from 'src/config/env';

const { MYSQL_HOST, MYSQL_PORT, MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD } = env;

export interface InitializeSequelizeOptions {
  sync?: boolean;
}

export const initializeSequelize = async (opts: InitializeSequelizeOptions = {}) => {
  const { sync } = opts;

  const sequelize = new Sequelize({
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    database: MYSQL_DATABASE,
    dialect: 'mysql',
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    models: ['src/models/**/*'],
  });

  if (sync) {
    await sequelize.sync();
  }

  return sequelize;
};
