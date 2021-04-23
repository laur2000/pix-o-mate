import { ModelCtor, Sequelize } from 'sequelize-typescript';
import { env } from 'src/config/env';

const { MYSQL_HOST, MYSQL_PORT, MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, MYSQL_SYNC } = env;

export interface InitializeSequelizeOptions {
  models: string[] | ModelCtor[];
  triggers: string[];
}

export const initializeSequelize = async (opts: InitializeSequelizeOptions) => {
  const { models, triggers } = opts;

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
    // Create or Update models
    await sequelize.sync();

    // Create or Update triggers
    Promise.all(triggers.map((x) => sequelize.query(x))).catch(console.error)
  }

  return sequelize;
};
