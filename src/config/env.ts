import dotenv from 'dotenv';

dotenv.config();

export interface Env {
  PORT: number;
  MYSQL_HOST: string;
  MYSQL_PORT: number;
  MYSQL_USER: string;
  MYSQL_PASSWORD: string;
  MYSQL_DATABASE: string;
  MYSQL_SYNC: boolean;
}

// Server Config
const PORT = Number(process.env.PORT) || 3000;

// MySQL Config
const MYSQL_HOST = process.env.MYSQL_HOST || 'localhost';
const MYSQL_PORT = Number(process.env.MYSQL_PORT) || 3306;
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'mysql';
const MYSQL_USER = process.env.MYSQL_USER || 'root';
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || 'password';
const MYSQL_SYNC = Boolean(process.env.MYSQL_SYNC) || true;

export const env: Env = {
  PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
  MYSQL_SYNC,
};
