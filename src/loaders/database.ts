import { ModelCtor, Sequelize } from 'sequelize-typescript';
import { env } from 'src/config/env';

const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_SYNC,
} = env;

export interface InitializeSequelizeOptions {
  models: string[] | ModelCtor[];
}

export const initializeSequelize = async (opts: InitializeSequelizeOptions) => {
  const { models } = opts;

  const sequelize = new Sequelize({
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    database: MYSQL_DATABASE,
    dialect: 'mysql',
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    models: models,
  });

  if (MYSQL_SYNC) {
    await sequelize.sync();
  }

  return sequelize;
};
